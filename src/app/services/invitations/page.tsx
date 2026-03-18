
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  QrCode, 
  Smartphone, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  BarChart3,
  Sparkles
} from 'lucide-react';
import { ConnectionMeshAnimation } from '@/components/connection-mesh-animation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Invitations Électroniques - ITSS',
  description: 'Digitalisez vos événements avec notre système d\'invitations intelligentes. Gestion Flutter et affichage Web élégant.',
};

const features = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Gestion Mobile (Flutter)",
    description: "Pilotez vos listes d'invités, envoyez les liens et gérez les entrées depuis notre application mobile dédiée."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Affichage Web Premium",
    description: "Vos invités reçoivent un lien unique ouvrant une page web sublime, optimisée pour tous les smartphones."
  },
  {
    icon: <QrCode className="h-10 w-10 text-primary" />,
    title: "Validation par QR Code",
    description: "Chaque invitation possède un QR code unique. Scannez-le à l'entrée pour valider la présence instantanément."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Suivi en Temps Réel",
    description: "Sachez qui a vu l'invitation, qui a confirmé et qui est déjà arrivé, le tout synchronisé via Supabase."
  }
];

export default function InvitationServicePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'invitation-service-hero');

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
        <ConnectionMeshAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="outline" className="mb-4 py-1 px-4 border-primary text-primary font-bold">
                NOUVEAU SERVICE
              </Badge>
              <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight leading-tight">
                L'Invitation <span className="text-primary">Réinventée</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-xl">
                Dites adieu au papier. Offrez à vos invités une expérience numérique prestigieuse pour vos mariages, galas et conférences à Bunia.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link href="/contact?subject=Système d'Invitations">Démarrer un projet</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <Link href="#comment-ca-marche">Comment ça marche ?</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5">
              {heroImage && (
                <Image 
                  src={heroImage.imageUrl || ""} 
                  alt={heroImage.description || "Service d'invitations"}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4">Une Solution Complète</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous avons combiné la puissance du mobile et l'accessibilité du web pour créer le système d'invitation le plus avancé de la région.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="border-none bg-card/50 backdrop-blur-sm hover:translate-y-[-5px] transition-transform">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="comment-ca-marche" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-headline font-bold text-center mb-16">Le Parcours de l'Invité</h2>
            <div className="space-y-12">
              <Step 
                num="01" 
                title="Création & Envoi" 
                desc="Vous créez l'événement et importez vos invités dans l'application mobile. Un lien unique est généré pour chaque personne." 
              />
              <Step 
                num="02" 
                title="Réception Instantanée" 
                desc="L'invité reçoit son lien par WhatsApp, SMS ou Email. Pas d'application à installer, tout s'ouvre dans le navigateur." 
              />
              <Step 
                num="03" 
                title="Confirmation en un Clic" 
                desc="L'invité consulte les détails (lieu, date, message) et confirme sa présence directement sur la page web." 
              />
              <Step 
                num="04" 
                title="Check-in Sécurisé" 
                desc="Le jour J, vous scannez le QR code sur le téléphone de l'invité. La présence est validée et enregistrée en temps réel." 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <Sparkles className="h-16 w-16 mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Prêt à impressionner vos invités ?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Que ce soit pour un mariage de prestige ou une conférence internationale à Bunia, notre système s'adapte à tous vos besoins.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold" asChild>
            <Link href="/contact?subject=Devis Système Invitations">Demander un devis personnalisé</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-8 items-start group">
      <div className="text-6xl font-headline font-black text-primary/10 group-hover:text-primary/20 transition-colors leading-none">
        {num}
      </div>
      <div className="pt-2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Badge({ children, variant, className }: { children: React.ReactNode; variant?: "outline" | "default"; className?: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}
