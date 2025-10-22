
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const portfolioProjects = [
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
    solution: `Notre pôle design a travaillé en étroite collaboration avec chaque client pour comprendre leur vision, leurs valeurs et leur public cible. À partir de là, nous avons développé des chartes graphiques complètes, incluant la création de logos, le choix des typographies et des palettes de couleurs. Nous avons ensuite décliné ces identités sur une multitude de supports :
      <br/><br/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="space-y-2">
            <img src="/images/design-flyer.jpg" alt="Exemple de flyer réalisé par ITSS" class="rounded-lg shadow-md" data-ai-hint="corporate flyer"/>
            <p class="text-sm text-center text-muted-foreground">Conception de flyers percutants</p>
        </div>
        <div class="space-y-2">
             <img src="/images/design-logo-mockup.jpg" alt="Exemple de logo sur une maquette" class="rounded-lg shadow-md" data-ai-hint="logo mockup"/>
             <p class="text-sm text-center text-muted-foreground">Logos modernes et mémorables</p>
        </div>
      </div>
      Nos services incluent la conception de cartes de visite, de brochures, de bannières pour les réseaux sociaux, et de maquettes pour les sites web, garantissant une communication visuelle cohérente sur tous les canaux.`,
    result: "Grâce à des identités visuelles fortes et professionnelles, nos clients ont vu leur notoriété et leur crédibilité augmenter. Des supports de communication clairs et esthétiques leur ont permis d'améliorer leurs campagnes marketing et d'attirer une nouvelle clientèle, renforçant ainsi leur positionnement sur le marché."
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
    id: 'agritech-supply-chain',
    client: 'AgriConnect',
    title: 'Optimisation de la chaîne logistique agricole avec la blockchain',
    image: PlaceHolderImages.find(p => p.id === 'blog-agritech-portfolio'),
    summary: 'Mise en œuvre d\'un système de traçabilité basé sur la blockchain pour garantir la transparence de la chaîne d\'approvisionnement du producteur au consommateur.',
    tags: ['AgriTech', 'Blockchain', 'IoT', 'React Native', 'Hyperledger'],
     metrics: [
      { label: 'Transparence', value: '100%' },
      { label: 'Pertes réduites', value: '15%' },
      { label: 'Confiance consommateur', value: '+50%' },
    ],
    challenge: "Les consommateurs étaient de plus en plus méfiants quant à l'origine et à la qualité des produits alimentaires. Les producteurs, quant à eux, subissaient des pertes dues à une logistique inefficace.",
    solution: "Nous avons mis en place une solution de traçabilité de bout en bout utilisant la blockchain Hyperledger. Des capteurs IoT sur le terrain capturent des données (température, humidité) qui sont enregistrées de manière immuable sur la chaîne. Une application mobile en React Native permet aux consommateurs de scanner un QR code pour voir tout le parcours du produit.",
    result: "La solution a apporté une transparence totale, renforçant la confiance des consommateurs qui a augmenté de 50%. L'analyse des données logistiques a permis de réduire les pertes de produits périssables de 15%, augmentant directement les revenus des producteurs."
  },
];

    