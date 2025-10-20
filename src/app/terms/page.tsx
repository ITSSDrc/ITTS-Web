
'use client';
import { useState, useEffect } from 'react';
import type { Metadata } from 'next';

/*
export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation - ITSS',
  description: 'Consultez les conditions d\'utilisation de nos services.',
};
*/

export default function TermsPage() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);
  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-center mb-12">Conditions d'Utilisation</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p>Dernière mise à jour : {currentDate}</p>
          
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Bienvenue chez ITSS. En accédant à notre site web et en utilisant nos services, vous acceptez d'être lié par les présentes Conditions d'Utilisation. Veuillez les lire attentivement.
          </p>

          <h2 className="text-2xl font-semibold">2. Utilisation de nos Services</h2>
          <p>
            Vous devez suivre toutes les politiques mises à votre disposition dans le cadre des Services. N'utilisez pas nos Services de manière abusive. Par exemple, n'interférez pas avec nos Services et ne tentez pas d'y accéder en utilisant une méthode autre que l'interface et les instructions que nous fournissons.
          </p>

          <h2 className="text-2xl font-semibold">3. Comptes</h2>
          <p>
            Lorsque vous créez un compte chez nous, vous devez nous fournir des informations exactes, complètes et à jour en tout temps. Le non-respect de cette obligation constitue une violation des Conditions, ce qui peut entraîner la résiliation immédiate de votre compte sur notre Service.
          </p>
          
          <h2 className="text-2xl font-semibold">4. Propriété Intellectuelle</h2>
          <p>
            Le Service et son contenu original, ses caractéristiques et ses fonctionnalités sont et resteront la propriété exclusive d'ITSS et de ses concédants de licence.
          </p>

          <h2 className="text-2xl font-semibold">5. Limitation de Responsabilité</h2>
          <p>
            En aucun cas, ITSS, ni ses administrateurs, employés, partenaires, agents, fournisseurs ou affiliés, ne pourront être tenus responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif.
          </p>
          
          <h2 className="text-2xl font-semibold">6. Modifications</h2>
          <p>
            Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Si une révision est importante, nous essaierons de fournir un préavis d'au moins 30 jours avant l'entrée en vigueur des nouvelles conditions.
          </p>

          <h2 className="text-2xl font-semibold">7. Contactez-nous</h2>
          <p>
            Si vous avez des questions concernant ces Conditions, veuillez nous contacter à <a href="mailto:innovatechsolutionservice@gmail.com" className="text-primary hover:underline">innovatechsolutionservice@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
