
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioProjects } from '@/lib/portfolio-data';
import { ImageGallery } from '@/components/image-gallery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Galerie - ITSS',
  description: 'Explorez une collection visuelle de nos projets et réalisations.',
};

export default function GalleryPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'case-studies-hero');

    const allGalleryImages = portfolioProjects.flatMap(project => 
        project.gallery ? project.gallery.map(img => ({...img, projectId: project.id, projectTitle: project.title })) : []
    );

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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Galerie</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Un aperçu visuel de notre savoir-faire et de l'impact de nos solutions.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                     <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                        {allGalleryImages.map((image, index) => (
                           <Link href={`/portfolio/${image.projectId}`} key={index} className="block group">
                             <Card className="overflow-hidden break-inside-avoid">
                                <CardHeader className="p-0">
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={500}
                                            height={500}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                            data-ai-hint={image.hint}
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <p className="text-sm font-semibold text-primary group-hover:underline">{image.projectTitle}</p>
                                    <p className="text-xs text-muted-foreground">{image.alt}</p>
                                </CardContent>
                            </Card>
                           </Link>
                        ))}
                    </div>
                    {allGalleryImages.length === 0 && (
                         <div className="text-center py-16">
                            <h3 className="text-2xl font-semibold">Galerie en construction</h3>
                            <p className="text-muted-foreground mt-2">Revenez bientôt pour découvrir nos réalisations en images.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
