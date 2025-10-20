
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
    title: "Documentation SDK - ITSS",
    description: "Documentation pour nos Kits de Développement Logiciel (SDK).",
};

const codeExample = `
import { ITSS_SDK } from '@itss/sdk-js';

const itss = new ITSS_SDK({
  apiKey: 'VOTRE_CLE_API'
});

async function listProjects() {
  try {
    const projects = await itss.projects.list();
    console.log('Projets récupérés:', projects);
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
  }
}

listProjects();
`;

export default function SdkPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/documentation" className="inline-flex items-center text-primary hover:underline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour à la documentation
                    </Link>
                </div>
                <article className="prose prose-lg dark:prose-invert max-w-none">
                    <h1 className="font-headline">Kits de Développement (SDK)</h1>
                    <p className="lead">
                        Utilisez nos SDK pour interagir facilement avec l'API ITSS dans votre langage de programmation préféré.
                    </p>

                    <h2>Installation (JavaScript)</h2>
                    <p>
                        Installez le package via npm ou yarn :
                    </p>
                    <CodeBlock language="bash" code="npm install @itss/sdk-js" />

                    <h2>Initialisation</h2>
                    <p>
                        Commencez par initialiser le SDK avec votre clé API.
                    </p>
                    <CodeBlock language="javascript" code={codeExample} />
                    
                    <h2>Disponibilité</h2>
                    <p>Nos SDK sont actuellement disponibles pour les langages suivants :</p>
                     <ul>
                        <li>JavaScript / TypeScript</li>
                        <li>Python</li>
                        <li>Go (à venir)</li>
                        <li>Java (à venir)</li>
                    </ul>

                </article>
            </div>
        </div>
    )
}
