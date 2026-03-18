
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  QrCode, 
  Smartphone, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  BarChart3,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ConnectionMeshAnimation } from '@/components/connection-mesh-animation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Invitations Numériques de Prestige - ITSS',
  description: 'Digitalisez vos événements avec notre système d\'invitations intelligentes. Une expérience élégante pour vos invités et une gestion simplifiée pour vous.',
};

const features = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Gestion Intelligente",
    description: "Pilotez vos listes d'invités, suivez les confirmations et gérez les entrées depuis une interface mobile intuitive et puissante."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Expérience Web Premium",
    description: "Vos invités reçoivent un lien unique ouvrant une page web sublime, conçue pour refléter le prestige de votre événement."
  },
  {
    icon: <QrCode className="h-10 w-10 text-primary" />,
    title: "Accès Sécurisé",
    description: "Chaque invitation possède un code numérique unique. Validez les entrées instantanément le jour J par simple scan."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Statistiques en Direct",
    description: "Sachez en temps réel qui a consulté son invitation, qui a confirmé et qui est présent à votre événement."
  }
];

export default function InvitationServicePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'invitation-service-hero');

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-20 bg-neutral-950">
        <ConnectionMeshAnimation className="opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/90" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                <Sparkles className="h-4 w-4" />
                L'INNOVATION ÉVÉNEMENTIELLE
              </div>
              <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight text-white leading-[1.1]">
                L'Invitation <br />
                <span className="text-primary italic">Réinventée</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl leading-relaxed">
                Dites adieu aux invitations papier. Offrez à vos convives une expérience numérique d'exception pour vos mariages, galas et conférences de haut standing.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full px-10 h-16 text-lg shadow-xl shadow-primary/20" asChild>
                  <Link href="/contact?subject=Système d'Invitations">Lancer mon événement</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg border-neutral-700 text-white hover:bg-white hover:text-black transition-all" asChild>
                  <Link href="#concept">Découvrir le concept</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] lg:aspect-square max-w-2xl mx-auto w-full rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-neutral-900/50">
              {heroImage && (
                <Image 
                  src={heroImage.imageUrl || ""} 
                  alt="Aperçu du service d'invitation premium"
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="luxury smartphone invitation"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="concept" className="py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Une Solution Clé en Main</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nous allions élégance visuelle et rigueur organisationnelle pour garantir le succès de vos réceptions les plus prestigieuses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="border-none shadow-none bg-neutral-50 dark:bg-neutral-900 p-4 hover:translate-y-[-8px] transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-neutral-100 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-headline font-bold">Un Parcours Sans Friction</h2>
                <p className="text-lg text-muted-foreground">
                  Chaque détail a été pensé pour simplifier la vie de l'organisateur et sublimer l'accueil de l'invité.
                </p>
              </div>
              <div className="space-y-10">
                <StepItem 
                  num="01" 
                  title="Planification Digitale" 
                  desc="Importez vos listes et générez des accès uniques pour chaque convive en quelques secondes." 
                />
                <StepItem 
                  num="02" 
                  title="Diffusion Instantanée" 
                  desc="Envoyez les invitations par le canal de votre choix. L'invité accède à son espace sans aucune installation." 
                />
                <StepItem 
                  num="03" 
                  title="Confirmation RSVP" 
                  desc="L'invité valide sa présence d'un simple clic. Votre tableau de bord se met à jour instantanément." 
                />
                <StepItem 
                  num="04" 
                  title="Accueil Prestige" 
                  desc="Le jour de l'événement, scannez les codes numériques pour un accueil fluide, rapide et sécurisé." 
                />
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square bg-primary/5 rounded-[40px] border border-primary/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-neutral-950/10 dark:bg-white/5 backdrop-blur-3xl" />
                <div className="relative z-10 text-center p-12 space-y-6">
                    <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold">Zéro Papier. <br />Impact Maximum.</h3>
                    <p className="text-lg text-muted-foreground">
                        Modernisez votre image tout en faisant un geste pour l'environnement.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <ConnectionMeshAnimation />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">Sublimez votre prochain événement</h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light">
            Mariages de luxe, sommets diplomatiques ou galas de bienfaisance : offrez-vous la sérénité technologique.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-12 h-20 text-xl font-bold shadow-2xl" asChild>
              <Link href="/contact?subject=Devis Système Invitations">Obtenir une proposition</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-12 h-20 text-xl font-bold bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/contact">Demander une démonstration</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function StepItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-8 group">
      <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary font-headline text-xl font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
        {num}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
