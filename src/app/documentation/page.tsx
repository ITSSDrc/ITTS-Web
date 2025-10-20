import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - ITSS',
  description: 'Documentation technique et guides pour les services et produits ITSS.',
};

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Documentation</h1>
      <p className="text-lg text-muted-foreground">
        Notre documentation complète sera bientôt disponible.
      </p>
    </div>
  );
}
