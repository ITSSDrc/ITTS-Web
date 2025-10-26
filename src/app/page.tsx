
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Code, Shield, BrainCircuit } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeInOnScroll } from "@/components/fade-in-on-scroll";
import { portfolioProjects } from "@/lib/portfolio-data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Typewriter from 'typewriter-effect';
import { ConnectionMeshAnimation } from "@/components/connection-mesh-animation";


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
  const missionImage = PlaceHolderImages.find(p => p.id === 'mission-image');
  const logo = PlaceHolderImages.find(p => p.id === 'itss-logo');

  return (
    <div className="flex flex-col min-h-[calc(100vh-theme(spacing.14))]">
      <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <ConnectionMeshAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="container mx-auto px-4 grid grid-cols-1 gap-12 items-center justify-items-center relative z-10">
          <div className="text-center">
            <FadeInOnScroll>
              {logo && (
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  width={128}
                  height={128}
                  className="mx-auto mb-8 rounded-full"
                  priority
                  data-ai-hint={logo.imageHint}
                />
              )}
              <h1 className="text-5xl font-headline font-extrabold md:text-6xl lg:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60 min-h-[180px] md:min-h-[240px] lg:min-h-[280px]">
                <Typewriter
                    options={{
                        strings: ["Votre Partenaire d'Innovation Technologique"],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                    }}
                />
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-muted-foreground">
                ITSS propulse votre entreprise vers l'avenir avec des solutions de pointe en Cloud, Logiciel, Cybersécurité et Intelligence Artificielle.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-full font-semibold text-lg px-8 py-6" asChild>
                  <Link href="/services">Explorer nos Services</Link>
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full font-semibold text-lg px-8 py-6" asChild>
                  <Link href="/contact">Nous Contacter <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll delay={600} className="w-full max-w-md mx-auto">
             <Carousel 
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {portfolioProjects.map((project) => (
                  <CarouselItem key={project.id}>
                    <Link href={`/portfolio/${project.id}`}>
                      <Card className="overflow-hidden group glow-card">
                         {project.image && (
                          <div className="aspect-video overflow-hidden">
                              <Image
                                src={project.image.imageUrl}
                                alt={project.image.description}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={project.image.imageHint}
                              />
                          </div>
                         )}
                        <CardHeader>
                          <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                          <CardDescription>{project.client}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
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
