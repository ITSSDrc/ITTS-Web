
import { notFound } from "next/navigation";
import Image from "next/image";
import { portfolioProjects } from "@/lib/portfolio-data";
import { ArrowLeft, CheckCircle, Award } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = portfolioProjects.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }
  return {
    title: `${project.title} - ITSS Portfolio`,
    description: project.summary,
  };
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = portfolioProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/portfolio" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au portfolio
          </Link>
        </div>

        <div className="text-center mb-12">
            <p className="text-primary font-semibold text-lg">{project.client}</p>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mt-2">{project.title}</h1>
        </div>

        {project.image && (
          <Card className="mb-12 overflow-hidden shadow-2xl">
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              width={1200}
              height={600}
              className="object-cover w-full aspect-[2/1]"
              data-ai-hint={project.image.imageHint}
              priority
            />
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                <h2 className="font-headline text-3xl">Le Défi</h2>
                <p>{project.challenge}</p>

                <h2 className="font-headline text-3xl">Notre Solution</h2>
                <div dangerouslySetInnerHTML={{ __html: project.solution }} />

                <h2 className="font-headline text-3xl">Résultats</h2>
                <p>{project.result}</p>
            </article>
          </div>
          <div className="lg:col-span-1 row-start-1 lg:row-auto">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline">Détails du Projet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                    <Separator />
                    <div>
                        <h4 className="font-semibold mb-4">Indicateurs Clés</h4>
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
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
