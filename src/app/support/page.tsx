import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - ITSS',
  description: 'Obtenez de l\'aide et du support pour les services ITSS.',
};

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Support</h1>
      <p className="text-lg text-muted-foreground">
        Notre portail de support sera bientôt en ligne. Pour une assistance immédiate, veuillez <a href="/contact" className="text-primary hover:underline">nous contacter</a>.
      </p>
    </div>
  );
}
