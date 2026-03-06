
import { partners } from "@/lib/partners-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Globe, ExternalLink, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/lib/portfolio-data";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const partner = partners.find((p) => p.id === params.id);
  if (!partner) {
    return {
      title: "Partenaire non trouvé",
    };
  }
  return {
    title: `${partner.name} - Partenaire ITSS`,
    description: partner.description,
  };
}

export default function PartnerDetailsPage({ params }: { params: { id: string } }) {
  const partner = partners.find((p) => p.id === params.id);
  const partnerLogo = PlaceHolderImages.find(img => img.id === partner?.logoId);

  if (!partner) {
    notFound();
  }

  // Find related projects in portfolio
  const relatedProjects = portfolioProjects.filter(project => 
    project.client.includes(partner.name) || 
    project.summary.includes(partner.name)
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/partners" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux partenaires
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 space-y-6">
            <Card className="p-8 flex items-center justify-center bg-muted/30 aspect-square">
               <div className="relative w-full h-full">
                  <Image
                    src={partnerLogo?.imageUrl || `https://picsum.photos/seed/${partner.id}/400/200`}
                    alt={`Logo de ${partner.name}`}
                    fill
                    className="object-contain"
                    data-ai-hint="partner logo"
                  />
               </div>
            </Card>
            <div className="space-y-4">
                <Button className="w-full" asChild>
                    <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" /> Site Officiel
                    </Link>
                </Button>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
                <h1 className="text-4xl font-headline font-bold text-foreground">{partner.name}</h1>
                <p className="text-primary font-medium mt-2">Partenaire Stratégique</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">À Propos du Partenariat</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                    <p>{partner.description}</p>
                    <p>
                        La collaboration entre ITSS et {partner.name} est fondée sur une vision commune de l'excellence technologique et de l'innovation. Ensemble, nous unissons nos forces pour relever les défis les plus complexes et apporter des solutions durables aux communautés et aux entreprises de la région.
                    </p>
                </CardContent>
            </Card>

            {relatedProjects.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-headline font-bold flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        Projets Réalisés Ensemble
                    </h2>
                    <div className="grid gap-4">
                        {relatedProjects.map(project => (
                            <Link key={project.id} href={`/portfolio/${project.id}`}>
                                <Card className="hover:border-primary/50 transition-colors group">
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-1">{project.summary}</p>
                                        </div>
                                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
