
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Book, Cloud, Code } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation - ITSS',
  description: 'Documentation technique et guides pour les services et produits ITSS.',
};

const docCategories = [
    {
        icon: <Cloud className="h-10 w-10 text-primary mb-4" />,
        title: "API Cloud",
        description: "Guides complets pour l'intégration et la gestion de nos services cloud.",
        link: "#"
    },
    {
        icon: <Code className="h-10 w-10 text-primary mb-4" />,
        title: "Kits de développement (SDK)",
        description: "Documentation pour nos SDK en Python, JavaScript, et plus encore.",
        link: "#"
    },
    {
        icon: <Book className="h-10 w-10 text-primary mb-4" />,
        title: "Guides de démarrage",
        description: "Tutoriels pas à pas pour configurer votre premier projet avec ITSS.",
        link: "#"
    },
]

export default function DocumentationPage() {
  return (
    <>
      <section className="bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Portail de Documentation</h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Toutes les ressources dont vous avez besoin pour intégrer et maîtriser nos solutions.
            </p>
            <div className="mt-10 max-w-2xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Rechercher dans la documentation..." className="w-full h-14 pl-12 rounded-full text-lg" />
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {docCategories.map(cat => (
                    <Link href={cat.link} key={cat.title}>
                        <Card className="h-full text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                            <CardHeader>
                                {cat.icon}
                                <CardTitle className="text-2xl font-headline">{cat.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{cat.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
