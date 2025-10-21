
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Code, Shield, Server, Zap, BrainCircuit, BotMessageSquare, LineChart } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeInOnScroll } from "@/components/fade-in-on-scroll";

const services = [
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Solutions Cloud",
    description: "Infrastructure cloud évolutive et sécurisée.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Logiciels sur mesure",
    description: "Solutions logicielles adaptées à vos besoins uniques.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Cybersécurité",
    description: "Protégez vos actifs numériques avec une sécurité avancée.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Intelligence Artificielle",
    description: "Intégrez l'IA pour automatiser et innover.",
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'itss-logo');
  const missionImage = PlaceHolderImages.find(p => p.id === 'mission-image');

  return (
    <div className="flex flex-col min-h-[calc(100vh-theme(spacing.14))]">
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-contain opacity-10 dark:opacity-20 p-16"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <FadeInOnScroll>
            <h1 className="text-5xl font-headline font-extrabold md:text-7xl lg:text-8xl tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
              Votre Partenaire<br />d'Innovation Technologique
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={200}>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              ITSS propulse votre entreprise vers l'avenir avec des solutions de pointe en Cloud, Logiciel, Cybersécurité et Intelligence Artificielle.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={400}>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" className="rounded-full font-semibold text-lg px-8 py-6" asChild>
                <Link href="/services">Explorer nos Services</Link>
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full font-semibold text-lg px-8 py-6" asChild>
                <Link href="/contact">Nous Contacter <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <FadeInOnScroll>
        <section id="mission" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square">
                {missionImage && (
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    fill
                    className="object-cover rounded-2xl"
                    data-ai-hint={missionImage.imageHint}
                  />
                )}
                 <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20" />
              </div>
              <div>
                <span className="text-primary font-semibold">NOTRE MISSION</span>
                <h2 className="text-4xl font-headline font-bold md:text-5xl mt-2">Accélérer Votre Transformation Numérique</h2>
                <p className="mt-6 text-muted-foreground text-lg">
                  Notre mission est de doter les entreprises de technologies de pointe et de conseils d'experts. Nous croyons en la construction de partenariats à long terme, en fournissant des solutions qui non seulement relèvent les défis d'aujourd'hui, mais ouvrent également la voie au succès futur. Nous nous engageons à l'excellence, à l'innovation et à l'intégrité dans tout ce que nous faisons.
                </p>
                 <Button variant="link" className="p-0 h-auto text-lg mt-6" asChild>
                    <Link href="/about">
                      En savoir plus sur nous <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section id="services" className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">NOS SERVICES</span>
              <h2 className="text-4xl font-headline font-bold md:text-5xl mt-2">Des Solutions Complètes Pour Votre Croissance</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Du cloud à l'IA, nous offrons une gamme complète de services pour répondre à tous vos besoins technologiques.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FadeInOnScroll key={service.title} delay={index * 100}>
                  <Card className="glow-card h-full text-center bg-card/80 backdrop-blur-sm border-white/10 hover:-translate-y-2 transition-transform duration-300">
                    <CardHeader className="items-center">
                      <div className="bg-primary/10 p-4 rounded-full">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4 text-xl font-semibold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="rounded-full font-semibold" asChild>
                <Link href="/services">
                  Découvrir tous les services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
}
