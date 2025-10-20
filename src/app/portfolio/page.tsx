import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Notre Portfolio - ITSS',
  description: 'Découvrez les projets qui illustrent notre expertise et notre engagement envers l\'innovation.',
};

const portfolioProjects = [
  {
    id: 'e-commerce-migration-cloud',
    client: 'RetailNext Corp',
    title: 'Migration et modernisation d\'une plateforme e-commerce',
    image: PlaceHolderImages.find(p => p.id === 'case-study-1'),
    summary: 'Migration d\'une infrastructure monolithique vers une architecture microservices sur AWS, optimisant les performances et la scalabilité.',
    tags: ['AWS', 'E-commerce', 'React', 'Node.js', 'Microservices'],
    metrics: [
      { label: 'Réduction des coûts', value: '40%' },
      { label: 'Disponibilité', value: '99.99%' },
      { label: 'Temps de chargement', value: '-60%' },
    ]
  },
  {
    id: 'fintech-app-securite',
    client: 'FinSecure Bank',
    title: 'Application bancaire mobile avec sécurité de niveau militaire',
    image: PlaceHolderImages.find(p => p.id === 'case-study-2'),
    summary: 'Création d\'une application bancaire pour iOS et Android avec chiffrement de bout en bout, authentification biométrique et conformité PCI DSS.',
    tags: ['Cybersécurité', 'Développement Mobile', 'Fintech', 'Swift', 'Kotlin'],
     metrics: [
      { label: 'Failles de sécurité', value: '0' },
      { label: 'Adoption utilisateur', value: '+200k' },
      { label: 'Satisfaction App Store', value: '4.8/5' },
    ]
  },
  {
    id: 'saas-ia-automatisation',
    client: 'Innovate SaaS',
    title: 'Intégration de l\'IA pour automatiser le support client',
    image: PlaceHolderImages.find(p => p.id === 'case-study-3'),
    summary: 'Mise en place d\'un agent conversationnel basé sur l\'IA pour résoudre les tickets de support, améliorer le temps de réponse et augmenter la satisfaction client.',
    tags: ['IA', 'SaaS', 'Automatisation', 'Python', 'TensorFlow'],
     metrics: [
      { label: 'Tickets résolus par IA', value: '65%' },
      { label: 'Temps de réponse moyen', value: '-80%' },
      { label: 'Satisfaction client', value: '+30%' },
    ]
  },
   {
    id: 'healthtech-data-platform',
    client: 'SantéData Plus',
    title: 'Plateforme d\'analyse de données pour la recherche médicale',
    image: PlaceHolderImages.find(p => p.id === 'blog-health-rdc'),
    summary: 'Développement d’une plateforme web sécurisée pour la collecte et l’analyse de données de santé anonymisées, permettant d’accélérer la recherche clinique.',
    tags: ['HealthTech', 'Big Data', 'Vue.js', 'Django', 'PostgreSQL'],
     metrics: [
      { label: 'Temps d\'analyse', value: '÷10' },
      { label: 'Conformité HIPAA', value: '100%' },
      { label: 'Nouveaux partenariats', value: '12' },
    ]
  },
   {
    id: 'edtech-learning-platform',
    client: 'EduSphere',
    title: 'Plateforme d\'apprentissage en ligne personnalisée',
    image: PlaceHolderImages.find(p => p.id === 'blog-edtech-rdc'),
    summary: 'Création d\'une plateforme EdTech avec des parcours d\'apprentissage adaptatifs basés sur l\'IA, des classes virtuelles et des outils collaboratifs.',
    tags: ['EdTech', 'IA', 'Next.js', 'Firebase', 'WebRTC'],
     metrics: [
      { label: 'Engagement étudiant', value: '+45%' },
      { label: 'Taux de complétion', value: '+25%' },
      { label: 'Coûts de tutorat', value: '-35%' },
    ]
  },
  {
    id: 'agritech-supply-chain',
    client: 'AgriConnect',
    title: 'Optimisation de la chaîne logistique agricole avec la blockchain',
    image: PlaceHolderImages.find(p => p.id === 'blog-agritech'),
    summary: 'Mise en œuvre d\'un système de traçabilité basé sur la blockchain pour garantir la transparence de la chaîne d\'approvisionnement du producteur au consommateur.',
    tags: ['AgriTech', 'Blockchain', 'IoT', 'React Native', 'Hyperledger'],
     metrics: [
      { label: 'Transparence', value: '100%' },
      { label: 'Pertes réduites', value: '15%' },
      { label: 'Confiance consommateur', value: '+50%' },
    ]
  },
];

export default function PortfolioPage() {
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
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Notre Portfolio</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Des idées transformées en solutions robustes et innovantes. Explorez les projets qui illustrent notre expertise.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-2xl">
                <CardHeader className="p-0">
                  {project.image && (
                    <div className="block aspect-video overflow-hidden">
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
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                     <p className="text-primary font-semibold mb-2 text-sm">{project.client}</p>
                    <h2 className="text-2xl font-headline font-semibold mb-4">
                        {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <p className="text-muted-foreground line-clamp-3 mb-6">{project.summary}</p>

                    <div className="space-y-3 text-sm">
                        {project.metrics.map(metric => (
                            <div key={metric.label} className="flex items-center">
                                <Award className="h-4 w-4 text-accent mr-3 shrink-0" />
                                <span className="font-medium">{metric.label}:</span>
                                <span className="ml-auto font-bold text-foreground">{metric.value}</span>
                            </div>
                        ))}
                    </div>

                  </div>
                  <div className="mt-8">
                    <Button variant="outline" className="w-full">
                      Voir le projet détaillé <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
