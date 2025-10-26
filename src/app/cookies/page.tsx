
'use client';
import { useState, useEffect } from 'react';

export default function CookiesPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-center mb-12">Politique des Cookies</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p>Dernière mise à jour : {currentDate}</p>

          <h2 className="text-2xl font-semibold">1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences (comme la connexion, la langue, la taille de la police et d'autres préférences d'affichage) sur une période donnée.
          </p>

          <h2 className="text-2xl font-semibold">2. Comment utilisons-nous les cookies ?</h2>
          <p>
            Nous utilisons les cookies pour plusieurs raisons :
          </p>
          <ul>
            <li><strong>Cookies Essentiels :</strong> Ces cookies sont nécessaires au fonctionnement de notre site. Ils incluent, par exemple, les cookies qui vous permettent de vous connecter à des zones sécurisées.</li>
            <li><strong>Cookies de Performance :</strong> Ils nous permettent de reconnaître et de compter le nombre de visiteurs et de voir comment les visiteurs se déplacent sur notre site. Cela nous aide à améliorer le fonctionnement de notre site.</li>
            <li><strong>Cookies de Fonctionnalité :</strong> Ils sont utilisés pour vous reconnaître lorsque vous revenez sur notre site. Cela nous permet de personnaliser notre contenu pour vous et de mémoriser vos préférences.</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Gérer les cookies</h2>
          <p>
            Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies qui sont déjà sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour les empêcher d'être placés. Si vous faites cela, cependant, vous pourriez avoir à ajuster manuellement certaines préférences chaque fois que vous visitez un site et certains services et fonctionnalités peuvent ne pas fonctionner.
          </p>
          
          <h2 className="text-2xl font-semibold">4. Modifications de la politique</h2>
          <p>
             Nous pouvons mettre à jour cette politique de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle politique des cookies sur cette page.
          </p>

          <h2 className="text-2xl font-semibold">5. Contactez-nous</h2>
          <p>
            Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter à <a href="mailto:innovatechsolutionservice@gmail.com" className="text-primary hover:underline">innovatechsolutionservice@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
