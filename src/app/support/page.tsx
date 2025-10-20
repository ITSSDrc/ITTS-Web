import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LifeBuoy, Book, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Support - ITSS',
  description: 'Obtenez de l\'aide et du support pour les services ITSS.',
};

const faqItems = [
    {
        question: "Comment puis-je réinitialiser mon mot de passe ?",
        answer: "Vous pouvez réinitialiser votre mot de passe en cliquant sur 'Mot de passe oublié' sur la page de connexion. Un e-mail vous sera envoyé avec des instructions pour en créer un nouveau."
    },
    {
        question: "Quelle est votre politique de remboursement ?",
        answer: "Nous offrons une garantie de remboursement de 30 jours pour tous nos abonnements. Si vous n'êtes pas satisfait, contactez notre support dans les 30 jours suivant votre achat pour un remboursement complet."
    },
    {
        question: "Comment puis-je contacter le support technique ?",
        answer: "Le meilleur moyen est de soumettre un ticket via notre portail client. Vous pouvez également nous envoyer un e-mail à innovatechsolutionservice@gmail.com pour les demandes urgentes."
    },
    {
        question: "Intégrez-vous avec d'autres plateformes ?",
        answer: "Oui, nous offrons des intégrations natives avec de nombreuses plateformes populaires comme Slack, Zapier, et Salesforce. Consultez notre documentation sur l'API pour des intégrations personnalisées."
    }
]

export default function SupportPage() {
  return (
    <>
        <section className="bg-secondary py-24 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Centre d'Aide</h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                    Nous sommes là pour vous aider. Trouvez des réponses rapides ou contactez notre équipe d'experts.
                </p>
            </div>
        </section>

        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <Card className="text-center">
                        <CardHeader>
                            <LifeBuoy className="h-12 w-12 text-primary mx-auto mb-4" />
                            <CardTitle className="font-headline text-2xl">Ouvrir un Ticket</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">Pour une aide personnalisée, ouvrez un ticket et notre équipe vous répondra rapidement.</p>
                            <Button asChild>
                                <Link href="/contact">Contacter le support</Link>
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="text-center">
                        <CardHeader>
                            <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                            <CardTitle className="font-headline text-2xl">Documentation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">Explorez nos guides détaillés, tutoriels, et références API pour tout maîtriser.</p>
                            <Button asChild>
                                <Link href="/documentation">Consulter les docs</Link>
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="text-center">
                        <CardHeader>
                            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                            <CardTitle className="font-headline text-2xl">FAQ</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">Trouvez des réponses instantanées aux questions les plus fréquemment posées.</p>
                            <Button asChild variant="outline">
                                <Link href="#faq">Voir les FAQ</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div id="faq" className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-headline font-bold text-center mb-12">Questions Fréquemment Posées</h2>
                    <Accordion type="single" collapsible className="w-full">
                       {faqItems.map(item => (
                           <AccordionItem value={item.question} key={item.question}>
                               <AccordionTrigger className="text-xl text-left hover:no-underline">{item.question}</AccordionTrigger>
                               <AccordionContent className="text-lg text-muted-foreground">
                                   {item.answer}
                               </AccordionContent>
                           </AccordionItem>
                       ))}
                    </Accordion>
                </div>
            </div>
        </section>
    </>
  );
}
