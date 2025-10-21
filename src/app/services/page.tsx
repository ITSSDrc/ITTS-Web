import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Cloud, Code, Shield, Server, LineChart, BrainCircuit, Palette, Wifi, Wrench } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: 'Nos Services - ITSS',
  description: 'Explorez les services technologiques complets proposés par ITSS, y compris les solutions cloud, les logiciels personnalisés, la cybersécurité et l\'infogérance.',
};

const serviceDetails = [
  {
    name: "Solutions Cloud",
    icon: <Cloud />,
    description: "Tirez parti de la puissance du cloud avec nos services complets, incluant la migration, la gestion et l'optimisation. Nous construisons des architectures cloud évolutives, résilientes et rentables sur AWS, Azure et Google Cloud.",
    features: ["Migration & Stratégie Cloud", "Infrastructure as Code (IaC)", "Informatique sans serveur (Serverless)", "Conteneurisation (Docker & Kubernetes)"],
  },
  {
    name: "Logiciels sur Mesure",
    icon: <Code />,
    description: "Obtenez un logiciel sur mesure qui correspond parfaitement à vos processus métier. Notre équipe de développement agile crée des applications web et mobiles robustes, évolutives et conviviales.",
    features: ["Développement Web Full-Stack", "Applications mobiles (iOS & Android)", "Conception & Intégration d'API", "Maintenance et support continus"],
  },
  {
    name: "Design UI/UX",
    icon: <Palette />,
    description: "Créez des expériences utilisateur exceptionnelles avec notre expertise en design. Nous concevons des interfaces intuitives et esthétiques qui captivent vos utilisateurs et renforcent votre marque.",
    features: ["Recherche utilisateur & Personas", "Prototypage & Wireframing", "Conception d'interfaces (UI)", "Création de systèmes de design"],
  },
  {
    name: "Cybersécurité",
    icon: <Shield />,
    description: "Nos services de cybersécurité offrent une défense multicouche pour protéger vos données et infrastructures précieuses. Nous identifions les vulnérabilités et mettons en œuvre des mesures proactives.",
    features: ["Tests d'intrusion & Audits", "Détection et réponse gérées (MDR)", "Conformité (RGPD, ISO 27001)", "Formation à la sécurité"],
  },
  {
    name: "Infrastructure & Réseau",
    icon: <Wifi />,
    description: "Concentrez-vous sur votre métier grâce à une infrastructure réseau fiable, sécurisée et performante, gérée par nos experts.",
    features: ["Conception d'architecture LAN/WAN", "Gestion et surveillance de réseau", "Sécurité des infrastructures", "Solutions de connectivité et VPN"],
  },
  {
    name: "Analyse de Données & BI",
    icon: <LineChart />,
    description: "Transformez vos données en informations exploitables. Nous aidons à collecter, traiter et visualiser les données pour prendre des décisions commerciales éclairées et découvrir de nouvelles opportunités.",
    features: ["Entreposage de données", "Développement de pipelines ETL", "Tableaux de bord interactifs (Power BI, Tableau)", "Analyse prédictive et Machine Learning"],
  },
  {
    name: "Conseil en IA & DevOps",
    icon: <BrainCircuit />,
    description: "Accélérez votre cycle de développement et intégrez l'intelligence artificielle. Nous automatisons vos processus et mettons en œuvre des solutions d'IA pour booster l'efficacité et l'innovation.",
    features: ["Implémentation de pipeline CI/CD", "Automatisation de l'infrastructure", "Stratégie et intégration de l'IA", "Développement de modèles personnalisés"],
  },
  {
    name: "Maintenance Matériel",
    icon: <Wrench />,
    description: "Assurez la longévité et la performance de votre parc informatique avec nos services de maintenance préventive et curative sur serveurs, postes de travail et périphériques.",
    features: ["Diagnostic et réparation de matériel", "Mises à niveau de composants (RAM, SSD)", "Nettoyage physique et dépoussiérage", "Gestion du cycle de vie du matériel"],
  },
];

export default function ServicesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'itss-logo');

  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-contain opacity-10 dark:opacity-20 p-16 md:p-24"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Nos Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Des solutions technologiques expertes, conçues pour propulser votre entreprise vers de nouveaux sommets d'innovation et d'efficacité.
          </p>
        </div>
      </section>
      
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service) => (
              <Card key={service.name} className="glow-card flex flex-col bg-card/80 backdrop-blur-sm border-white/10 hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      {React.cloneElement(service.icon, { className: "h-7 w-7" })}
                    </div>
                    <CardTitle className="text-2xl font-headline">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
