'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Clock, Check, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface InvitationPageProps {
  params: Promise<{ token: string }>;
}

export default function InvitationPage({ params }: InvitationPageProps) {
  // Déballer les paramètres de manière sécurisée pour Next.js 15
  const resolvedParams = use(params);
  const token = resolvedParams.token;

  const [invitation, setInvitation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Éviter les erreurs d'hydratation
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
      setSuccessMessage(status === 'confirmed' ? 'Votre présence est confirmée !' : 'Merci de nous avoir prévenus.');
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUpdating(false);
    }
  };

  // Ne rien rendre tant que le client n'est pas monté pour éviter les mismatches d'hydratation
  if (!mounted) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-neutral-400 font-medium font-headline">Chargement de votre invitation...</p>
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
          <a href="/">Retour à l'accueil</a>
        </Button>
      </div>
    );
  }

  const { event, guest } = invitation;
  
  // Parsing sécurisé de la date
  let displayDate = 'Date à confirmer';
  let displayTime = '--:--';
  
  if (event.date) {
    const eventDate = parseISO(event.date);
    if (isValid(eventDate)) {
      displayDate = format(eventDate, 'EEEE d MMMM yyyy', { locale: fr });
      displayTime = format(eventDate, 'HH:mm', { locale: fr });
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950 py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700">
        <Card className="overflow-hidden border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] rounded-[2.5rem] bg-white text-neutral-900">
          <div className="relative h-64 w-full bg-neutral-200">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id || '1'}/800/600`}
              alt={event.title || 'Evénement'}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <Badge className="mb-3 bg-primary/90 hover:bg-primary text-white border-none px-3 py-1">INVITATION OFFICIELLE</Badge>
              <h1 className="text-3xl font-bold tracking-tight leading-tight uppercase font-headline">
                {event.title || 'Evénement sans titre'}
              </h1>
            </div>
          </div>

          <CardContent className="p-8 md:p-10">
            <div className="text-center mb-10">
              <p className="text-neutral-400 uppercase tracking-[0.2em] text-[10px] font-black mb-2">Honneur à</p>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight font-headline">
                {guest.name || 'Cher invité'}
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-5">
                <div className="bg-neutral-100 p-3 rounded-2xl text-primary">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Date</span>
                  <span className="text-lg font-bold text-neutral-900">{displayDate}</span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-neutral-100 p-3 rounded-2xl text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Heure</span>
                  <span className="text-lg font-bold text-neutral-900">{displayTime}</span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-neutral-100 p-3 rounded-2xl text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Lieu</span>
                  <span className="text-lg font-bold text-neutral-900">
                    {event.location || 'Lieu communiqué prochainement'}
                  </span>
                </div>
              </div>
            </div>

            {event.description && (
              <div className="bg-neutral-50 p-6 rounded-[1.5rem] mb-10 relative">
                 <div className="absolute -top-3 left-6 bg-white px-3 py-1 text-[10px] font-bold text-neutral-400 border rounded-full">NOTE DE L'HÔTE</div>
                 <p className="text-neutral-600 text-sm italic leading-relaxed">"{event.description}"</p>
              </div>
            )}

            <div className="flex flex-col items-center justify-center p-8 bg-neutral-900 rounded-[2rem] shadow-inner mb-10">
               <div className="bg-white p-4 rounded-3xl shadow-2xl">
                <QRCodeSVG value={token || ''} size={160} level="H" includeMargin={false} />
               </div>
               <p className="text-[9px] text-neutral-500 mt-6 font-mono tracking-widest uppercase">
                ID: {token?.substring(0, 18)}...
               </p>
            </div>

            {successMessage ? (
              <div className="text-center p-6 bg-primary/10 text-primary rounded-[1.5rem] font-bold animate-in zoom-in-95 duration-500 border border-primary/20">
                <Check className="h-8 w-8 mx-auto mb-3" />
                <p className="text-lg">{successMessage}</p>
                <p className="text-xs font-normal opacity-80 mt-2">Votre réponse a été enregistrée avec succès.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Button 
                  className="w-full h-16 rounded-[1.5rem] text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
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
          </CardContent>
        </Card>

        <div className="text-center mt-12 space-y-2">
          <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-bold">Expérience de prestige par</p>
          <p className="font-headline font-black text-white text-xl tracking-tighter">ITSS <span className="text-primary">DRC</span></p>
        </div>
      </div>
    </div>
  );
}
