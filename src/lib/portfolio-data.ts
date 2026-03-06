
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const portfolioProjects = [
  {
    id: 'acf-mungwalu-starlink',
    client: 'ONGD ACF (Action Contre la Faim)',
    title: 'Installation Réseau LAN & Connexion Starlink à Mungwalu',
    image: PlaceHolderImages.find(p => p.id === 'mungwalu-city'),
    summary: 'Déploiement d\'une infrastructure réseau locale (LAN) et mise en place d\'une connexion internet haut débit par satellite via Starlink pour les bureaux de l\'ONGD ACF à Mungwalu.',
    tags: ['Starlink', 'Réseau LAN', 'Mungwalu', 'Connectivité Critique', 'Humanitaire'],
    metrics: [
      { label: 'Débit Internet', value: '150+ Mbps' },
      { label: 'Utilisateurs Connectés', value: '25+' },
      { label: 'Disponibilité', value: '99.9%' },
    ],
    challenge: "Mungwalu est une zone enclavée où la connectivité internet traditionnelle est quasi-existante ou très instable. L'ONGD ACF avait besoin d'une connexion fiable et performante pour coordonner ses opérations humanitaires vitales, ainsi que d'un réseau local sécurisé pour ses équipements de bureau.",
    solution: "ITSS a conçu une solution hybride combinant la technologie satellite de pointe Starlink pour l'accès internet et un réseau local (LAN) structuré. Nous avons procédé à l'installation physique de l'antenne, au câblage structuré des bureaux, et à la configuration de routeurs et pare-feu pour garantir une sécurité optimale des données de l'organisation.",
    gallery: [
      { 
        src: "/images/acf-team-1.jpeg", 
        alt: "L'équipe ITSS préparant l'antenne Starlink à Mungwalu", 
        hint: "tech team" 
      },
      { 
        src: "/images/acf-team-2.jpeg", 
        alt: "Installation du câblage réseau dans les bureaux d'ACF", 
        hint: "network wiring" 
      },
      { 
        src: "/images/acf-team-3.jpeg", 
        alt: "Configuration des serveurs et du routeur Starlink", 
        hint: "server config" 
      },
      { 
        src: "/images/acf-team-4.jpeg", 
        alt: "L'équipe ITSS et le personnel d'ACF après l'installation réussie", 
        hint: "satisfied team" 
      },
    ],
    result: "Grâce à cette intervention, le personnel d'ACF à Mungwalu dispose désormais d'une connexion internet stable et rapide, permettant des visioconférences fluides et un transfert de données efficace avec le bureau national et international."
  },
  {
    id: 'karibuni-hsafari-web',
    client: 'Hôtel Karibuni',
    title: 'Application HSafari & Site Web Officiel',
    image: PlaceHolderImages.find(p => p.id === 'karibuni-project-main'),
    summary: 'Développement de l\'application de gestion hôtelière HSafari et conception du site web vitrine pour l\'un des hôtels les plus prestigieux de Bunia.',
    tags: ['Dart', 'Flutter', 'Next.js', 'Gestion Hôtelière', 'E-commerce'],
    metrics: [
      { label: 'Efficacité de Gestion', value: '+75%' },
      { label: 'Réservations en ligne', value: 'Active' },
      { label: 'Vitesse du site', value: '< 1.5s' },
    ],
    challenge: "L'Hôtel Karibuni souhaitait moderniser sa gestion interne, autrefois manuelle, pour réduire les erreurs de réservation et optimiser le service client. De plus, une présence web était nécessaire pour attirer les voyageurs internationaux.",
    solution: "ITSS a développé **HSafari**, une application de gestion hôtelière complète conçue avec **Dart & Flutter**, permettant une gestion fluide des chambres, de la facturation et du personnel. En parallèle, nous avons créé le site web officiel [www.hotelkaribunibunia.com](https://www.hotelkaribunibunia.com) avec **Next.js**, offrant une vitrine élégante et performante, optimisée pour tous les appareils.",
    result: "Le logiciel HSafari a centralisé toutes les opérations de l'hôtel, améliorant la productivité du personnel. Le site web a permis à l'Hôtel Karibuni de devenir plus accessible en ligne, facilitant les réservations directes."
  },
  {
    id: 'itss-website-showcase',
    client: 'ITSS DRC (Projet Interne)',
    title: 'Site Web Officiel & Vitrine Numérique d\'ITSS',
    image: PlaceHolderImages.find(p => p.id === 'itss-website-showcase'),
    summary: 'Développement de notre propre site web institutionnel avec Next.js 14, présentant nos services, notre portfolio et notre expertise.',
    tags: ['Next.js 14', 'React', 'Tailwind CSS', 'ShadCN UI', 'Genkit AI', 'Vercel'],
    metrics: [
      { label: 'Performance Lighthouse', value: '98/100' },
      { label: 'Temps de chargement', value: '< 1s' },
      { label: 'SEO Score', value: '95/100' },
    ],
    challenge: "Nous avions besoin d'une plateforme pour affirmer notre présence en ligne et présenter nos réalisations.",
    solution: "Nous avons construit le site avec Next.js 14, ShadCN UI et Tailwind CSS.",
    result: "Une plateforme rapide, esthétique et entièrement responsive."
  }
];
