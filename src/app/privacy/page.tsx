
'use client';
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-center mb-12">Politique de Confidentialité</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p>Dernière mise à jour : {currentDate}</p>

          <h2 className="text-2xl font-semibold">1. Collecte de l'Information</h2>
          <p>
            Nous collectons des informations lorsque vous remplissez un formulaire de contact sur notre site. Les informations collectées incluent votre nom, votre adresse e-mail et votre message.
          </p>

          <h2 className="text-2xl font-semibold">2. Utilisation des Informations</h2>
          <p>
            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
          </p>
          <ul>
            <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
            <li>Fournir un contenu publicitaire personnalisé.</li>
            <li>Améliorer notre site web.</li>
            <li>Vous contacter par e-mail.</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Confidentialité</h2>
          <p>
            Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.
          </p>

          <h2 className="text-2xl font-semibold">4. Protection des Informations</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
          </p>

          <h2 className="text-2xl font-semibold">5. Cookies</h2>
          <p>
            Nos cookies améliorent l’accès à notre site et identifient les visiteurs réguliers. Pour en savoir plus, consultez notre <a href="/cookies" className="text-primary hover:underline">Politique des Cookies</a>.
          </p>
          
          <h2 className="text-2xl font-semibold">6. Consentement</h2>
          <p>
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>
          
          <h2 className="text-2xl font-semibold">7. Contactez-nous</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à <a href="mailto:innovatechsolutionservice@gmail.com" className="text-primary hover:underline">innovatechsolutionservice@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
