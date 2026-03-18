'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Clock, Check, Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
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
      
      setInvitation({ ...invitation, status });
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
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-neutral-400 font-medium font-headline">Préparation de votre invitation prestige...</p>
      </div>
    );
  }

  if (error || !invitation || !invitation.event || !invitation.guest) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 text-center">
        <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2 font-headline">Invitation introuvable</h1>
        <p className="text-neutral-400 mb-6 max-w-xs mx-auto">
          {error || 'Les informations de cette invitation sont incomplètes ou le lien est expiré.'}
        </p>
        <Button variant="outline" className="text-white border-neutral-700" asChild>
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </div>
    );
  }

  const { event, guest, invitation_data } = invitation;
  
  // Date formatée
  let displayDate = 'Date à confirmer';
  let displayTime = '--:--';
  if (event.start_date) {
    const eventDate = parseISO(event.start_date);
    if (isValid(eventDate)) {
      displayDate = format(eventDate, 'EEEE d MMMM yyyy', { locale: fr });
      displayTime = format(eventDate, 'HH:mm', { locale: fr });
    }
  }

  // Données de message (priorité au JSONB d'invitation_data)
  const msgTitle = invitation_data?.message?.title || "Vous êtes invité !";
  const msgSubtitle = invitation_data?.message?.subtitle || event.name;
  const msgBody = invitation_data?.message?.body || event.description;
  const msgFooter = invitation_data?.message?.footer || "Au plaisir de vous voir !";
  const primaryColor = invitation_data?.design?.primary_color || "hsl(var(--primary))";

  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950 py-12 px-4 flex flex-col items-center justify-start overflow-x-hidden">
      
      {/* Bouton retour accueil - Seul élément externe */}
      <Link href="/" className="mb-8 flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Retour au site</span>
      </Link>

      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700">
        <Card className="overflow-hidden border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] rounded-[2.5rem] bg-white text-neutral-900">
          
          {/* Header Image dynamique de l'événement */}
          <div className="relative h-72 w-full bg-neutral-200">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id}/1200/800`}
              alt={event.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <Badge className="mb-3 bg-white/20 backdrop-blur-md text-white border-white/30 px-3 py-1 uppercase tracking-widest text-[10px] font-bold">
                Invitation Officielle
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight leading-tight uppercase font-headline">
                {event.name}
              </h1>
            </div>
          </div>

          <CardContent className="p-8 md:p-10">
            
            {/* Message d'en-tête personnalisé */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-headline font-bold mb-2 text-neutral-800">
                {msgTitle}
              </h2>
              <p className="text-neutral-500 font-medium italic">
                {msgSubtitle}
              </p>
            </div>

            {/* Nom des invités */}
            <div className="text-center mb-12 py-8 border-y border-neutral-100 relative">
              <p className="text-neutral-400 uppercase tracking-[0.2em] text-[10px] font-black mb-3">Honneur à</p>
              <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight font-headline">
                {guest.first_name} {guest.last_name}
              </h3>
              {guest.guest_type === 'couple' && guest.companion_name && (
                <>
                  <p className="text-neutral-400 text-sm my-1">&</p>
                  <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight font-headline">
                    {guest.companion_name}
                  </h3>
                </>
              )}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4">
                <Badge variant="secondary" className="bg-neutral-100 text-neutral-500 text-[9px] uppercase font-bold">
                  {guest.category || 'Invité'}
                </Badge>
              </div>
            </div>

            {/* Détails logistiques */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-5">
                <div className="bg-neutral-100 p-3 rounded-2xl text-primary" style={{ color: primaryColor }}>
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Date</span>
                  <span className="text-lg font-bold text-neutral-900 capitalize">{displayDate}</span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-neutral-100 p-3 rounded-2xl text-primary" style={{ color: primaryColor }}>
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Heure</span>
                  <span className="text-lg font-bold text-neutral-900">{displayTime}</span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-neutral-100 p-3 rounded-2xl text-primary" style={{ color: primaryColor }}>
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Lieu</span>
                  <span className="text-lg font-bold text-neutral-900">
                    {event.location}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {event.city}, {event.province}, {event.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Corps du message personnalisé */}
            {msgBody && (
              <div className="bg-neutral-50 p-6 rounded-[1.5rem] mb-12 relative border border-neutral-100">
                 <div className="absolute -top-3 left-6 bg-white px-3 py-1 text-[10px] font-bold text-neutral-400 border rounded-full">NOTE DE L'HÔTE</div>
                 <p className="text-neutral-600 text-sm italic leading-relaxed text-center">"{msgBody}"</p>
              </div>
            )}

            {/* QR Code Section */}
            <div className="flex flex-col items-center justify-center p-8 bg-neutral-900 rounded-[2.5rem] shadow-inner mb-12">
               <div className="bg-white p-4 rounded-3xl shadow-2xl">
                <QRCodeSVG 
                  value={guest.qr_code_data || token} 
                  size={160} 
                  level="H" 
                  includeMargin={false}
                />
               </div>
               <p className="text-[9px] text-neutral-500 mt-6 font-mono tracking-widest uppercase opacity-50">
                Code de validation unique
               </p>
            </div>

            {/* Actions / Success Message */}
            {successMessage || invitation.status === 'confirmed' || invitation.status === 'declined' ? (
              <div className="text-center p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 animate-in zoom-in-95 duration-500">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}>
                  <Check className="h-8 w-8" />
                </div>
                <p className="text-xl font-bold font-headline mb-2">
                  {successMessage || (invitation.status === 'confirmed' ? "Présence confirmée" : "Absence signalée")}
                </p>
                <p className="text-sm text-neutral-500">Merci de votre réponse.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Button 
                  className="w-full h-16 rounded-[1.5rem] text-lg font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                  style={{ backgroundColor: primaryColor }}
                  onClick={() => handleResponse('confirmed')}
                  disabled={updating}
                >
                  {updating ? <Loader2 className="animate-spin h-6 w-6" /> : "Confirmer ma présence"}
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full h-14 rounded-[1.5rem] text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors font-semibold"
                  onClick={() => handleResponse('declined')}
                  disabled={updating}
                >
                  Je ne pourrai pas être présent
                </Button>
              </div>
            )}

            {/* Footer personnalisé */}
            <div className="mt-12 text-center">
              <p className="text-neutral-400 text-sm italic">{msgFooter}</p>
            </div>
          </CardContent>
        </Card>

        {/* Branding ITSS discret */}
        <div className="text-center mt-12 space-y-2 opacity-30">
          <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-bold">Expérience de prestige par</p>
          <p className="font-headline font-black text-white text-xl tracking-tighter">ITSS <span className="text-primary">DRC</span></p>
        </div>
      </div>
    </div>
  );
}
