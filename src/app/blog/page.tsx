import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - ITSS',
  description: 'Articles, nouvelles et aperçus du monde de la technologie par ITSS.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Notre Blog</h1>
      <p className="text-lg text-muted-foreground">
        Contenu à venir. Revenez bientôt pour des articles et des aperçus passionnants !
      </p>
    </div>
  );
}
