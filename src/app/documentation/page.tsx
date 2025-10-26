
"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Book, Cloud, Code } from 'lucide-react';
import Link from 'next/link';
import { ConnectionMeshAnimation } from '@/components/connection-mesh-animation';

// Since this is a client component, we can't export metadata directly.
// This should be moved to a layout file or parent server component if SEO is critical.
/*
export const metadata: Metadata = {
  title: 'Documentation - ITSS',
  description: 'Documentation technique et guides pour les services et produits ITSS.',
};
*/

const docCategories = [
    {
        icon: <Cloud className="h-10 w-10 text-primary mb-4" />,
        title: "API Cloud",
        description: "Guides complets pour l'intégration et la gestion de nos services cloud.",
        link: "/documentation/cloud-api"
    },
    {
        icon: <Code className="h-10 w-10 text-primary mb-4" />,
        title: "Kits de développement (SDK)",
        description: "Documentation pour nos SDK en Python, JavaScript, et plus encore.",
        link: "/documentation/sdk"
    },
    {
        icon: <Book className="h-10 w-10 text-primary mb-4" />,
        title: "Guides de démarrage",
        description: "Tutoriels pas à pas pour configurer votre premier projet avec ITSS.",
        link: "/documentation/getting-started"
    },
];

export default function DocumentationPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = docCategories.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <ConnectionMeshAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Portail de Documentation</h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Toutes les ressources dont vous avez besoin pour intégrer et maîtriser nos solutions.
            </p>
            <div className="mt-10 max-w-2xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        placeholder="Rechercher dans la documentation..." 
                        className="w-full h-14 pl-12 rounded-full text-lg" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
            {filteredDocs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredDocs.map(cat => (
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
            ) : (
                <div className="text-center py-16">
                    <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold">Aucun résultat trouvé</h3>
                    <p className="text-muted-foreground mt-2">Nous n'avons trouvé aucune documentation correspondant à votre recherche.</p>
                </div>
            )}
        </div>
      </section>
    </>
  );
}
