
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/app/about/page';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Mail, Newspaper } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export const metadata: Metadata = {
  title: 'Presse - ITSS',
  description: 'Ressources pour les médias et la presse. Contactez notre équipe pour toute demande d\'information.',
};


export default function PressPage() {
  const logo = PlaceHolderImages.find(p => p.id === 'itss-logo');
  const heroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');
  const leadershipTeam = teamMembers.slice(0, 3);
  const teamImages = PlaceHolderImages.filter(p => p.id.startsWith('team-member'));

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
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Kit Média & Presse</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Ressources officielles, communiqués et informations pour les journalistes et les partenaires.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2">
                <h2 className="text-4xl font-headline font-bold mb-6">À Propos d'ITSS</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
                    <p>
                        ITSS (Innovatech Solutions & Services) est une entreprise de services technologiques de premier plan basée à Bunia, en République Démocratique du Congo. Fondée en 2015, notre mission est de propulser les entreprises vers l'avenir en leur fournissant des solutions de pointe en matière de Cloud, de développement logiciel sur mesure, de cybersécurité et d'intelligence artificielle.
                    </p>
                    <p>
                        Nous croyons en un partenariat solide avec nos clients, en travaillant main dans la main pour transformer leurs défis en opportunités de croissance. Notre équipe d'experts est dédiée à l'excellence, à l'innovation et à la création d'un impact durable pour les entreprises et les communautés que nous servons.
                    </p>
                </div>
            </div>

            <div className='space-y-8'>
                 <Card>
                    <CardHeader className='flex-row items-center gap-4'>
                        <Newspaper className='h-8 w-8 text-primary' />
                        <CardTitle>Dernier Communiqué</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold mb-2">ITSS Lance une Initiative pour Former 100 Jeunes Développeurs en Ituri</p>
                        <p className='text-sm text-muted-foreground mb-4'>24 Octobre 2024</p>
                        <Button variant="outline" disabled>Lire le communiqué</Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className='flex-row items-center gap-4'>
                        <Mail className='h-8 w-8 text-primary' />
                        <CardTitle>Contact Média</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold">Service Presse</p>
                        <Link href="mailto:innovatechsolutionservice@gmail.com" className='text-primary hover:underline'>
                            innovatechsolutionservice@gmail.com
                        </Link>
                    </CardContent>
                </Card>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline font-bold text-center mb-16">Ressources Média</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Logos & Identité Visuelle</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {logo && <div className='bg-background p-6 rounded-lg flex justify-center items-center mb-4'>
                            <Image src={logo.imageUrl} alt={logo.description} width={100} height={100} />
                        </div>}
                        <Button className='w-full' disabled>
                            <Download className='mr-2' /> Télécharger les logos
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Direction</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {leadershipTeam.map(member => {
                                const memberImage = teamImages.find(img => img.id === member.imageId);
                                return (
                                    <div key={member.id} className="flex items-center gap-4">
                                        <Avatar className='h-16 w-16'>
                                            {memberImage && <AvatarImage src={memberImage.imageUrl} alt={`Photo de ${member.name}`} />}
                                            <AvatarFallback>{member.initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className='font-bold'>{member.name}</p>
                                            <p className='text-sm text-muted-foreground'>{member.role}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                         <Button className='w-full mt-6' variant="outline" disabled>
                            <Download className='mr-2' /> Télécharger les portraits
                        </Button>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Images de Marque</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-2 gap-2 mb-4'>
                            <Image src="/images/office-1.jpg" width={200} height={200} alt="Bureau ITSS 1" className='rounded-md' data-ai-hint="office workspace" />
                            <Image src="/images/office-2.jpg" width={200} height={200} alt="Bureau ITSS 2" className='rounded-md' data-ai-hint="team meeting" />
                        </div>
                         <Button className='w-full' variant="outline" disabled>
                            <Download className='mr-2' /> Télécharger les images
                        </Button>
                    </CardContent>
                </Card>

            </div>
          </div>
      </section>
    </>
  );
}
