
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
    title: "Documentation API Cloud - ITSS",
    description: "Documentation technique pour notre API Cloud.",
};

const codeExample = `
fetch('https://api.itss.com/v1/projects', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer VOTRE_CLE_API'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur:', error));
`;

export default function CloudApiPage() {
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
                    <h1 className="font-headline">Documentation de l'API Cloud</h1>
                    <p className="lead">
                        Notre API RESTful vous permet de gérer vos ressources cloud par programmation.
                        Intégrez nos services dans vos applications et automatisez vos flux de travail.
                    </p>

                    <h2>Authentification</h2>
                    <p>
                        Toutes les requêtes à l'API doivent être authentifiées à l'aide d'une clé API.
                        Vous pouvez générer et gérer vos clés API depuis le tableau de bord de votre compte.
                        Incluez votre clé dans l'en-tête <code>Authorization</code> comme un Bearer Token.
                    </p>
                    
                    <h2>Points d'accès (Endpoints)</h2>
                    <h3>Lister les projets</h3>
                    <p>Récupère une liste de tous vos projets.</p>
                    <p><code>GET /v1/projects</code></p>
                    
                    <h4>Exemple de requête :</h4>
                    <CodeBlock language="javascript" code={codeExample} />
                    
                    <h3>Créer un projet</h3>
                    <p>Crée une nouvelle ressource de projet.</p>
                    <p><code>POST /v1/projects</code></p>
                    <h4>Paramètres du corps :</h4>
                    <ul>
                        <li><code>name</code> (string, requis) : Le nom de votre projet.</li>
                        <li><code>region</code> (string, optionnel) : La région où le projet sera déployé. Par défaut, 'eu-central-1'.</li>
                    </ul>

                </article>
            </div>
        </div>
    )
}
