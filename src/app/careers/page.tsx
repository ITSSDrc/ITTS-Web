
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, MapPin, Users, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carrières - ITSS',
  description: 'Rejoignez une équipe passionnée et innovante. Découvrez nos offres d\'emploi et postulez dès aujourd\'hui.',
};

const jobOpenings = [
  {
    title: 'Développeur Full-Stack Senior',
    location: 'Bunia / Télétravail',
    department: 'Ingénierie',
    description: 'Nous recherchons un développeur expérimenté pour construire et maintenir nos applications web de nouvelle génération.',
    date: '15 Mai 2024',
  },
  {
    title: 'Architecte Cloud (AWS/Azure)',
    location: 'Bunia',
    department: 'Infrastructure',
    description: 'Concevez et mettez en œuvre des solutions cloud robustes et évolutives pour nos clients.',
    date: '10 Mai 2024',
  },
  {
    title: 'Spécialiste en Cybersécurité',
    location: 'Télétravail',
    department: 'Sécurité',
    description: 'Protégez nos clients contre les menaces émergentes en réalisant des audits et en mettant en place des stratégies de défense.',
    date: '02 Mai 2024',
  },
  {
    title: 'Chef de Projet Technique',
    location: 'Bunia',
    department: 'Gestion de Projet',
    description: 'Pilotez nos projets de la conception à la livraison, en garantissant la qualité et le respect des délais.',
    date: '28 Avr 2024',
  },
];

const companyValues = [
    {
        icon: <Users className="h-8 w-8 text-primary"/>,
        title: "Esprit d'équipe",
        description: "Nous favorisons un environnement où la collaboration et le soutien mutuel sont la clé du succès collectif."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary"/>,
        title: "Développement Professionnel",
        description: "Nous investissons dans nos talents avec des formations continues et des opportunités d'évolution claires."
    },
    {
        icon: <Building className="h-8 w-8 text-primary"/>,
        title: "Impact Direct",
        description: "Chaque membre de l'équipe contribue directement à des projets qui transforment nos clients et nos communautés."
    }
]

export default function CareersPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');

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
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Rejoignez Notre Équipe</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Construisez l'avenir de la technologie avec nous. Nous recherchons des esprits passionnés pour innover et grandir.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-primary font-semibold">NOTRE CULTURE</span>
            <h2 className="text-4xl font-headline font-bold md:text-5xl mt-2">Pourquoi Travailler Chez ITSS ?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous sommes plus qu'une entreprise, nous sommes une communauté d'innovateurs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {companyValues.map(value => (
                <div key={value.title}>
                    <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                        {value.icon}
                    </div>
                    <h3 className="text-2xl font-headline font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground mt-2">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section id="job-openings" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold md:text-5xl">Nos Offres d'Emploi</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Prêt à relever votre prochain défi ? Trouvez le rôle qui vous correspond.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.title}>
                <CardHeader className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div>
                    <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
                    <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2'>
                        <div className="flex items-center gap-1.5"><Briefcase className='h-4 w-4' /> {job.department}</div>
                        <div className="flex items-center gap-1.5"><MapPin className='h-4 w-4' /> {job.location}</div>
                        <div className="flex items-center gap-1.5"><Calendar className='h-4 w-4' /> {job.date}</div>
                    </div>
                  </div>
                  <CardDescription className="md:col-span-2 pt-1">{job.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button disabled>Offre non disponible</Button>
                </CardFooter>
              </Card>
            ))}
             <div className="text-center pt-10">
                <p className="text-muted-foreground">Vous ne trouvez pas le poste idéal ?</p>
                <Button variant="link" className="text-lg" asChild>
                    <Link href="/contact">Envoyez-nous une candidature spontanée</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
