
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Blog - ITSS',
  description: 'Articles, nouvelles et aperçus sur la technologie et le développement à Bunia et en RDC.',
};

export const blogPosts = [
    {
        id: "transformation-numerique-bunia",
        title: "Bunia à l'Ère du Numérique : Comment la Technologie Façonne l'Avenir de la Ville",
        category: "Développement Local",
        image: PlaceHolderImages.find(p => p.id === 'blog-bunia-digital'),
        excerpt: "Découvrez comment les innovations technologiques, de la finance mobile à l'éducation en ligne, redessinent le paysage économique et social de Bunia.",
        date: "20 Oct, 2024",
    },
    {
        id: "agritech-ituri",
        title: "L'AgriTech en Ituri : Une Révolution Silencieuse pour les Agriculteurs de Bunia",
        category: "Technologie Agricole",
        image: PlaceHolderImages.find(p => p.id === 'blog-agritech'),
        excerpt: "Des drones pour la cartographie des champs aux applications de gestion de récoltes, l'agriculture en Ituri se modernise et gagne en efficacité.",
        date: "15 Oct, 2024",
    },
    {
        id: "fintech-bunia",
        title: "Le Boom de la Finance Mobile à Bunia : Inclusion Financière et Nouvelles Opportunités",
        category: "FinTech",
        image: PlaceHolderImages.find(p => p.id === 'blog-fintech-rdc'),
        excerpt: "L'adoption massive du mobile money transforme le commerce et la vie quotidienne, ouvrant la voie à une nouvelle ère d'inclusion financière pour tous.",
        date: "08 Oct, 2024",
    },
    {
        id: "education-tech-bunia",
        title: "EdTech en RDC : Comment les Plateformes en Ligne Renforcent l'Éducation à Bunia",
        category: "Éducation",
        image: PlaceHolderImages.find(p => p.id === 'blog-edtech-rdc'),
        excerpt: "Analyse des solutions d'e-learning et de leur impact sur l'accès à une éducation de qualité pour les jeunes de la région.",
        date: "29 Sep, 2024",
    },
    {
        id: "cybersecurite-pme-bunia",
        title: "Cybersécurité : Les Défis et Solutions pour les PME de Bunia",
        category: "Cybersécurité",
        image: PlaceHolderImages.find(p => p.id === 'blog-cybersecurity'),
        excerpt: "Alors que les entreprises se numérisent, la protection des données devient cruciale. Nos experts partagent des conseils pratiques pour sécuriser votre activité.",
        date: "22 Sep, 2024",
    },
    {
        id: "energie-solaire-ituri",
        title: "L'Énergie Solaire : Le Moteur de l'Innovation Technologique en Ituri",
        category: "Énergies Renouvelables",
        image: PlaceHolderImages.find(p => p.id === 'blog-solar-rdc'),
        excerpt: "L'accès à une énergie fiable et abordable grâce au solaire est un catalyseur pour le déploiement de nouvelles solutions numériques dans les zones urbaines et rurales.",
        date: "12 Sep, 2024",
    },
    {
        id: "ecommerce-bunia",
        title: "E-commerce à Bunia : Tendances, Défis et Opportunités pour les Commerçants Locaux",
        category: "E-commerce",
        image: PlaceHolderImages.find(p => p.id === 'blog-ecommerce-rdc'),
        excerpt: "Le commerce en ligne prend son envol. Comment les entrepreneurs de Bunia peuvent-ils saisir cette opportunité pour atteindre de nouveaux marchés ?",
        date: "05 Sep, 2024",
    },
    {
        id: "sante-connectee-rdc",
        title: "La Santé Connectée : Améliorer l'Accès aux Soins en RDC grâce à la Télémédecine",
        category: "Santé",
        image: PlaceHolderImages.find(p => p.id === 'blog-health-rdc'),
        excerpt: "La télémédecine et les dossiers médicaux numériques promettent de révolutionner le secteur de la santé, même dans les régions les plus reculées.",
        date: "28 Aoû, 2024",
    },
    {
        id: "hub-innovation-bunia",
        title: "Créer un Hub d'Innovation à Bunia : Notre Vision pour l'Écosystème Tech Local",
        category: "Innovation",
        image: PlaceHolderImages.find(p => p.id === 'blog-innovation-hub'),
        excerpt: "ITSS s'engage à soutenir les talents locaux en créant un espace de collaboration, de formation et d'incubation pour les startups de demain.",
        date: "15 Aoû, 2024",
    }
];


export default function BlogPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-hero');

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
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Le Blog ITSS</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Nos analyses, tutoriels et réflexions sur les technologies qui façonnent l'avenir de Bunia et de la RDC.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden group">
                <CardHeader className="p-0">
                  {post.image && (
                    <Link href={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
                      <Image
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={post.image.imageHint}
                      />
                    </Link>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="text-primary border-primary">{post.category}</Badge>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                    <h2 className="text-2xl font-headline font-semibold mb-4">
                        <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-6">
                    <Button variant="link" className="p-0 text-lg" asChild>
                      <Link href={`/blog/${post.id}`}>Lire la suite <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-20">
              <Button size="lg" variant="outline">Charger plus d'articles</Button>
            </div>
        </div>
      </section>
    </>
  );
}

