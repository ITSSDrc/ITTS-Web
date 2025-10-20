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
  description: 'Articles, nouvelles et aperçus du monde de la technologie par ITSS.',
};

const blogPosts = [
    {
        id: "optimisation-cloud-aws",
        title: "5 stratégies pour optimiser vos coûts sur AWS sans sacrifier la performance",
        category: "Cloud",
        image: PlaceHolderImages.find(p => p.id === 'blog-post-1'),
        excerpt: "Le cloud AWS offre une flexibilité incroyable, mais les coûts peuvent rapidement grimper. Découvrez nos 5 stratégies éprouvées pour garder votre facture sous contrôle.",
        date: "15 Juil, 2024",
    },
    {
        id: "ia-service-client",
        title: "Comment l'IA générative révolutionne le service client",
        category: "Intelligence Artificielle",
        image: PlaceHolderImages.find(p => p.id === 'blog-post-2'),
        excerpt: "L'IA n'est plus de la science-fiction. Nous explorons comment les chatbots intelligents et les outils d'analyse de sentiments transforment l'expérience client.",
        date: "28 Juin, 2024",
    },
    {
        id: "zero-trust-securite",
        title: "Le guide ultime de la sécurité Zéro Trust (Zero Trust)",
        category: "Cybersécurité",
        image: PlaceHolderImages.find(p => p.id === 'blog-post-3'),
        excerpt: "Ne faites confiance à personne, vérifiez tout. Plongez dans les principes fondamentaux de l'architecture Zéro Trust et comment la mettre en œuvre.",
        date: "10 Juin, 2024",
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
            Nos analyses, tutoriels et réflexions sur les technologies qui façonnent demain.
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
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={post.image.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="text-primary border-primary">{post.category}</Badge>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                    <h2 className="text-2xl font-headline font-semibold mb-4">
                        <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-6">
                    <Button variant="link" className="p-0 text-lg" asChild>
                      <Link href="#">Lire la suite <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
