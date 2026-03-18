
'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Loader2, AlertCircle, ArrowLeft, Heart, ShieldCheck, Ticket, Info } from 'lucide-react';
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
    <div className="min-h-screen bg-[#f7f3ed] text-[#4a3f35] py-6 px-4 selection:bg-[#8c7a6b] selection:text-white relative overflow-x-hidden">
      {/* Texture papier */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative z-10 max-w-md mx-auto">
        
        {/* Navigation discrète */}
        <div className="flex justify-between items-center mb-4 px-1">
          <Link href="/" className="flex items-center gap-1.5 text-[#8c7a6b] hover:opacity-70 transition-all">
            <ArrowLeft className="h-3 w-3" />
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase">ITSS DRC</span>
          </Link>
          <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#8c7a6b] opacity-40">
            INV-{token.substring(0, 6).toUpperCase()}
          </span>
        </div>

        {/* CARTON D'INVITATION */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-[#eee6d9] flex flex-col relative">
          
          {/* SECTION IMAGE & TITRE (Header visuel) */}
          <div className="relative h-48 w-full">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id}/800/600`}
              alt={event.name}
              fill
              className="object-cover"
              priority
            />
            {/* Dégradé de fondu vers le bas (blanc/crème) */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/20" />
            
            {/* Titre sur l'image */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#8c7a6b] font-black mb-1 drop-shadow-sm">Invitation</p>
              <h1 className="text-xl md:text-2xl font-serif tracking-tight text-[#2d241d] leading-tight drop-shadow-sm">
                {event.name}
              </h1>
            </div>
          </div>

          <CardContent className="p-6 md:p-8 space-y-6 bg-white relative">
            
            {/* Information Invité */}
            <div className="text-center space-y-3">
                <div className="flex justify-center opacity-30">
                    <Heart className="h-3 w-3 text-[#d4bca4]" fill="#d4bca4" />
                </div>
                <div className="space-y-0.5">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#8c7a6b] font-medium">Pour l'honorable</p>
                    <h2 className="text-2xl font-serif text-[#2d241d] leading-tight">
                        {guest.first_name} {guest.last_name}
                    </h2>
                    {guest.guest_type === 'couple' && guest.companion_name && (
                        <div className="flex flex-col items-center">
                          <span className="text-sm font-serif italic text-[#8c7a6b] my-0.5">&</span>
                          <h3 className="text-xl font-serif text-[#2d241d]">
                              {guest.companion_name}
                          </h3>
                        </div>
                    )}
                </div>
                <Badge variant="outline" className="border-[#eee6d9] text-[#8c7a6b] rounded-full px-4 py-0.5 text-[8px] font-bold uppercase tracking-widest bg-[#fdfcfb]">
                    {guest.category || 'Invité de prestige'}
                </Badge>
            </div>

            {/* Grille de détails compacte */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#f2ece4]">
              <div className="space-y-0.5 text-center sm:text-left">
                <p className="text-[8px] font-bold text-[#8c7a6b] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                    <Calendar className="h-2 w-2" /> Le Moment
                </p>
                <p className="text-xs font-serif font-bold">{displayDate}</p>
                <p className="text-[10px] text-[#8c7a6b] italic">À partir de {displayTime}</p>
              </div>
              
              <div className="space-y-0.5 text-center sm:text-left border-l border-[#f2ece4] pl-4">
                <p className="text-[8px] font-bold text-[#8c7a6b] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                    <MapPin className="h-2 w-2" /> Le Lieu
                </p>
                <p className="text-xs font-serif font-bold leading-tight">{event.location}</p>
                <p className="text-[10px] text-[#8c7a6b] italic">{event.city}, {event.province}</p>
              </div>
            </div>

            {/* Message personnalisé (si présent) */}
            {msgBody && (
              <div className="max-w-xs mx-auto text-center px-4">
                <p className="text-[11px] font-serif italic text-[#6a5a4d] leading-relaxed">
                  "{msgBody}"
                </p>
              </div>
            )}

            {/* SECTION ACTIONS / QR CODE (Très compacte) */}
            <div className="pt-2 text-center flex flex-col items-center justify-center min-h-[140px]">
                {isCheckedIn ? (
                  <div className="bg-[#f8faf9] border border-[#e8f0ed] rounded-2xl p-6 w-full animate-in fade-in duration-700">
                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h4 className="text-[#2d3a35] text-sm font-serif font-bold mb-1">Accès Confirmé</h4>
                    <p className="text-[#647c72] text-[8px] font-bold uppercase tracking-[0.2em]">
                        Validation effectuée à l'entrée
                    </p>
                  </div>
                ) : isConfirmed ? (
                  <div className="space-y-3 animate-in fade-in zoom-in duration-500">
                    <div className="bg-white p-3 rounded-2xl shadow-xl border border-[#f2ece4] inline-block">
                      <QRCodeSVG 
                        value={guest.qr_code_data || token} 
                        size={110} 
                        level="H" 
                        includeMargin={false}
                        fgColor="#2d241d"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[#8c7a6b] text-[8px] font-bold uppercase tracking-[0.2em]">Pass d'Accès</p>
                      <p className="text-[#8c7a6b] text-[9px] italic opacity-60">
                        À présenter à l'accueil
                      </p>
                    </div>
                  </div>
                ) : isDeclined ? (
                  <div className="py-4 opacity-40 animate-in fade-in duration-500">
                    <Info className="h-6 w-6 text-[#8c7a6b] mx-auto mb-2" />
                    <p className="text-[11px] font-serif italic">Cette invitation a été déclinée.</p>
                  </div>
                ) : (
                  <div className="space-y-4 w-full animate-in slide-in-from-bottom-2 duration-500">
                    <div className="space-y-3">
                        <p className="text-[#8c7a6b] text-[10px] font-serif italic">
                            Nous serions honorés de confirmer votre présence
                        </p>
                        <div className="flex flex-col gap-2 max-w-[200px] mx-auto">
                            <Button 
                                className="w-full h-10 rounded-full text-white shadow-lg text-[10px] font-bold tracking-widest uppercase transition-transform active:scale-95"
                                style={{ backgroundColor: primaryColor }}
                                onClick={() => handleResponse('confirmed')}
                                disabled={updating}
                            >
                                {updating ? <Loader2 className="h-4 w-4 animate-spin" /> : "Confirmer ma présence"}
                            </Button>
                            <Button 
                                variant="ghost" 
                                className="w-full h-8 text-[#8c7a6b] hover:text-red-600 font-serif italic text-[10px] hover:bg-transparent"
                                onClick={() => handleResponse('declined')}
                                disabled={updating}
                            >
                                Ne pourra pas venir
                            </Button>
                        </div>
                    </div>
                  </div>
                )}
            </div>

            {/* Pied de page de la carte */}
            <div className="text-center pt-6 border-t border-[#f2ece4] opacity-40 italic text-[9px] text-[#8c7a6b] font-serif">
              {invitation_data?.message?.footer || "Votre présence est notre plus beau cadeau."}
            </div>
          </CardContent>
        </div>

        {/* Branding final */}
        <div className="text-center py-6 mt-2">
            <p className="text-[7px] font-bold uppercase tracking-[0.4em] text-[#8c7a6b] opacity-20">
                Propulsé par ITSS DRC
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
