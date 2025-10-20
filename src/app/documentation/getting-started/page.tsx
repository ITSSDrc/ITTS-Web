
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
    title: "Guide de Démarrage - ITSS",
    description: "Tutoriels pas à pas pour configurer votre premier projet avec ITSS.",
};

export default function GettingStartedPage() {
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
                    <h1 className="font-headline">Guide de Démarrage Rapide</h1>
                    <p className="lead">
                        Suivez ce guide pour déployer votre première application avec ITSS en moins de 5 minutes.
                    </p>

                    <h2>1. Créez un compte</h2>
                    <p>
                        Si ce n'est pas déjà fait, <Link href="#">créez un compte sur notre plateforme</Link>. L'inscription est gratuite et ne prend qu'une minute.
                    </p>

                    <h2>2. Générez votre clé API</h2>
                    <p>
                        Une fois connecté, accédez à la section "Paramètres > API" de votre tableau de bord et générez une nouvelle clé API. Copiez cette clé, vous en aurez besoin à l'étape suivante.
                    </p>
                    
                    <h2>3. Installez notre CLI</h2>
                    <p>Ouvrez votre terminal et installez l'outil en ligne de commande ITSS via npm.</p>
                    <CodeBlock language="bash" code="npm install -g itss-cli" />

                    <h2>4. Connectez-vous via le CLI</h2>
                    <p>Utilisez la commande <code>login</code> et collez la clé API que vous avez copiée précédemment.</p>
                    <CodeBlock language="bash" code="itss login" />

                    <h2>5. Déployez votre première application</h2>
                    <p>Vous êtes prêt ! Naviguez jusqu'au répertoire de votre projet et utilisez la commande <code>deploy</code>.</p>
                    <CodeBlock language="bash" code="itss deploy" />

                    <p>Félicitations ! Votre application est maintenant en ligne. Vous pouvez gérer vos déploiements depuis votre tableau de bord.</p>

                </article>
            </div>
        </div>
    )
}
