
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: 'Notre Portfolio - ITSS',
  description: 'Découvrez les projets qui illustrent notre expertise et notre engagement envers l\'innovation.',
};

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
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
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
                    <Link href={`/portfolio/${project.id}`} className="block aspect-video overflow-hidden">
                      <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.image.imageHint}
                      />
                    </Link>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                     <p className="text-primary font-semibold mb-2 text-sm">{project.client}</p>
                    <h2 className="text-2xl font-headline font-semibold mb-4">
                        <Link href={`/portfolio/${project.id}`}>{project.title}</Link>
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <p className="text-muted-foreground mb-6">{project.summary}</p>

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
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/portfolio/${project.id}`}>
                        Voir le projet détaillé <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
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
