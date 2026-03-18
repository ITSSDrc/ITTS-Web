
'use client';

import { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MapPin, Calendar, Clock, Check, X, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface InvitationPageProps {
  params: Promise<{ token: string }>;
}

/**
 * Page d'affichage de l'invitation individuelle
 * Utilise React.use() pour déballer les params asynchrones de Next.js 15
 */
export default function InvitationPage({ params }: InvitationPageProps) {
  const { token } = use(params);
  const [invitation, setInvitation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInvitation() {
      try {
        const res = await fetch(`/api/invitation/${token}`);
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Invitation introuvable');
        }
        const data = await res.json();
        setInvitation(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (token) fetchInvitation();
  }, [token]);

  const handleResponse = async (status: 'confirmed' | 'declined') => {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4">
        <Loader2 className="h-12 w-12 text-white animate-spin mb-4" />
        <p className="text-white font-medium">Chargement de votre invitation...</p>
      </div>
    );
  }

  if (error || !invitation) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 text-center">
        <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Oups !</h1>
        <p className="text-neutral-400 mb-6">{error || 'Cette invitation semble invalide ou a expiré.'}</p>
        <Button variant="outline" className="text-white border-white" asChild>
          <a href="/">Retour à l'accueil</a>
        </Button>
      </div>
    );
  }

  const { event, guest } = invitation;
  const eventDate = new Date(event.date);

  return (
    <div className="min-h-screen bg-neutral-900 bg-gradient-to-b from-neutral-900 to-black py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700">
        <Card className="overflow-hidden border-none shadow-2xl rounded-2xl bg-white text-neutral-900">
          <div className="relative h-56 w-full bg-neutral-100">
            <Image
              src={event.image_url || `https://picsum.photos/seed/${event.id}/800/600`}
              alt={event.title}
              fill
              className="object-cover"
              data-ai-hint="event cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-3xl font-bold tracking-tight leading-tight">{event.title}</h1>
            </div>
          </div>

          <CardContent className="p-8">
            <div className="text-center mb-8">
              <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-2">Invitation pour</p>
              <h2 className="text-2xl font-bold text-neutral-900">{guest.name}</h2>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-neutral-600">
                <div className="bg-neutral-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-900">Date</span>
                  <span className="text-sm">{format(eventDate, 'EEEE d MMMM yyyy', { locale: fr })}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-600">
                <div className="bg-neutral-100 p-2 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-900">Heure</span>
                  <span className="text-sm">{format(eventDate, 'HH:mm', { locale: fr })}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-600">
                <div className="bg-neutral-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-900">Lieu</span>
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
            </div>

            {event.description && (
              <div className="bg-neutral-50 p-4 rounded-xl mb-8 italic text-neutral-600 text-sm border-l-4 border-neutral-300">
                "{event.description}"
              </div>
            )}

            <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-200 mb-8">
               <p className="text-xs font-bold text-neutral-400 uppercase tracking-tighter mb-4">Code de validation</p>
               <div className="bg-white p-3 rounded-xl shadow-sm">
                <QRCodeSVG value={token} size={140} level="H" />
               </div>
               <p className="text-[10px] text-neutral-400 mt-4 font-mono break-all text-center">{token}</p>
            </div>

            {successMessage ? (
              <div className="text-center p-4 bg-green-50 text-green-700 rounded-xl font-bold animate-in zoom-in-95 duration-300">
                <Check className="h-6 w-6 mx-auto mb-2" />
                {successMessage}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Button 
                  className="w-full h-14 rounded-xl text-lg font-bold bg-neutral-900 hover:bg-black"
                  onClick={() => handleResponse('confirmed')}
                  disabled={updating}
                >
                  {updating ? <Loader2 className="animate-spin h-5 w-5" /> : "Je confirme ma présence"}
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-neutral-500 hover:text-red-500 hover:bg-red-50"
                  onClick={() => handleResponse('declined')}
                  disabled={updating}
                >
                  Je ne pourrai pas venir
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <p className="text-center mt-8 text-neutral-500 text-sm">
          Propulsé par <span className="font-bold text-white">ITSS DRC</span>
        </p>
      </div>
    </div>
  );
}
