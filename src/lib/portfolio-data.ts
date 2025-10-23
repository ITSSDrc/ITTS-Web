
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const portfolioProjects = [
  {
    id: 'itss-website-showcase',
    client: 'ITSS DRC (Projet Interne)',
    title: 'Site Web Officiel & Vitrine Numérique d\'ITSS',
    image: PlaceHolderImages.find(p => p.id === 'itss-website-showcase'),
    summary: 'Développement de notre propre site web institutionnel avec Next.js 14, présentant nos services, notre portfolio et notre expertise. Une vitrine moderne, rapide et optimisée pour le SEO.',
    tags: ['Next.js 14', 'React', 'Tailwind CSS', 'ShadCN UI', 'Genkit AI', 'Vercel'],
    metrics: [
      { label: 'Performance Lighthouse', value: '98/100' },
      { label: 'Temps de chargement', value: '< 1s' },
      { label: 'SEO Score', value: '95/100' },
    ],
    challenge: "Nous avions besoin d'une nouvelle plateforme pour affirmer notre présence en ligne, présenter nos réalisations et nos services de manière professionnelle, et générer de nouveaux prospects. Le site devait être extrêmement performant, facile à mettre à jour, et refléter notre expertise technologique.",
    solution: "Nous avons construit le site de A à Z en utilisant les technologies les plus modernes de l'écosystème React. Le choix de Next.js 14 avec le App Router nous a permis de créer un site rapide et optimisé pour le référencement. L'interface a été construite avec les composants ShadCN UI et stylisée avec Tailwind CSS. Nous avons également intégré des capacités d'IA avec Google Genkit pour de futures fonctionnalités. Le déploiement continu est assuré via Vercel.",
    result: "Le résultat est le site que vous consultez actuellement : une plateforme rapide, esthétique et entièrement responsive. Il sert non seulement de vitrine pour nos services, mais aussi de démonstration concrète de notre capacité à livrer des projets web modernes et performants."
  },
  {
    id: 'mateya-podcast-app',
    client: 'Communauté des Églises de Bunia',
    title: 'Mateya: L\'Application de Podcasts pour les Églises',
    image: PlaceHolderImages.find(p => p.id === 'mateya-podcast-app'),
    summary: 'Une application mobile pour iOS et Android permettant aux fidèles d\'écouter des prédications, des enseignements et des chants, renforçant la communauté chrétienne de Bunia.',
    tags: ['Développement Mobile', 'Flutter', 'Supabase', 'Podcast', 'Audio Streaming'],
    metrics: [
      { label: 'Utilisateurs Actifs', value: '+5,000' },
      { label: 'Églises Partenaires', value: '25+' },
      { label: 'Écoutes par semaine', value: '+10,000' },
    ],
    challenge: "De nombreuses églises à Bunia souhaitaient partager leurs messages audio avec leurs membres, en particulier ceux qui ne pouvaient pas assister aux services. Il n'existait aucune plateforme centralisée, simple d'utilisation et adaptée au contexte local (faible connectivité).",
    solution: "Nous avons développé 'Mateya', une application mobile multiplateforme (iOS/Android) avec Flutter, ce qui garantit une expérience utilisateur fluide et native. L'application permet aux églises de téléverser facilement des fichiers audio, de les classer par prédicateur ou par série. Pour les utilisateurs, l'application offre une écoute en streaming et une option de téléchargement pour une écoute hors ligne, cruciale pour les zones à faible connectivité. Nous avons utilisé Supabase pour une base de données robuste, l'authentification des utilisateurs et le stockage des fichiers audio.",
    gallery: [
      { src: "/images/mateya-gallery/mateya-1.jpg", alt: "Capture d'écran de l'accueil de Mateya", hint: "app homescreen" },
      { src: "/images/mateya-gallery/mateya-2.jpg", alt: "Capture d'écran du lecteur audio de Mateya", hint: "app player" },
      { src: "/images/mateya-gallery/mateya-3.jpg", alt: "Capture d'écran de la liste des prédications", hint: "sermon list" },
      { src: "/images/mateya-gallery/mateya-4.jpg", alt: "Capture d'écran du mode hors-ligne", hint: "offline mode" },
    ],
    result: "Mateya est devenue l'application de référence pour la communauté chrétienne de Bunia. En 6 mois, elle a attiré plus de 5 000 utilisateurs actifs et a permis à plus de 25 églises de diffuser leurs messages. L'option de téléchargement a été un succès majeur, permettant de toucher des membres dans des zones rurales sans accès internet stable."
  },
  {
    id: 'graphic-design-branding',
    client: 'Clients Locaux & Internationaux',
    title: 'Identités Visuelles & Supports de Communication',
    image: PlaceHolderImages.find(p => p.id === 'portfolio-graphic-design'),
    summary: 'Création d\'identités de marque percutantes et de supports de communication variés (logos, flyers, bannières) pour renforcer l\'image de nos clients.',
    tags: ['Design Graphique', 'Branding', 'Identité Visuelle', 'Supports Print', 'Réseaux Sociaux'],
    metrics: [
      { label: 'Identités créées', value: '50+' },
      { label: 'Supports conçus', value: '+200' },
      { label: 'Satisfaction Client', value: '98%' },
    ],
    challenge: "De nombreuses entreprises et organisations à Bunia, mais aussi à l'international, manquaient d'une identité visuelle professionnelle et cohérente pour se démarquer. Elles avaient besoin de supports de communication (numériques et imprimés) pour asseoir leur crédibilité et attirer des clients.",
    solution: `Notre pôle design a travaillé en étroite collaboration avec chaque client pour comprendre leur vision, leurs valeurs et leur public cible. À partir de là, nous avons développé des chartes graphiques complètes, incluant la création de logos, le choix des typographies et des palettes de couleurs. Nous avons ensuite décliné ces identités sur une multitude de supports : cartes de visite, brochures, bannières pour les réseaux sociaux, et maquettes pour les sites web, garantissant une communication visuelle cohérente sur tous les canaux.`,
    gallery: [
      { src: "/images/design-gallery/design-1.jpg", alt: "Exemple de design 1", hint: "modern logo" },
      { src: "/images/design-gallery/design-2.jpg", alt: "Exemple de design 2", hint: "business card" },
      { src: "/images/design-gallery/design-3.jpg", alt: "Exemple de design 3", hint: "flyer design" },
      { src: "/images/design-gallery/design-4.jpg", alt: "Exemple de design 4", hint: "brochure layout" },
      { src: "/images/design-gallery/design-5.jpg", alt: "Exemple de design 5", hint: "social media banner" },
      { src: "/images/design-gallery/design-6.jpg", alt: "Exemple de design 6", hint: "packaging design" },
      { src: "/images/design-gallery/design-7.jpg", alt: "Exemple de design 7", hint: "web design mockup" },
      { src: "/images/design-gallery/design-8.jpg", alt: "Exemple de design 8", hint: "app icon" },
      { src: "/images/design-gallery/design-9.jpg", alt: "Exemple de design 9", hint: "poster design" },
      { src: "/images/design-gallery/design-10.jpg", alt: "Exemple de design 10", hint: "brand identity" },
    ],
    result: "Grâce à des identités visuelles fortes et professionnelles, nos clients ont vu leur notoriété et leur crédibilité augmenter. Des supports de communication clairs et esthétiques leur ont permis d'améliorer leurs campagnes marketing et d'attirer une nouvelle clientèle, renforçant ainsi leur positionnement sur le marché."
  },
  {
    id: 'network-deployment-bunia',
    client: 'Fournisseurs d\'Accès Internet & Entreprises',
    title: 'Déploiement d\'Infrastructure Réseau à Bunia',
    image: PlaceHolderImages.find(p => p.id === 'network-deployment'),
    summary: 'Conception et déploiement d\'infrastructures réseau filaires (fibre, cuivre) et sans fil (Wi-Fi, 5G) pour connecter les quartiers, les entreprises et les institutions de la ville de Bunia.',
    tags: ['Infrastructure Réseau', 'Fibre Optique', 'Réseau Sans Fil', 'Topologie Réseau', 'Cybersécurité'],
    metrics: [
      { label: 'Km de fibre déployés', value: '15+' },
      { label: 'Points d\'accès installés', value: '150+' },
      { label: 'Disponibilité réseau', value: '99.8%' },
    ],
    challenge: "La connectivité internet à Bunia était limitée, peu fiable et coûteuse. Les entreprises et les résidents souffraient d'un manque d'infrastructures robustes, ce qui freinait le développement économique et l'accès à l'information.",
    solution: "Notre équipe réseau a mené une étude topographique complète de la ville pour planifier un déploiement optimal. Nous avons déployé des kilomètres de fibre optique dans les artères principales et mis en place des points d'accès sans fil (Wi-Fi et liaisons point-à-point) pour couvrir les zones moins denses. Nous avons configuré des cœurs de réseau redondants et mis en place des politiques de sécurité strictes pour garantir la fiabilité et la protection des données.",
    gallery: [
      { src: "/images/network-team/team-1.jpg", alt: "Équipe technique installant des équipements", hint: "technicians working" },
      { src: "/images/network-team/team-2.jpg", alt: "Technicien sur un poteau tirant un câble", hint: "fiber optic installation" },
      { src: "/images/network-team/team-3.jpg" , alt: "Configuration d'un routeur dans un data center", hint: "network configuration" },
      { src: "/images/network-team/team-4.jpg", alt: "Vue d'ensemble d'une antenne de transmission", hint: "telecom tower" },
    ],
    result: "Ce projet a considérablement amélioré la connectivité dans les zones couvertes, offrant un accès internet plus rapide et plus stable. Plusieurs entreprises ont pu migrer vers des solutions cloud, et les fournisseurs d'accès locaux ont amélioré la qualité de leur service, stimulant ainsi l'économie numérique locale."
  },
  {
    id: 'computer-maintenance-services',
    client: 'Entreprises et Particuliers de Bunia',
    title: 'Services de Maintenance Informatique et Réparation',
    image: PlaceHolderImages.find(p => p.id === 'computer-maintenance-project'),
    summary: 'Service complet de maintenance préventive, de réparation et de mise à niveau pour parcs informatiques d\'entreprises et ordinateurs de particuliers.',
    tags: ['Maintenance Matériel', 'Réparation PC/Laptop', 'Mise à niveau Hardware', 'Support Technique'],
    metrics: [
      { label: 'Interventions / an', value: '400+' },
      { label: 'Taux de résolution', value: '95%' },
      { label: 'Clients Satisfaits', value: '99%' },
    ],
    challenge: "De nombreuses entreprises et particuliers à Bunia faisaient face à des pannes matérielles récurrentes, des ralentissements systèmes et une obsolescence rapide de leur matériel, entraînant des pertes de productivité et des coûts imprévus.",
    solution: "Nous avons mis en place un service de maintenance complet incluant des diagnostics précis, des réparations rapides (changement de pièces, réinstallation de systèmes) et des programmes de maintenance préventive pour les entreprises. Nous proposons également des services de mise à niveau (ajout de RAM, remplacement par des SSD) pour prolonger la durée de vie des équipements et améliorer leurs performances.",
    result: "Nos services ont permis de réduire de 70% les temps d'arrêt pour nos clients sous contrat de maintenance. La durée de vie moyenne de leur parc informatique a été prolongée de 2 ans, offrant un excellent retour sur investissement. Les particuliers bénéficient d'un service rapide et fiable, restaurant leurs outils de travail et de communication."
  },
  {
    id: 'e-commerce-migration-cloud',
    client: 'RetailNext Corp',
    title: 'Migration et modernisation d\'une plateforme e-commerce',
    image: PlaceHolderImages.find(p => p.id === 'case-study-1'),
    summary: 'Migration d\'une infrastructure monolithique vers une architecture microservices sur AWS, optimisant les performances et la scalabilité.',
    tags: ['AWS', 'E-commerce', 'React', 'Node.js', 'Microservices'],
    metrics: [
      { label: 'Réduction des coûts', value: '40%' },
      { label: 'Disponibilité', value: '99.99%' },
      { label: 'Temps de chargement', value: '-60%' },
    ],
    challenge: "L'ancienne plateforme e-commerce du client était lente, difficile à mettre à jour et ne pouvait pas gérer les pics de trafic pendant les périodes de soldes, entraînant des pertes de revenus importantes.",
    solution: "Nous avons conçu et exécuté une migration complète vers une architecture de microservices sur Amazon Web Services (AWS). La boutique a été reconstruite avec React et Node.js, et déployée sur des conteneurs auto-évolutifs pour une flexibilité maximale.",
    result: "La nouvelle plateforme a non seulement géré le trafic du Black Friday sans aucun temps d'arrêt, mais a également permis à l'équipe de développement de déployer de nouvelles fonctionnalités 5 fois plus rapidement. La réduction des coûts d'infrastructure a atteint 40%."
  },
  {
    id: 'fintech-app-securite',
    client: 'FinSecure Bank',
    title: 'Application bancaire mobile avec sécurité de niveau militaire',
    image: PlaceHolderImages.find(p => p.id === 'case-study-2'),
    summary: 'Création d\'une application bancaire pour iOS et Android avec chiffrement de bout en bout, authentification biométrique et conformité PCI DSS.',
    tags: ['Cybersécurité', 'Développement Mobile', 'Fintech', 'Swift', 'Kotlin'],
     metrics: [
      { label: 'Failles de sécurité', value: '0' },
      { label: 'Adoption utilisateur', value: '+200k' },
      { label: 'Satisfaction App Store', value: '4.8/5' },
    ],
    challenge: "La banque avait besoin de lancer une nouvelle application mobile pour rester compétitive, mais la sécurité était la priorité absolue pour protéger les données sensibles des clients et se conformer aux réglementations financières strictes.",
    solution: "Notre équipe a développé des applications natives pour iOS (Swift) et Android (Kotlin) en intégrant des protocoles de sécurité de pointe, notamment le chiffrement de bout en bout, la détection de jailbreak/root, et une authentification multi-facteurs incluant la biométrie.",
    result: "L'application a passé avec succès plusieurs audits de sécurité externes et a été lancée en toute confiance. Elle a rapidement gagné la confiance des utilisateurs, avec plus de 200 000 téléchargements au cours des six premiers mois et des notes exceptionnelles sur les app stores."
  },
  {
    id: 'saas-ia-automatisation',
    client: 'Innovate SaaS',
    title: 'Intégration de l\'IA pour automatiser le support client',
    image: PlaceHolderImages.find(p => p.id === 'case-study-3'),
    summary: 'Mise en place d\'un agent conversationnel basé sur l\'IA pour résoudre les tickets de support, améliorer le temps de réponse et augmenter la satisfaction client.',
    tags: ['IA', 'SaaS', 'Automatisation', 'Python', 'TensorFlow'],
     metrics: [
      { label: 'Tickets résolus par IA', value: '65%' },
      { label: 'Temps de réponse moyen', value: '-80%' },
      { label: 'Satisfaction client', value: '+30%' },
    ],
    challenge: "L'équipe de support client était submergée par un volume croissant de tickets répétitifs, ce qui entraînait des temps de réponse lents pour les problèmes plus complexes et une baisse de la satisfaction client.",
    solution: "Nous avons développé et intégré un chatbot intelligent utilisant le traitement du langage naturel (NLP). L'agent a été entraîné sur la base de connaissances de l'entreprise pour comprendre et résoudre de manière autonome les questions les plus fréquentes, et pour trier et acheminer intelligemment les demandes complexes vers le bon agent humain.",
    result: "L'automatisation a permis de résoudre instantanément 65% des tickets entrants, libérant ainsi l'équipe humaine pour se concentrer sur les problèmes à forte valeur ajoutée. Le temps de réponse moyen a été réduit de 80%, et la satisfaction client a augmenté de 30% en un trimestre."
  },
   {
    id: 'healthtech-data-platform',
    client: 'SantéData Plus',
    title: 'Plateforme d\'analyse de données pour la recherche médicale',
    image: PlaceHolderImages.find(p => p.id === 'blog-health-rdc-portfolio'),
    summary: 'Développement d’une plateforme web sécurisée pour la collecte et l’analyse de données de santé anonymisées, permettant d’accélérer la recherche clinique.',
    tags: ['HealthTech', 'Big Data', 'Vue.js', 'Django', 'PostgreSQL'],
     metrics: [
      { label: 'Temps d\'analyse', value: '÷10' },
      { label: 'Conformité HIPAA', value: '100%' },
      { label: 'Nouveaux partenariats', value: '12' },
    ],
    challenge: "Les chercheurs perdaient un temps précieux à agréger et nettoyer des données provenant de sources multiples. La collaboration était difficile et la sécurité des données patient était une préoccupation majeure.",
    solution: "Nous avons construit une plateforme centralisée et conforme aux normes de santé (HIPAA) avec un backend Django robuste et une interface intuitive en Vue.js. La plateforme automatise l'ingestion de données, fournit des outils d'analyse visuelle et gère des contrôles d'accès stricts pour garantir la confidentialité.",
    result: "Les cycles de recherche ont été considérablement réduits, passant de plusieurs mois à quelques semaines pour certaines analyses. La plateforme a permis à l'institution de nouer 12 nouveaux partenariats de recherche en un an grâce à sa fiabilité et sa sécurité."
  },
   {
    id: 'edtech-learning-platform',
    client: 'EduSphere',
    title: 'Plateforme d\'apprentissage en ligne personnalisée',
    image: PlaceHolderImages.find(p => p.id === 'blog-edtech-rdc-portfolio'),
    summary: 'Création d\'une plateforme EdTech avec des parcours d\'apprentissage adaptatifs basés sur l\'IA, des classes virtuelles et des outils collaboratifs.',
    tags: ['EdTech', 'IA', 'Next.js', 'Firebase', 'WebRTC'],
     metrics: [
      { label: 'Engagement étudiant', value: '+45%' },
      { label: 'Taux de complétion', value: '+25%' },
      { label: 'Coûts de tutorat', value: '-35%' },
    ],
    challenge: "Les plateformes d'apprentissage traditionnelles 'taille unique' ne parvenaient pas à maintenir l'engagement des étudiants, entraînant de faibles taux de complétion des cours.",
    solution: "Nous avons développé une plateforme entièrement nouvelle avec Next.js et Firebase. Le cœur de l'innovation réside dans un moteur d'IA qui analyse les performances des étudiants et adapte dynamiquement le contenu et les exercices. Nous avons également intégré des classes virtuelles en temps réel avec WebRTC.",
    result: "La nouvelle approche personnalisée a augmenté l'engagement des étudiants de 45 %. Le taux de réussite des cours a bondi de 25 %, et la plateforme a pu réduire la nécessité d'un tutorat humain coûteux de 35 % grâce à son support automatisé et adaptatif."
  },
  {
    id: 'agropastoral',
    client: 'Agropastoral',
    title: 'Plateforme de mise en relation pour produits agricoles',
    image: PlaceHolderImages.find(p => p.id === 'blog-agritech-portfolio'),
    summary: 'Création d\'une marketplace web et mobile pour connecter directement les producteurs agricoles locaux avec les acheteurs, restaurants et consommateurs.',
    tags: ['AgriTech', 'Marketplace', 'React Native', 'Firebase', 'Géolocalisation'],
     metrics: [
      { label: 'Transactions / mois', value: '1,200+' },
      { label: 'Producteurs inscrits', value: '300+' },
      { label: 'Temps de livraison', value: '-40%' },
    ],
    challenge: "Les producteurs agricoles locaux avaient du mal à accéder à un marché plus large et subissaient les pressions des intermédiaires. Les acheteurs, de leur côté, manquaient de visibilité sur la disponibilité et la qualité des produits locaux.",
    solution: "Nous avons développé une plateforme complète comprenant une application mobile en React Native pour les producteurs et les acheteurs, ainsi qu'un tableau de bord web pour l'administration. La plateforme intègre la géolocalisation pour trouver les produits les plus proches, un système de paiement mobile sécurisé, et un module de notation pour garantir la qualité et la confiance.",
    result: "Agropastoral a créé un circuit court plus efficace, augmentant les revenus des producteurs de 30% en moyenne. Les acheteurs bénéficient de produits plus frais et d'une meilleure traçabilité. La plateforme a réduit le temps moyen de la commande à la livraison de 40%."
  },
];
