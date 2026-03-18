
'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Loader2, AlertCircle, ArrowLeft, Heart, ShieldCheck, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface InvitationPageProps {
  params: Promise<{ token: string }>;
}

export default function InvitationPage({ params }: InvitationPageProps) {
  const resolvedParams = use(params);
  const token = resolvedParams.token;

  const [invitation, setInvitation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchInvitation() {
      if (!token) return;
      
      try {
        const res = await fetch(`/api/invitation/${token}`, { cache: 'no-store' });
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error || 'Invitation introuvable');
        }
        
        setInvitation(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    if (token) {
      fetchInvitation();
    }
  }, [token]);

  const handleResponse = async (status: 'confirmed' | 'declined') => {
    if (!token) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/invitation/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Erreur lors de la réponse');
      
      setInvitation((prev: any) => ({
        ...prev,
        status: status,
        guest: {
          ...prev.guest,
          status: status === 'confirmed' ? 'confirmed' : 'cancelled'
        }
      }));
      
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUpdating(false);
    }
  };

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fcfaf7] flex flex-col items-center justify-center p-4">
        <Loader2 className="h-10 w-10 text-[#8c7a6b] animate-spin mb-4" />
        <p className="text-[#8c7a6b] font-serif italic text-sm">Préparation de votre carton...</p>
      </div>
    );
  }

  if (error || !invitation || !invitation.event || !invitation.guest) {
    return (
      <div className="min-h-screen bg-[#fcfaf7] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="h-12 w-12 text-[#8c7a6b] mb-4 opacity-50" />
        <h1 className="text-2xl font-serif text-[#4a3f35] mb-2">Oups !</h1>
        <p className="text-[#8c7a6b] mb-6 max-w-sm mx-auto font-serif italic text-sm">
          {error || "Nous n'avons pas pu trouver cette invitation."}
        </p>
        <Button variant="outline" asChild className="rounded-full border-[#8c7a6b] text-[#8c7a6b] hover:bg-[#8c7a6b] hover:text-white h-9 text-xs">
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </div>
    );
  }

  const { event, guest, invitation_data, status: invStatus } = invitation;
  const isCheckedIn = guest.status === 'checked_in';
  const isConfirmed = invStatus === 'confirmed';
  const isDeclined = invStatus === 'declined';

  let displayDate = 'À confirmer';
  let displayTime = '--:--';
  if (event.start_date) {
    const eventDate = parseISO(event.start_date);
    if (isValid(eventDate)) {
      displayDate = format(eventDate, 'd MMMM yyyy', { locale: fr });
      displayTime = format(eventDate, 'HH:mm', { locale: fr });
    }
  }

  const primaryColor = invitation_data?.design?.primary_color || "#8c7a6b";
  const msgBody = invitation_data?.message?.body || event.description;

  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#4a3f35] py-4 px-4 selection:bg-[#8c7a6b] selection:text-white relative overflow-x-hidden flex flex-col items-center justify-center">
      {/* Texture papier globale */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative z-10 w-full max-w-md">
        
        {/* Navigation discrète */}
        <div className="flex justify-between items-center mb-3 px-2">
          <Link href="/" className="flex items-center gap-1.5 text-[#8c7a6b] hover:opacity-70 transition-all">
            <ArrowLeft className="h-3 w-3" />
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase">ITSS DRC</span>
          </Link>
          <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#8c7a6b] opacity-40">
            INV-{token.substring(0, 6).toUpperCase()}
          </span>
        </div>

        {/* CARTON D'INVITATION COMPACT */}
        <div className="bg-white shadow-[0_20px_50px_rgba(74,63,53,0.15)] rounded-[2rem] overflow-hidden border-[6px] border-[#fdfcfb] outline outline-1 outline-[#eee6d9] flex flex-col relative transition-all duration-500">
          
          {/* SECTION HEADER IMAGE (Moins haute, centrée verticalement) */}
          <div className="relative h-40 w-full bg-[#fdfcfb]">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id}/800/600`}
              alt={event.name}
              fill
              className="object-cover opacity-90"
              priority
            />
            {/* Dégradé doux vers le bas et le haut pour fusionner */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
            
            {/* Badge Titre sur l'image */}
            <div className="absolute bottom-2 left-0 w-full p-4 text-center">
              <h1 className="text-lg md:text-xl font-serif tracking-tight text-[#2d241d] leading-tight drop-shadow-sm bg-white/40 backdrop-blur-[2px] inline-block px-4 py-1 rounded-full border border-white/40">
                {event.name}
              </h1>
            </div>
          </div>

          <CardContent className="p-5 md:p-6 space-y-4 bg-white relative">
            
            {/* Information Invité (Très compact) */}
            <div className="text-center space-y-1">
                <div className="flex justify-center opacity-30 mb-1">
                    <Heart className="h-2.5 w-2.5 text-[#d4bca4]" fill="#d4bca4" />
                </div>
                <div className="space-y-0.5">
                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#8c7a6b] font-black">Pour l'honorable</p>
                    <h2 className="text-xl md:text-2xl font-serif text-[#2d241d] leading-tight font-black">
                        {guest.first_name} {guest.last_name}
                    </h2>
                    {guest.guest_type === 'couple' && guest.companion_name && (
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xs font-serif italic text-[#8c7a6b]">&</span>
                          <h3 className="text-lg font-serif text-[#2d241d] font-bold">
                              {guest.companion_name}
                          </h3>
                        </div>
                    )}
                </div>
                <Badge variant="outline" className="border-[#eee6d9] text-[#8c7a6b] rounded-full px-3 py-0 text-[7px] font-bold uppercase tracking-[0.2em] bg-[#fdfcfb]">
                    {guest.category || 'Invité de prestige'}
                </Badge>
            </div>

            {/* Grille de détails ultra-compacte */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#f2ece4]">
              <div className="space-y-0.5 text-center">
                <p className="text-[7px] font-black text-[#8c7a6b] uppercase tracking-[0.2em]">Le Moment</p>
                <p className="text-[10px] font-serif font-black">{displayDate}</p>
                <p className="text-[9px] text-[#8c7a6b] italic">Dès {displayTime}</p>
              </div>
              
              <div className="space-y-0.5 text-center border-l border-[#f2ece4]">
                <p className="text-[7px] font-black text-[#8c7a6b] uppercase tracking-[0.2em]">Le Lieu</p>
                <p className="text-[10px] font-serif font-black leading-tight">{event.location}</p>
                <p className="text-[9px] text-[#8c7a6b] italic">{event.city}</p>
              </div>
            </div>

            {/* Message personnalisé réduit */}
            {msgBody && (
              <div className="max-w-[280px] mx-auto text-center px-2">
                <p className="text-[10px] font-serif italic text-[#6a5a4d] leading-snug">
                  "{msgBody}"
                </p>
              </div>
            )}

            {/* SECTION ACTIONS / QR CODE (Optimisée) */}
            <div className="pt-1 text-center flex flex-col items-center justify-center min-h-[120px]">
                {isCheckedIn ? (
                  <div className="bg-[#f8faf9] border border-[#e8f0ed] rounded-2xl p-4 w-full animate-in fade-in duration-700">
                    <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    </div>
                    <h4 className="text-[#2d3a35] text-xs font-serif font-bold mb-0.5">Accès Confirmé</h4>
                    <p className="text-[#647c72] text-[7px] font-bold uppercase tracking-[0.2em]">
                        Validation à l'entrée effectuée
                    </p>
                  </div>
                ) : isConfirmed ? (
                  <div className="space-y-2 animate-in fade-in zoom-in duration-500">
                    <div className="bg-white p-2.5 rounded-2xl shadow-lg border border-[#f2ece4] inline-block">
                      <QRCodeSVG 
                        value={guest.qr_code_data || token} 
                        size={90} 
                        level="H" 
                        includeMargin={false}
                        fgColor="#2d241d"
                      />
                    </div>
                    <p className="text-[#8c7a6b] text-[8px] font-bold uppercase tracking-[0.3em] opacity-60">Pass d'Accès Personnel</p>
                  </div>
                ) : isDeclined ? (
                  <div className="py-2 opacity-40 animate-in fade-in duration-500">
                    <Info className="h-5 w-5 text-[#8c7a6b] mx-auto mb-1" />
                    <p className="text-[10px] font-serif italic">Invitation déclinée.</p>
                  </div>
                ) : (
                  <div className="space-y-3 w-full animate-in slide-in-from-bottom-2 duration-500">
                        <p className="text-[#8c7a6b] text-[9px] font-serif italic">
                            Nous serions honorés de votre présence
                        </p>
                        <div className="flex flex-col gap-2 max-w-[180px] mx-auto">
                            <Button 
                                className="w-full h-9 rounded-full text-white shadow-md text-[9px] font-bold tracking-widest uppercase transition-transform active:scale-95"
                                style={{ backgroundColor: primaryColor }}
                                onClick={() => handleResponse('confirmed')}
                                disabled={updating}
                            >
                                {updating ? <Loader2 className="h-3 w-3 animate-spin" /> : "Confirmer"}
                            </Button>
                            <Button 
                                variant="ghost" 
                                className="w-full h-7 text-[#8c7a6b] font-serif italic text-[9px] hover:bg-transparent"
                                onClick={() => handleResponse('declined')}
                                disabled={updating}
                            >
                                Ne pourra pas venir
                            </Button>
                        </div>
                  </div>
                )}
            </div>

            {/* Pied de page de la carte (Minimal) */}
            <div className="text-center pt-3 border-t border-[#f2ece4] opacity-30 italic text-[8px] text-[#8c7a6b] font-serif">
              {invitation_data?.message?.footer || "Votre présence nous honore."}
            </div>
          </CardContent>
        </div>

        {/* Branding final (Rapproché) */}
        <div className="text-center py-4">
            <p className="text-[7px] font-bold uppercase tracking-[0.4em] text-[#8c7a6b] opacity-20">
                ITSS DRC PREMIUM
            </p>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}
