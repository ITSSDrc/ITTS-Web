import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Études de Cas - ITSS',
  description: 'Découvrez comment ITSS a aidé des entreprises comme la vôtre à réussir.',
};

const caseStudies = [
  {
    id: 'e-commerce-migration-cloud',
    client: 'RetailNext Corp',
    title: 'Migration vers le cloud et modernisation d\'une plateforme e-commerce',
    image: PlaceHolderImages.find(p => p.id === 'case-study-1'),
    summary: 'Nous avons migré une infrastructure monolithique vers une architecture microservices sur AWS, réduisant les coûts de 40% et augmentant la disponibilité à 99.99%.',
    tags: ['AWS', 'Migration Cloud', 'E-commerce']
  },
  {
    id: 'fintech-app-securite',
    client: 'FinSecure Bank',
    title: 'Développement d\'une application bancaire mobile avec une sécurité de niveau militaire',
    image: PlaceHolderImages.find(p => p.id === 'case-study-2'),
    summary: 'Création d\'une application iOS et Android avec chiffrement de bout en bout, authentification biométrique et conformité PCI DSS, résultant en zéro faille de sécurité signalée en 12 mois.',
    tags: ['Cybersécurité', 'Développement Mobile', 'Fintech']
  },
  {
    id: 'saas-ia-automatisation',
    client: 'Innovate SaaS',
    title: 'Intégration de l\'IA pour automatiser le support client dans une plateforme SaaS',
    image: PlaceHolderImages.find(p => p.id === 'case-study-3'),
    summary: 'Mise en place d\'un agent conversationnel basé sur l\'IA qui a résolu 65% des tickets de support, améliorant le temps de réponse de 80% et la satisfaction client de 30%.',
    tags: ['IA', 'SaaS', 'Automatisation']
  },
];

export default function CaseStudiesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'case-studies-hero');

  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-20"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Nos Réussites</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Découvrez comment nous transformons les défis complexes en succès mesurables pour nos clients.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden grid md:grid-cols-2 items-center group">
                <div className={`relative h-80 md:h-full ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    {study.image && (
                        <Image
                            src={study.image.imageUrl}
                            alt={study.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={study.image.imageHint}
                        />
                    )}
                </div>
                <CardContent className="p-10 md:p-16">
                  <p className="text-primary font-semibold mb-2">{study.client}</p>
                  <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-6">
                    <Link href="#">{study.title}</Link>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">{study.summary}</p>
                   <Button asChild>
                      <Link href="#">
                        Voir l'étude de cas complète <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
