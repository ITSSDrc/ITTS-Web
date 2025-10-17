import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Code, Shield, Server, Zap } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Solutions Cloud",
    description: "Infrastructure cloud évolutive et sécurisée pour alimenter vos applications.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Logiciels sur mesure",
    description: "Développement de logiciels sur mesure adaptés aux besoins uniques de votre entreprise.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Cybersécurité",
    description: "Protégez vos actifs numériques avec nos services de sécurité avancés.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Infogérance",
    description: "Gestion informatique fiable et proactive pour assurer le bon fonctionnement de vos systèmes.",
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex flex-col min-h-[calc(100vh-theme(spacing.14))]">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-headline font-bold md:text-6xl lg:text-7xl tracking-tighter">
            Façonner Votre Avenir Numérique
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            ITSS fournit des solutions technologiques innovantes pour stimuler la croissance et l'efficacité des entreprises. Nous sommes votre partenaire de confiance dans la transformation numérique.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/services">Nos Services</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold md:text-4xl">Notre Mission</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Notre mission est de doter les entreprises de technologies de pointe et de conseils d'experts. Nous croyons en la construction de partenariats à long terme, en fournissant des solutions qui non seulement relèvent les défis d'aujourd'hui, mais ouvrent également la voie au succès futur. Nous nous engageons à l'excellence, à l'innovation et à l'intégrité dans tout ce que nous faisons.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Zap className="h-32 w-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">Services Technologiques Complets</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              De l'infrastructure cloud à la cybersécurité, nous offrons une gamme complète de services pour répondre à vos besoins technologiques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="link" asChild>
              <Link href="/services">
                Explorer tous les services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
