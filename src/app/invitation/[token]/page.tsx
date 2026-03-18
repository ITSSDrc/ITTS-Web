
'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Clock, Loader2, AlertCircle, ArrowLeft, Heart, ShieldCheck, Ticket, Info } from 'lucide-react';
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
        <Loader2 className="h-12 w-12 text-[#8c7a6b] animate-spin mb-4" />
        <p className="text-[#8c7a6b] font-serif italic">Préparation de votre invitation...</p>
      </div>
    );
  }

  if (error || !invitation || !invitation.event || !invitation.guest) {
    return (
      <div className="min-h-screen bg-[#fcfaf7] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="h-16 w-16 text-[#8c7a6b] mb-6 opacity-50" />
        <h1 className="text-3xl font-serif text-[#4a3f35] mb-3">Oups !</h1>
        <p className="text-[#8c7a6b] mb-8 max-w-sm mx-auto font-serif italic">
          {error || "Nous n'avons pas pu trouver cette invitation."}
        </p>
        <Button variant="outline" asChild className="rounded-full border-[#8c7a6b] text-[#8c7a6b] hover:bg-[#8c7a6b] hover:text-white transition-all">
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
    <div className="min-h-screen bg-[#f9f7f2] text-[#4a3f35] py-6 md:py-12 px-4 selection:bg-[#8c7a6b] selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="relative z-10 max-w-xl mx-auto">
        
        <div className="flex justify-between items-center mb-4 px-2">
          <Link href="/" className="flex items-center gap-2 text-[#8c7a6b] hover:opacity-70 transition-all">
            <ArrowLeft className="h-3 w-3" />
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase">ITSS DRC</span>
          </Link>
          <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#8c7a6b] opacity-50">
            {token.substring(0, 8).toUpperCase()}
          </span>
        </div>

        <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] rounded-2xl overflow-hidden border border-[#eee6d9]">
          
          <div className="relative pt-12 pb-8 px-6 text-center bg-[#fdfcfb]">
            <div className="absolute top-0 left-0 w-24 h-24 opacity-15 pointer-events-none">
                <Image src="https://picsum.photos/seed/leaves1/200/200" alt="decor" width={200} height={200} className="object-contain rotate-[-15deg]" data-ai-hint="botanical leaves" />
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 opacity-15 pointer-events-none scale-x-[-1]">
                <Image src="https://picsum.photos/seed/leaves2/200/200" alt="decor" width={200} height={200} className="object-contain rotate-[15deg]" data-ai-hint="botanical flowers" />
            </div>

            <div className="space-y-4">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#8c7a6b] font-semibold">Invitation Cordiale</p>
                <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#2d241d] leading-tight px-2 capitalize">
                    {event.name}
                </h1>
                <div className="flex items-center justify-center gap-3 text-[#8c7a6b] font-serif italic text-xs">
                    <span>{displayDate}</span>
                    <span className="w-1 h-1 bg-[#8c7a6b] rounded-full" />
                    <span>{event.location}</span>
                </div>
            </div>
          </div>

          <div className="relative aspect-[21/9] w-full overflow-hidden border-y border-[#eee6d9]">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id}/1200/500`}
              alt={event.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <CardContent className="p-6 md:p-10 space-y-10">
            
            <div className="text-center space-y-4">
                <div className="flex justify-center">
                    <Heart className="h-4 w-4 text-[#d4bca4]" fill="#d4bca4" />
                </div>
                <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#8c7a6b] mb-2">En l'honneur de</p>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#2d241d]">
                        {guest.first_name} {guest.last_name}
                    </h2>
                    {guest.guest_type === 'couple' && guest.companion_name && (
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-serif italic text-[#8c7a6b] my-1">&</span>
                          <h3 className="text-2xl md:text-3xl font-serif text-[#2d241d]">
                              {guest.companion_name}
                          </h3>
                        </div>
                    )}
                </div>
                <Badge variant="outline" className="border-[#eee6d9] text-[#8c7a6b] rounded-full px-4 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] bg-[#fdfcfb]">
                    {guest.category || 'Invité Spécial'}
                </Badge>
            </div>

            <div className="grid grid-cols-2 gap-8 py-6 border-y border-[#f2ece4] text-center sm:text-left">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <Calendar className="h-3 w-3 text-[#8c7a6b] opacity-60" />
                    <p className="text-[8px] font-bold text-[#8c7a6b] uppercase tracking-widest">Le Moment</p>
                </div>
                <p className="text-base font-serif">{displayDate}</p>
                <p className="text-[10px] text-[#8c7a6b] italic">À partir de {displayTime}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <MapPin className="h-3 w-3 text-[#8c7a6b] opacity-60" />
                    <p className="text-[8px] font-bold text-[#8c7a6b] uppercase tracking-widest">Le Lieu</p>
                </div>
                <p className="text-base font-serif leading-snug">{event.location}</p>
                <p className="text-[10px] text-[#8c7a6b] italic">{event.city}, {event.country}</p>
              </div>
            </div>

            {msgBody && (
              <div className="max-w-xs mx-auto text-center">
                <p className="text-base font-serif italic text-[#6a5a4d] leading-relaxed">
                  "{msgBody}"
                </p>
              </div>
            )}

            <div className="pt-4 text-center">
                {isCheckedIn ? (
                  <div className="bg-[#f8faf9] border border-[#e8f0ed] rounded-xl p-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <ShieldCheck className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="text-[#2d3a35] text-lg font-serif mb-1">Accès Confirmé</h4>
                    <p className="text-[#647c72] text-[9px] font-medium uppercase tracking-widest leading-loose">
                        Invitation validée à l'entrée.
                    </p>
                  </div>
                ) : isConfirmed ? (
                  <div className="space-y-6">
                    <div className="inline-block bg-white p-4 rounded-xl shadow-md border border-[#f2ece4]">
                      <QRCodeSVG 
                        value={guest.qr_code_data || token} 
                        size={140} 
                        level="H" 
                        includeMargin={false}
                        fgColor="#2d241d"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#8c7a6b] text-[9px] font-bold uppercase tracking-[0.2em]">Pass d'Accès Personnel</p>
                      <p className="text-[#8c7a6b] text-[9px] italic opacity-70">
                        À présenter à l'accueil pour votre enregistrement.
                      </p>
                    </div>
                  </div>
                ) : isDeclined ? (
                  <div className="py-4 opacity-50">
                    <Info className="h-8 w-8 text-[#8c7a6b] mx-auto mb-2" />
                    <p className="text-[#8c7a6b] text-[10px] font-serif italic">Vous avez décliné l'invitation.</p>
                  </div>
                ) : (
                  <div className="py-4 space-y-6">
                    <div className="w-12 h-12 bg-[#f9f7f2] rounded-full flex items-center justify-center mx-auto">
                        <Ticket className="h-6 w-6 text-[#d4bca4]" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-[#8c7a6b] text-[11px] font-serif italic max-w-xs mx-auto">
                            Merci de confirmer votre présence.
                        </p>
                        <div className="flex flex-col gap-3 max-w-[240px] mx-auto pt-2">
                            <Button 
                                className="w-full h-12 rounded-full text-white shadow-md hover:scale-[1.01] transition-all"
                                style={{ backgroundColor: primaryColor }}
                                onClick={() => handleResponse('confirmed')}
                                disabled={updating}
                            >
                                {updating ? <Loader2 className="h-4 w-4 animate-spin" /> : "Je serai présent(e)"}
                            </Button>
                            <Button 
                                variant="ghost" 
                                className="w-full h-10 text-[#8c7a6b] hover:text-red-600 font-serif italic text-xs"
                                onClick={() => handleResponse('declined')}
                                disabled={updating}
                            >
                                Je ne pourrai pas venir
                            </Button>
                        </div>
                    </div>
                  </div>
                )}
            </div>

            <div className="text-center pt-8 border-t border-[#f2ece4] opacity-50 italic text-[10px] text-[#8c7a6b]">
              {invitation_data?.message?.footer || "Au plaisir de vous voir."}
            </div>
          </CardContent>
        </div>

        <div className="text-center py-8">
            <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#8c7a6b] opacity-40">
                Expérience conçue par ITSS DRC
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
