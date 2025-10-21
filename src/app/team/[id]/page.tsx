import { teamMembers } from "@/app/about/page";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id);
  if (!member) {
    return {
      title: "Membre de l'équipe non trouvé",
    };
  }
  return {
    title: `${member.name} - ${member.role}`,
    description: member.bio,
  };
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id);
  const memberImage = PlaceHolderImages.find(img => img.id === member?.imageId);

  if (!member) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
       <div className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'équipe
            </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-1 text-center md:text-left md:sticky md:top-24">
                 <Avatar className="h-48 w-48 mx-auto md:mx-0 mb-4 ring-4 ring-primary/50 ring-offset-4 ring-offset-background">
                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={`Photo de ${member.name}`} data-ai-hint={memberImage.imageHint} />}
                    <AvatarFallback className="text-6xl bg-muted">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h1 className="text-3xl font-headline font-bold mt-6">{member.name}</h1>
                  <p className="text-xl text-primary font-medium mt-1">{member.role}</p>
            </div>
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Parcours et Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                        <p>{member.bio}</p>
                        <p>Chez ITSS, {member.name.split(' ')[0]} joue un rôle crucial en alignant nos capacités technologiques avec les besoins de nos clients, garantissant que nous livrons non seulement du code, mais une véritable valeur commerciale.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
       </div>
    </div>
  );
}
