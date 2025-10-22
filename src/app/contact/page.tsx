import { Suspense } from 'react';
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: 'Contactez-Nous - ITSS',
  description: 'Contactez l\'équipe d\'ITSS pour toute demande d\'information, de devis ou de support.',
};

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'itss-logo');

  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-contain opacity-10 dark:opacity-20 p-16 md:p-24"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Contactez-Nous</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Nous sommes là pour vous aider. Une question ? Un projet en tête ? Contactez notre équipe d'experts.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <Card className="bg-card/80 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">Envoyez-nous un message</CardTitle>
                  <CardDescription>Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Chargement du formulaire...</div>}>
                    <ContactForm />
                  </Suspense>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8 md:col-span-2">
                <h2 className="text-3xl font-headline font-bold">Nos Coordonnées</h2>
                <p className="text-muted-foreground text-lg">
                    Vous pouvez également nous joindre directement via les canaux ci-dessous.
                </p>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-4 rounded-lg">
                            <Mail className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl">Email</h3>
                            <p className="text-muted-foreground">Demandes générales & ventes</p>
                            <a href="mailto:innovatechsolutionservice@gmail.com" className="text-primary font-medium hover:underline">
                                innovatechsolutionservice@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-4 rounded-lg">
                            <Phone className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl">Téléphone</h3>
                            <p className="text-muted-foreground">Lun-Ven, 9h-18h</p>
                            <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
                                (123) 456-7890
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-4 rounded-lg">
                            <MapPin className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl">Bureau</h3>
                            <p className="text-muted-foreground">123 Avenue de la Tech</p>
                            <p className="text-foreground font-medium">Innovation City, TX 12345</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}