
import type { Metadata } from 'next';
import { practicalActivities } from '@/lib/gallery-data';
import { ImageGallery } from '@/components/image-gallery';
import { ConnectionMeshAnimation } from '@/components/connection-mesh-animation';

export const metadata: Metadata = {
  title: 'Galerie - ITSS',
  description: 'Explorez une collection visuelle de nos réalisations pratiques, formations et vie d\'équipe.',
};

export default function GalleryPage() {

    return (
        <>
            <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
                <ConnectionMeshAnimation />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Galerie Interne</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Un aperçu de notre culture, de nos formations et du savoir-faire pratique de notre équipe.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 space-y-24">
                     {practicalActivities.map(activity => (
                        <div key={activity.id}>
                            <div className="max-w-3xl mx-auto text-center mb-12">
                                <h2 className="text-4xl font-headline font-bold">{activity.title}</h2>
                                <p className="mt-4 text-lg text-muted-foreground">{activity.description}</p>
                            </div>
                             {activity.gallery && activity.gallery.length > 0 ? (
                               <div className="not-prose my-8">
                                    <ImageGallery gallery={activity.gallery} />
                               </div>
                            ) : (
                                <div className="text-center py-16">
                                    <h3 className="text-2xl font-semibold">Galerie à venir</h3>
                                    <p className="text-muted-foreground mt-2">Les images pour cette activité seront bientôt disponibles.</p>
                                </div>
                            )}
                        </div>
                     ))}
                     {practicalActivities.length === 0 && (
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
