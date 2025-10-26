
import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from 'next';
import Link from "next/link";
import { teamMembers } from '@/app/about/page';
import { ConnectionMeshAnimation } from "@/components/connection-mesh-animation";

export const metadata: Metadata = {
  title: 'Notre Équipe - ITSS',
  description: 'Découvrez les experts passionnés qui composent l\'équipe d\'ITSS.',
};

export default function TeamPage() {
    const teamImages = PlaceHolderImages.filter(p => p.id.startsWith('team-member'));

    return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <ConnectionMeshAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Notre Équipe</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Les esprits brillants et les experts passionnés qui pilotent l'innovation chez ITSS.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = teamImages.find(img => img.id === member.imageId);
              return (
                <Link key={member.id} href={`/team/${member.id}`} className="text-center group block">
                  <Avatar className="h-32 w-32 mx-auto mb-4 ring-2 ring-primary/50 ring-offset-4 ring-offset-background transform group-hover:scale-105 transition-transform duration-300">
                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={`Photo de ${member.name}`} data-ai-hint={memberImage.imageHint} />}
                    <AvatarFallback className="text-3xl bg-muted">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
    )
}
