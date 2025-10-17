import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - ITSS',
  description: 'Découvrez l\'histoire, la mission et l\'équipe talentueuse derrière ITSS.',
};

const teamMembers = [
  { name: "Alice Johnson", role: "PDG & Fondatrice", imageId: "team-member-1", initials: "AJ" },
  { name: "Bob Williams", role: "Directeur de la Technologie", imageId: "team-member-2", initials: "BW" },
  { name: "Charlie Brown", role: "Architecte Cloud Principal", imageId: "team-member-3", initials: "CB" },
  { name: "Diana Prince", role: "Responsable de la Cybersécurité", imageId: "team-member-4", initials: "DP" },
];

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');
  const teamImages = PlaceHolderImages.filter(p => p.id.startsWith('team-member'));

  return (
    <>
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-secondary">
        {aboutHeroImage && (
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            fill
            className="object-cover"
            data-ai-hint={aboutHeroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-headline font-bold md:text-5xl">À Propos d'ITSS</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Une équipe de technologues passionnés dédiée à votre succès.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-bold text-primary">Notre Histoire</h2>
              <p className="mt-4 text-muted-foreground">
                Fondée en 2015, ITSS a commencé avec une idée simple mais puissante : rendre les solutions technologiques de niveau entreprise accessibles aux entreprises de toutes tailles. Nos fondateurs, un groupe de professionnels de l'informatique chevronnés, ont vu une lacune sur le marché pour un fournisseur de services qui n'était pas seulement un vendeur, mais un véritable partenaire technologique.
              </p>
              <p className="mt-4 text-muted-foreground">
                Au fil des ans, nous sommes passés d'une petite startup à un fournisseur de premier plan de services informatiques, mais nos valeurs fondamentales restent inchangées. Nous sommes animés par une passion pour la technologie, un engagement envers le succès de nos clients et une culture d'apprentissage continu et d'innovation.
              </p>
            </div>
            <div className="order-1 md:order-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Nos Valeurs Fondamentales</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Innovation</h3>
                            <p className="text-sm text-muted-foreground">Nous explorons constamment de nouvelles technologies pour fournir des solutions de pointe.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Partenariat</h3>
                            <p className="text-sm text-muted-foreground">Nous travaillons avec vous, pas seulement pour vous, pour atteindre des objectifs communs.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Intégrité</h3>
                            <p className="text-sm text-muted-foreground">Nous croyons en une communication transparente et honnête dans toutes nos relations.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">Rencontrez l'Équipe</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              Les experts derrière notre succès.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = teamImages.find(img => img.id === member.imageId);
              return (
                <div key={member.name} className="text-center">
                  <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/10">
                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={`Photo de ${member.name}`} data-ai-hint={memberImage.imageHint} />}
                    <AvatarFallback className="text-3xl">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
