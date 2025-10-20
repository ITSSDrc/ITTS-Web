
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, UserCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);
  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }
  return {
    title: `${post.title} - ITSS Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
            </Link>
        </div>

        <article>
            <header className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline" className="text-primary border-primary">{post.category}</Badge>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">{post.title}</h1>
                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                    <UserCircle className="h-5 w-5" />
                    <span>Par {post.author}</span>
                </div>
            </header>

            {post.image && (
                <Card className="mb-12 overflow-hidden">
                    <Image
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        width={1200}
                        height={600}
                        className="object-cover w-full aspect-video"
                        data-ai-hint={post.image.imageHint}
                        priority
                    />
                </Card>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-6">
                <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
                
                <p>
                    Bunia, capitale de la province de l'Ituri, est un carrefour d'opportunités et de défis. Dans un monde où la technologie évolue à une vitesse fulgurante, il est crucial de comprendre comment ces changements impactent notre environnement local. Cet article explore les dynamiques spécifiques à notre région.
                </p>

                <p>
                    Le développement technologique en RDC, et plus particulièrement en Ituri, ne se limite pas à l'adoption de nouveaux outils. Il s'agit d'une transformation profonde des secteurs clés comme l'agriculture, le commerce et l'éducation. Les solutions AgriTech, par exemple, promettent d'optimiser les rendements agricoles et de connecter les agriculteurs aux marchés, un enjeu vital pour l'économie locale.
                </p>
                
                <blockquote>
                    "L'innovation n'est pas une fin en soi, mais un moyen de créer une prospérité durable et partagée pour les communautés de Bunia et d'ailleurs."
                </blockquote>

                <p>
                    Parallèlement, le secteur de la finance mobile a déjà révolutionné la manière dont les transactions sont effectuées, favorisant une inclusion financière sans précédent. Cependant, cette numérisation rapide soulève des questions importantes en matière de cybersécurité. Comment les petites et moyennes entreprises de Bunia peuvent-elles se protéger contre les menaces en ligne tout en tirant parti des avantages du commerce numérique ?
                </p>

                <p>
                    Chez ITSS, nous sommes convaincus que la technologie est un levier de développement puissant. Notre mission est d'accompagner les acteurs locaux, des entrepreneurs aux institutions, dans leur transition numérique en leur fournissant des solutions adaptées, sécurisées et innovantes. Nous croyons en un avenir où la technologie renforce les capacités locales et ouvre de nouvelles voies vers le succès.
                </p>
            </div>
        </article>
      </div>
    </div>
  );
}
