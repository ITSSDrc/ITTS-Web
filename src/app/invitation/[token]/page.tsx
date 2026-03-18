'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Clock, Check, Loader2, AlertCircle, ArrowLeft, CheckCircle2, ShieldCheck, Ticket, User, Users as UsersIcon, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchInvitation() {
      if (!token) return;
      
      try {
        const res = await fetch(`/api/invitation/${token}`);
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
      
      setSuccessMessage(status === 'confirmed' ? 'Votre présence est confirmée !' : 'Nous avons bien noté votre absence.');
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
        <div className="relative">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" />
        </div>
        <p className="mt-6 text-neutral-400 font-medium tracking-wide animate-pulse">Chargement de votre expérience...</p>
      </div>
    );
  }

  if (error || !invitation || !invitation.event || !invitation.guest) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-red-500/10 p-4 rounded-full mb-6">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-3xl font-headline font-bold text-white mb-3">Invitation Introuvable</h1>
        <p className="text-neutral-400 mb-8 max-w-sm mx-auto leading-relaxed">
          {error || 'Ce lien est invalide ou l\'invitation a été révoquée. Veuillez contacter l\'organisateur.'}
        </p>
        <Button variant="outline" className="rounded-full px-8 h-12 border-neutral-800 text-white hover:bg-white hover:text-black transition-all" asChild>
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </div>
    );
  }

  const { event, guest, invitation_data, status: invStatus } = invitation;
  const isCheckedIn = guest.status === 'checked_in';
  const isConfirmed = invStatus === 'confirmed';
  const isDeclined = invStatus === 'declined';

  let displayDate = 'Date à confirmer';
  let displayTime = '--:--';
  if (event.start_date) {
    const eventDate = parseISO(event.start_date);
    if (isValid(eventDate)) {
      displayDate = format(eventDate, 'EEEE d MMMM yyyy', { locale: fr });
      displayTime = format(eventDate, 'HH:mm', { locale: fr });
    }
  }

  const primaryColor = invitation_data?.design?.primary_color || "hsl(var(--primary))";
  const msgTitle = invitation_data?.message?.title || "Invitation Officielle";
  const msgBody = invitation_data?.message?.body || event.description;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-900 selection:bg-primary/30 py-10 px-4 md:px-0">
      {/* Discreet Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto space-y-8">
        
        {/* Navigation / Brand */}
        <div className="flex justify-between items-center px-2">
          <Link href="/" className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-all">
            <div className="p-2 rounded-full group-hover:bg-neutral-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">itssdrc.com</span>
          </Link>
          <Badge variant="outline" className="border-neutral-800 text-neutral-500 px-3 py-1 rounded-full uppercase text-[10px] tracking-widest font-bold">
            Réf: {token.substring(0, 8).toUpperCase()}
          </Badge>
        </div>

        {/* Main Invitation Card */}
        <Card className="border-none shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] bg-white overflow-hidden">
          
          {/* Header Image */}
          <div className="relative h-64 md:h-80 w-full group">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id}/1200/800`}
              alt={event.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                 <div className="h-1 w-8 bg-primary rounded-full" style={{ backgroundColor: primaryColor }} />
                 <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-black">Événement Privé</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-white tracking-tight leading-tight uppercase">
                {event.name}
              </h1>
            </div>
          </div>

          <CardContent className="p-8 md:p-12 space-y-12">
            
            {/* Guest Intro */}
            <div className="text-center space-y-6">
              <div className="inline-flex flex-col items-center">
                <span className="text-neutral-400 text-[10px] uppercase tracking-[0.4em] font-black mb-4">À l'attention de</span>
                <h2 className="text-3xl md:text-4xl font-headline font-black tracking-tighter text-neutral-900">
                  {guest.first_name} {guest.last_name}
                </h2>
                {guest.guest_type === 'couple' && guest.companion_name && (
                  <div className="flex flex-col items-center mt-2">
                    <span className="text-neutral-300 text-lg font-light italic">&</span>
                    <h3 className="text-3xl md:text-4xl font-headline font-black tracking-tighter text-neutral-900">
                      {guest.companion_name}
                    </h3>
                  </div>
                )}
                <Badge className="mt-6 bg-neutral-900 text-white rounded-full px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {guest.category || 'Invité Privilégié'}
                </Badge>
              </div>
            </div>

            {/* Event Essentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-neutral-100">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-primary" style={{ color: primaryColor }}>
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-neutral-400 tracking-wider mb-0.5">Date</p>
                  <p className="text-base font-bold text-neutral-900 capitalize leading-none">{displayDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-primary" style={{ color: primaryColor }}>
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-neutral-400 tracking-wider mb-0.5">Heure d'accueil</p>
                  <p className="text-base font-bold text-neutral-900 leading-none">{displayTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 md:col-span-2">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-primary" style={{ color: primaryColor }}>
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-neutral-400 tracking-wider mb-0.5">Lieu de réception</p>
                  <p className="text-base font-bold text-neutral-900 mb-1 leading-none">{event.location}</p>
                  <p className="text-xs text-neutral-500 font-medium">
                    {event.city}, {event.province}, {event.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Note */}
            {msgBody && (
              <div className="relative p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100/50 group overflow-hidden">
                <Info className="absolute top-6 right-6 h-10 w-10 text-neutral-200 group-hover:text-primary/10 transition-colors" />
                <p className="relative z-10 text-neutral-600 text-sm italic leading-relaxed md:text-base">
                  "{msgBody}"
                </p>
              </div>
            )}

            {/* QR Code / Access Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-neutral-900 rounded-[2.5rem] p-10 md:p-12 text-center overflow-hidden shadow-2xl">
                {isCheckedIn ? (
                  <div className="py-10 animate-in zoom-in-95 duration-700">
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/30 text-accent">
                      <ShieldCheck className="h-12 w-12" />
                    </div>
                    <h4 className="text-white text-2xl font-headline font-bold mb-2 uppercase tracking-tighter">Accès Validé</h4>
                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em]">Entrée enregistrée avec succès</p>
                  </div>
                ) : isConfirmed ? (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="inline-block bg-white p-5 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.03] duration-500">
                      <QRCodeSVG 
                        value={guest.qr_code_data || token} 
                        size={200} 
                        level="H" 
                        includeMargin={false}
                        fgColor="#171717"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-sm font-black uppercase tracking-[0.3em]">Code d'Accès Sécurisé</p>
                      <p className="text-neutral-500 text-[10px] font-mono leading-relaxed max-w-[200px] mx-auto opacity-70">
                        Présentez ce code à l'accueil pour valider votre entrée
                      </p>
                    </div>
                  </div>
                ) : isDeclined ? (
                  <div className="py-12">
                    <AlertCircle className="h-16 w-16 text-neutral-700 mx-auto mb-6" />
                    <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">Invitation Déclinée</p>
                  </div>
                ) : (
                  <div className="py-12 space-y-6">
                    <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mx-auto">
                      <Ticket className="h-10 w-10 text-neutral-600" />
                    </div>
                    <p className="text-neutral-400 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
                      Veuillez confirmer votre présence pour débloquer votre code d'accès numérique.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* RSVP Actions */}
            {!isCheckedIn && !isConfirmed && !isDeclined && (
              <div className="flex flex-col gap-4 animate-in fade-in duration-1000 delay-300">
                <Button 
                  className="w-full h-18 py-8 rounded-3xl text-xl font-headline font-black shadow-2xl transition-all hover:scale-[1.02] active:scale-95 text-white"
                  style={{ backgroundColor: primaryColor }}
                  onClick={() => handleResponse('confirmed')}
                  disabled={updating}
                >
                  {updating ? <Loader2 className="animate-spin h-8 w-8" /> : "Confirmer ma Présence"}
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full h-14 rounded-2xl text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-all font-bold text-sm"
                  onClick={() => handleResponse('declined')}
                  disabled={updating}
                >
                  Je ne pourrai pas venir
                </Button>
              </div>
            )}

            {/* Status Feedback */}
            {(isConfirmed || isDeclined) && !isCheckedIn && (
              <div className="text-center p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 animate-in zoom-in-95 duration-500">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: isConfirmed ? `${primaryColor}15` : '#fee2e2', color: isConfirmed ? primaryColor : '#ef4444' }}
                >
                  {isConfirmed ? <CheckCircle2 className="h-8 w-8" /> : <AlertCircle className="h-8 w-8" />}
                </div>
                <h4 className="text-xl font-headline font-black mb-2">
                  {isConfirmed ? "Présence Confirmée" : "Absence Signalée"}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {isConfirmed ? "Votre badge d'accès est désormais actif ci-dessus." : "Nous avons bien pris en compte votre réponse. Merci."}
                </p>
              </div>
            )}

            {/* Footer Quote */}
            <div className="text-center pt-8">
              <p className="text-neutral-400 text-sm italic font-medium leading-relaxed">
                {invitation_data?.message?.footer || "Au plaisir de vous recevoir pour ce moment d'exception."}
              </p>
            </div>

          </CardContent>
        </Card>

        {/* Branding footer */}
        <div className="text-center space-y-3 opacity-20 hover:opacity-100 transition-opacity duration-500 pb-12">
          <p className="text-neutral-500 text-[9px] uppercase tracking-[0.4em] font-black">Expérience numérique conçue par</p>
          <p className="font-headline font-black text-white text-2xl tracking-tighter">ITSS <span className="text-primary">DRC</span></p>
        </div>

      </div>
    </div>
  );
}