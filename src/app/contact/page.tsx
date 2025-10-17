import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez-Nous - ITSS',
  description: 'Contactez l\'équipe d\'ITSS pour toute demande d\'information, de devis ou de support.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-headline font-bold md:text-5xl">Contactez-Nous</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Nous serions ravis de vous entendre. Que vous ayez une question sur nos services, nos tarifs ou toute autre chose, notre équipe est prête à répondre à toutes vos questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Formulaire de Contact</CardTitle>
                <CardDescription>Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <div className="space-y-8">
                <h2 className="text-3xl font-headline font-bold">Informations de Contact</h2>
                <p className="text-muted-foreground">
                    Vous pouvez également nous joindre via les canaux suivants. Nous avons hâte d'échanger avec vous !
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-muted-foreground">Demandes Générales & Ventes</p>
                            <a href="mailto:contact@itss.com" className="text-primary hover:underline">
                                contact@itss.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Téléphone</h3>
                            <p className="text-muted-foreground">Lun-Ven, 9h-17h HNE</p>
                            <a href="tel:+1234567890" className="text-primary hover:underline">
                                (123) 456-7890
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Bureau</h3>
                            <p className="text-muted-foreground">123 Avenue de la Tech</p>
                            <p className="text-primary">Innovation City, TX 12345</p>
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
