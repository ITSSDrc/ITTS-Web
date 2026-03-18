'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Clock, Loader2, AlertCircle, ArrowLeft, CheckCircle2, ShieldCheck, Ticket, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
        // cache: 'no-store' est crucial pour voir les changements de statut immédiatement
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
      
      // Mise à jour immédiate de l'interface
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
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4">
        <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
        <p className="text-neutral-400 animate-pulse">Chargement de votre invitation...</p>
      </div>
    );
  }

  if (error || !invitation || !invitation.event || !invitation.guest) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="h-16 w-16 text-red-500 mb-6" />
        <h1 className="text-3xl font-headline font-bold text-white mb-3">Oups !</h1>
        <p className="text-neutral-400 mb-8 max-w-sm mx-auto">
          {error || "Nous n'avons pas pu trouver cette invitation."}
        </p>
        <Button variant="outline" asChild className="rounded-full border-neutral-800 text-white">
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
      displayDate = format(eventDate, 'EEEE d MMMM yyyy', { locale: fr });
      displayTime = format(eventDate, 'HH:mm', { locale: fr });
    }
  }

  const primaryColor = invitation_data?.design?.primary_color || "hsl(var(--primary))";
  const msgBody = invitation_data?.message?.body || event.description;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-900 py-12 px-4">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto space-y-8">
        
        {/* Navigation */}
        <div className="flex justify-between items-center px-2">
          <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-xs font-bold tracking-widest uppercase">ITSS DRC</span>
          </Link>
          <Badge variant="outline" className="border-neutral-800 text-neutral-500 text-[10px] tracking-tighter">
            #{token.substring(0, 8).toUpperCase()}
          </Badge>
        </div>

        <Card className="border-none shadow-2xl rounded-[2.5rem] bg-white overflow-hidden">
          {/* Cover */}
          <div className="relative h-64 w-full">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id}/1200/800`}
              alt={event.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-8 right-8">
              <h1 className="text-2xl md:text-3xl font-headline font-black text-white uppercase leading-tight">
                {event.name}
              </h1>
            </div>
          </div>

          <CardContent className="p-8 md:p-12 space-y-10">
            {/* Guest Intro */}
            <div className="text-center space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-neutral-400">Invitation pour</p>
              <h2 className="text-3xl md:text-4xl font-headline font-black tracking-tighter">
                {guest.first_name} {guest.last_name}
              </h2>
              {guest.guest_type === 'couple' && guest.companion_name && (
                <div className="mt-2">
                  <p className="text-neutral-300 italic mb-1">&</p>
                  <h3 className="text-2xl font-headline font-black tracking-tighter">
                    {guest.companion_name}
                  </h3>
                </div>
              )}
              <Badge className="mt-4 bg-neutral-900 text-white rounded-full px-4 text-[10px] font-bold uppercase tracking-widest">
                {guest.category || 'Invité VIP'}
              </Badge>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-y border-neutral-100">
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5" style={{ color: primaryColor }} />
                <div>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Date</p>
                  <p className="text-sm font-bold capitalize">{displayDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5" style={{ color: primaryColor }} />
                <div>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Heure</p>
                  <p className="text-sm font-bold">{displayTime}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <MapPin className="h-5 w-5 shrink-0 mt-1" style={{ color: primaryColor }} />
                <div>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Lieu</p>
                  <p className="text-sm font-bold">{event.location}</p>
                  <p className="text-xs text-neutral-500 font-medium">{event.city}, {event.country}</p>
                </div>
              </div>
            </div>

            {/* Note */}
            {msgBody && (
              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-100 italic text-sm text-neutral-600 text-center">
                "{msgBody}"
              </div>
            )}

            {/* Access Section */}
            <div className="relative">
              <div className="bg-neutral-900 rounded-[2.5rem] p-10 text-center shadow-xl">
                {isCheckedIn ? (
                  <div className="py-8 space-y-4 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                      <ShieldCheck className="h-10 w-10 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-headline font-bold uppercase tracking-tight">Accès Validé</h4>
                      <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-1">Vous avez été enregistré à l'entrée</p>
                    </div>
                  </div>
                ) : isConfirmed ? (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="inline-block bg-white p-4 rounded-[2rem] shadow-2xl">
                      <QRCodeSVG 
                        value={guest.qr_code_data || token} 
                        size={180} 
                        level="H" 
                        includeMargin={false}
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-xs font-black uppercase tracking-[0.3em]">Code d'Accès Actif</p>
                      <p className="text-neutral-500 text-[9px] max-w-[200px] mx-auto opacity-70">
                        À présenter à l'accueil pour vérification numérique.
                      </p>
                    </div>
                  </div>
                ) : isDeclined ? (
                  <div className="py-10">
                    <AlertCircle className="h-12 w-12 text-neutral-700 mx-auto mb-4" />
                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Invitation déclinée</p>
                  </div>
                ) : (
                  <div className="py-10 space-y-6">
                    <Ticket className="h-12 w-12 text-neutral-800 mx-auto" />
                    <p className="text-neutral-400 text-xs font-medium max-w-[240px] mx-auto leading-relaxed">
                      Veuillez confirmer votre présence ci-dessous pour activer votre accès numérique.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* RSVP Buttons */}
            {!isCheckedIn && !isConfirmed && !isDeclined && (
              <div className="flex flex-col gap-3">
                <Button 
                  className="w-full h-16 rounded-2xl text-lg font-headline font-black text-white shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                  style={{ backgroundColor: primaryColor }}
                  onClick={() => handleResponse('confirmed')}
                  disabled={updating}
                >
                  {updating ? <Loader2 className="animate-spin" /> : "Confirmer ma Présence"}
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full h-12 text-neutral-400 hover:text-red-500 hover:bg-red-50 font-bold text-xs"
                  onClick={() => handleResponse('declined')}
                  disabled={updating}
                >
                  Je ne pourrai pas venir
                </Button>
              </div>
            )}

            {/* Final Status Note */}
            {(isConfirmed || isDeclined) && !isCheckedIn && (
              <div className="text-center py-4 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4" style={{ color: isConfirmed ? primaryColor : '#ef4444' }} />
                <span className="text-xs font-bold text-neutral-500">
                  {isConfirmed ? "Votre présence est enregistrée" : "Absence signalée"}
                </span>
              </div>
            )}

            <div className="text-center pt-6 opacity-40 italic text-[10px] text-neutral-400">
              {invitation_data?.message?.footer || "Au plaisir de vous recevoir."}
            </div>
          </CardContent>
        </Card>

        {/* Branding */}
        <div className="text-center opacity-20 hover:opacity-100 transition-opacity pb-10">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-1">Expérience conçue par</p>
          <p className="text-white font-headline font-black tracking-tighter">ITSS <span className="text-primary">DRC</span></p>
        </div>
      </div>
    </div>
  );
}
