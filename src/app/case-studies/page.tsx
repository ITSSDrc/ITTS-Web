import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Études de Cas - ITSS',
  description: 'Découvrez comment ITSS a aidé des entreprises comme la vôtre à réussir.',
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Études de Cas</h1>
      <p className="text-lg text-muted-foreground">
        Nous préparons nos réussites. Revenez bientôt !
      </p>
    </div>
  );
}
