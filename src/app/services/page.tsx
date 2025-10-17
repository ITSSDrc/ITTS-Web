import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services - ITSS',
  description: 'Explorez les services technologiques complets proposés par ITSS, y compris les solutions cloud, les logiciels personnalisés, la cybersécurité et l\'infogérance.',
};

const serviceDetails = [
  {
    name: "Solutions Cloud",
    description: "Tirez parti de la puissance du cloud avec nos services complets, incluant la migration, la gestion et l'optimisation. Nous construisons des architectures cloud évolutives, résilientes et rentables sur AWS, Azure et Google Cloud.",
    features: ["Migration & Stratégie Cloud", "Infrastructure as Code (IaC)", "Informatique sans serveur (Serverless)", "Conteneurisation (Docker & Kubernetes)"],
  },
  {
    name: "Développement de Logiciels sur Mesure",
    description: "Obtenez un logiciel sur mesure qui correspond parfaitement à vos processus métier. Notre équipe de développement agile crée des applications web et mobiles robustes, évolutives et conviviales à partir de zéro.",
    features: ["Développement Web Full-Stack", "Développement d'applications mobiles (iOS & Android)", "Conception & Intégration d'API", "Conception UI/UX & Prototypage"],
  },
  {
    name: "Services de Cybersécurité",
    description: "À l'ère des menaces numériques croissantes, nos services de cybersécurité offrent une défense multicouche pour protéger vos données et infrastructures précieuses. Nous identifions les vulnérabilités et mettons en œuvre des mesures de sécurité proactives.",
    features: ["Tests d'intrusion", "Audits de sécurité & Conformité", "Détection et réponse gérées (MDR)", "Formation à la sécurité des employés"],
  },
  {
    name: "Services d'Infogérance",
    description: "Déléguez le fardeau de la gestion informatique et concentrez-vous sur votre cœur de métier. Nos services gérés proactifs garantissent que vos systèmes sont toujours à jour, sécurisés et performants, minimisant les temps d'arrêt.",
    features: ["Surveillance des systèmes 24/7", "Service d'assistance et support technique", "Gestion de réseau", "Sauvegarde des données et reprise après sinistre"],
  },
  {
    name: "Analyse de Données & BI",
    description: "Transformez vos données en informations exploitables. Nous vous aidons à collecter, traiter et visualiser les données pour prendre des décisions commerciales éclairées, identifier les tendances et découvrir de nouvelles opportunités de croissance.",
    features: ["Entreposage de données (Data Warehousing)", "Développement de pipelines ETL", "Tableaux de bord interactifs", "Analyse prédictive"],
  },
  {
    name: "DevOps & Automatisation",
    description: "Accélérez votre cycle de vie de développement et améliorez la qualité des logiciels grâce à notre expertise DevOps. Nous mettons en œuvre des pipelines CI/CD et automatisons l'infrastructure pour accroître l'efficacité et la fiabilité.",
    features: ["Implémentation de pipeline CI/CD", "Automatisation de l'infrastructure", "Solutions de surveillance et de journalisation", "Outils natifs du cloud"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-headline font-bold md:text-5xl">Nos Services Technologiques</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Nous fournissons une large gamme de services experts conçus pour résoudre des défis complexes et stimuler l'innovation pour votre entreprise.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service) => (
              <Card key={service.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
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
