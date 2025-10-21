import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from 'next';
import { Lightbulb, Target, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'À Propos - ITSS',
  description: 'Découvrez l\'histoire, la mission et l\'équipe talentueuse derrière ITSS.',
};

export const teamMembers = [
  { id: "chris-ceo", name: "Chris", role: "CEO", imageId: "team-member-0", initials: "C", bio: "Leader visionnaire avec plus de 20 ans d'expérience dans la conduite de la transformation numérique et de la croissance des entreprises. Chris est passionné par l'exploitation de la technologie pour résoudre des défis complexes et créer un impact durable pour les clients et la société." },
  { id: "prince-ongala", name: "Prince Ongala", role: "Software Development, Data Analyst, Coordinator", imageId: "team-member-1", initials: "PO", bio: "Architecte logiciel expert, Prince est spécialisé dans la création de solutions d'entreprise évolutives. Sa passion pour les données et l'analyse pilote l'innovation au sein de nos produits, garantissant que nous fournissons des informations exploitables et une valeur commerciale." },
  { id: "isaac-diavo", name: "Isaac Diavo", role: "Network, Designer, Coordinator", imageId: "team-member-2", initials: "ID", bio: "Isaac allie une expertise approfondie en infrastructure réseau à un œil attentif pour le design. Il veille à ce que nos solutions soient non seulement fonctionnelles et sécurisées, mais aussi intuitives et belles. Sa coordination garantit le bon déroulement des projets." },
  { id: "eric-pimbo", name: "Eric Pimbo", role: "Network, Media", imageId: "team-member-3", initials: "EP", bio: "Spécialiste des infrastructures réseau et de la communication médiatique, Eric s'assure que notre message atteint notre public. Il gère nos plateformes de médias numériques et nos systèmes de communication, garantissant une connectivité transparente." },
  { id: "dimex-mwanzita", name: "Dimex Mwanzita", role: "Network, Designer", imageId: "team-member-4", initials: "DM", bio: "Dimex est un designer créatif avec une solide formation en technologie réseau. Il se spécialise dans la création d'interfaces conviviales qui simplifient les systèmes complexes, rendant la technologie accessible à tous les utilisateurs." },
  { id: "merite-mufungizi", name: "Merite Mufungizi", role: "Software Development, Designer", imageId: "team-member-5", initials: "MM", bio: "En tant que développeur de logiciels et designer, Merite comble le fossé entre la fonctionnalité et l'esthétique. Il crée des applications qui sont non seulement puissantes, mais aussi un plaisir à utiliser, en se concentrant sur l'expérience utilisateur." },
  { id: "sam-awenze", name: "Sam Awenze", role: "Network, Coordinator", imageId: "team-member-6", initials: "SA", bio: "Sam est l'épine dorsale de nos opérations réseau. En tant que coordinateur, il supervise la mise en œuvre et la maintenance de nos infrastructures, garantissant une haute disponibilité et des performances optimales pour nos clients." },
  { id: "jacques-uwonda", name: "Jacques Uwonda", role: "Software Development, AI Specialist", imageId: "team-member-7", initials: "JU", bio: "Jacques est à la pointe de l'intelligence artificielle. Développeur de logiciels passionné, il se spécialise dans l'intégration de l'apprentissage automatique et des solutions d'IA pour automatiser les processus et découvrir de nouvelles efficacités pour nos clients." },
];

const values = [
    {
        icon: <Lightbulb className="h-8 w-8 text-primary"/>,
        title: "Innovation",
        description: "Nous explorons constamment de nouvelles technologies pour fournir des solutions de pointe qui créent une valeur durable."
    },
    {
        icon: <Users className="h-8 w-8 text-primary"/>,
        title: "Partenariat",
        description: "Nous travaillons avec vous, pas seulement pour vous, pour atteindre des objectifs communs et construire des relations solides."
    },
    {
        icon: <Target className="h-8 w-8 text-primary"/>,
        title: "Excellence",
        description: "Nous visons l'excellence dans chaque projet, garantissant des résultats de haute qualité qui dépassent les attentes."
    }
]

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'itss-logo');
  const teamImages = PlaceHolderImages.filter(p => p.id.startsWith('team-member'));

  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-contain opacity-10 dark:opacity-20 p-16 md:p-24"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">À Propos d'ITSS</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Une équipe de technologues passionnés, unis par une mission : transformer vos idées en réalité numérique.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-primary font-semibold">NOTRE HISTOIRE</span>
              <h2 className="text-4xl font-headline font-bold text-foreground mt-2">Nés de la Passion pour la Technologie</h2>
              <p className="mt-6 text-muted-foreground text-lg">
                Fondée en 2015, ITSS a commencé avec une idée simple mais puissante : rendre les solutions technologiques de niveau entreprise accessibles aux entreprises de toutes tailles. Nos fondateurs, un groupe de professionnels de l'informatique chevronnés, ont vu une lacune sur le marché pour un fournisseur de services qui n'était pas seulement un vendeur, mais un véritable partenaire technologique.
              </p>
              <p className="mt-4 text-muted-foreground text-lg">
                Au fil des ans, nous sommes passés d'une petite startup à un fournisseur de premier plan de services informatiques, mais nos valeurs fondamentales restent inchangées.
              </p>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-1 gap-8">
              {values.map(value => (
                <div key={value.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                        {value.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground mt-1">{value.description}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">NOTRE ÉQUIPE</span>
            <h2 className="text-4xl font-headline font-bold md:text-5xl mt-2">Les Experts Derrière Notre Succès</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez les esprits brillants qui pilotent l'innovation chez ITSS.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = teamImages.find(img => img.id === member.imageId);
              return (
                <Link key={member.id} href={`/team/${member.id}`} className="text-center group block">
                  <Avatar className="h-32 w-32 mx-auto mb-4 ring-2 ring-primary/50 ring-offset-4 ring-offset-secondary transform group-hover:scale-105 transition-transform duration-300">
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
  );
}
