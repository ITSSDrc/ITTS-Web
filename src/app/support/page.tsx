
import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LifeBuoy, Book, MessageSquare, CreditCard, Cloud, Shield, Code, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Support - ITSS',
  description: 'Obtenez de l\'aide et du support pour les services ITSS.',
};

const faqItems = [
    {
        category: "Solutions Cloud",
        icon: <Cloud className="h-5 w-5 mr-3 text-primary" />,
        questions: [
            {
                question: "Quels fournisseurs de cloud supportez-vous ?",
                answer: "Nous sommes spécialisés dans les principaux fournisseurs de cloud, notamment Amazon Web Services (AWS), Microsoft Azure et Google Cloud Platform (GCP). Nous vous aidons à choisir la plateforme la mieux adaptée à vos besoins."
            },
            {
                question: "Comment se déroule une migration vers le cloud ?",
                answer: "Notre processus de migration commence par une évaluation approfondie de votre infrastructure existante. Nous élaborons ensuite une stratégie de migration sur mesure, en minimisant les temps d'arrêt et en assurant une transition en douceur de vos applications et données."
            }
        ]
    },
    {
        category: "Logiciels sur Mesure",
        icon: <Code className="h-5 w-5 mr-3 text-primary" />,
        questions: [
            {
                question: "Quel est votre processus de développement logiciel ?",
                answer: "Nous suivons une approche agile qui nous permet de livrer de la valeur rapidement et de nous adapter aux changements. Le processus inclut la découverte, la conception UI/UX, le développement, les tests et le déploiement, avec une communication constante avec vous."
            },
            {
                question: "Puis-je voir une démo ou un prototype avant de m'engager ?",
                answer: "Oui, la phase de conception inclut la création de prototypes interactifs. Cela vous permet de visualiser et de tester l'expérience utilisateur avant le début du développement, garantissant que le produit final correspond à votre vision."
            }
        ]
    },
    {
        category: "Cybersécurité",
        icon: <Shield className="h-5 w-5 mr-3 text-primary" />,
        questions: [
            {
                question: "Mon entreprise est-elle trop petite pour être une cible ?",
                answer: "Aucune entreprise n'est trop petite pour être une cible. Les cybercriminels ciblent souvent les PME car elles sont perçues comme moins sécurisées. Nous proposons des solutions de sécurité adaptées à toutes les tailles d'entreprise pour vous protéger efficacement."
            },
            {
                question: "En quoi consiste un audit de sécurité ?",
                answer: "Un audit de sécurité est une évaluation complète de vos systèmes d'information. Nous effectuons des tests d'intrusion et des analyses de vulnérabilités pour identifier les failles potentielles et vous fournissons un rapport détaillé avec des recommandations claires pour renforcer votre sécurité."
            }
        ]
    },
    {
        category: "Intelligence Artificielle",
        icon: <BrainCircuit className="h-5 w-5 mr-3 text-primary" />,
        questions: [
            {
                question: "Comment l'IA peut-elle aider mon entreprise spécifiquement ?",
                answer: "L'IA peut optimiser de nombreux aspects de votre activité, comme l'automatisation du service client avec des chatbots, l'analyse prédictive pour anticiper les tendances du marché, ou encore l'optimisation de vos opérations logistiques. Nous analysons vos processus pour identifier les opportunités les plus pertinentes."
            }
        ]
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
                    <Card className="text-center hover:shadow-lg transition-shadow">
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
                     <Card className="text-center hover:shadow-lg transition-shadow">
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
                     <Card className="text-center hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
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
                    <h2 className="text-4xl font-headline font-bold text-center mb-16">Questions Fréquemment Posées</h2>
                    
                    <div className="space-y-12">
                        {faqItems.map(category => (
                            <div key={category.category}>
                                <div className='flex items-center mb-6'>
                                    {category.icon}
                                    <h3 className="text-2xl font-semibold font-headline">{category.category}</h3>
                                </div>
                                <Accordion type="single" collapsible className="w-full space-y-2">
                                {category.questions.map(item => (
                                    <AccordionItem value={item.question} key={item.question} className="bg-secondary/50 rounded-lg px-4">
                                        <AccordionTrigger className="text-lg text-left hover:no-underline">{item.question}</AccordionTrigger>
                                        <AccordionContent className="text-base text-muted-foreground pt-2">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
