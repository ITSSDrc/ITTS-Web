
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { partners } from '@/lib/partners-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake } from 'lucide-react';
import { ConnectionMeshAnimation } from '@/components/connection-mesh-animation';

export const metadata: Metadata = {
  title: 'Nos Partenaires - ITSS',
  description: 'Découvrez les organisations et entreprises qui font confiance à ITSS et avec lesquelles nous collaborons pour l\'innovation.',
};

export default function PartnersPage() {
  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <ConnectionMeshAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Nos Partenaires</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Ensemble, nous construisons l'écosystème technologique de demain en RDC et au-delà.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest">Confiance & Collaboration</span>
            <h2 className="text-4xl font-headline font-bold md:text-5xl mt-2">Ils nous font confiance</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous collaborons avec les leaders du marché et les institutions locales pour fournir des solutions de classe mondiale adaptées aux réalités du terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => {
              const partnerLogo = PlaceHolderImages.find(img => img.id === partner.logoId);
              return (
                <Card key={partner.id} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
                  <CardHeader className="flex flex-col items-center justify-center p-10 h-48 border-b bg-muted/30">
                     <div className="relative w-full h-full">
                        <Image
                          src={partnerLogo?.imageUrl || `https://picsum.photos/seed/${partner.id}/400/200`}
                          alt={`Logo de ${partner.name}`}
                          fill
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          data-ai-hint="company logo"
                        />
                     </div>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <CardTitle className="font-headline text-2xl mb-4">{partner.name}</CardTitle>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {partner.description}
                    </p>
                    <Button variant="outline" asChild className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                      <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
        <ConnectionMeshAnimation className="opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-primary/10 p-6 rounded-full inline-block mb-8">
            <Handshake className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-4xl font-headline font-bold mb-6">Devenez notre prochain partenaire</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vous partagez notre vision de l'innovation ? Unissons nos forces pour créer un impact positif et durable dans la région.
          </p>
          <Button size="lg" className="rounded-full px-12 py-8 text-xl" asChild>
            <Link href="/contact?subject=Devenir Partenaire">Discuter d'un partenariat</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
