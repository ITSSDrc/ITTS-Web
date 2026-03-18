
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cloud, Code, Palette, Shield, Network, QrCode } from "lucide-react";
import type { Metadata } from 'next';
import { ConnectionMeshAnimation } from "@/components/connection-mesh-animation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Nos Services - ITSS',
  description: 'Explorez les services technologiques complets proposés par ITSS, y compris les solutions cloud, les logiciels personnalisés et la cybersécurité.',
};

const serviceDetails = [
  {
    name: "Invitations Numériques",
    icon: <QrCode className="h-8 w-8 text-primary" />,
    description: "Système haut de gamme de cartes d'invitation avec validation par code unique, synchronisant une gestion centralisée et une interface web élégante.",
    features: ["Gestion simplifiée des listes", "Expérience web de prestige", "Validation sécurisée aux entrées", "Suivi des confirmations en direct"],
    link: "/services/invitations"
  },
  {
    name: "Solutions Cloud",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    description: "Tirez parti de la puissance du cloud avec nos services complets, incluant la migration, la gestion et l'optimisation des infrastructures.",
    features: ["Migration & Stratégie Cloud", "Infrastructure évolutive", "Continuité de service", "Optimisation des coûts"],
  },
  {
    name: "Logiciels sur Mesure",
    icon: <Code className="h-8 w-8 text-primary" />,
    description: "Des outils adaptés précisément à vos processus métier. Applications web et mobiles robustes, évolutives et centrées utilisateur.",
    features: ["Développement Web Expert", "Applications Mobiles Natives", "Intégration de Systèmes", "Maintenance & Support"],
  },
  {
    name: "Design UI/UX",
    icon: <Palette className="h-8 w-8 text-primary" />,
    description: "Expériences utilisateur d'exception. Interfaces intuitives qui captivent vos utilisateurs et renforcent l'image de votre marque.",
    features: ["Recherche Utilisateur", "Prototypage Interactif", "Identité Visuelle Numerique", "Optimisation de Conversion"],
  },
  {
    name: "Cybersécurité",
    icon: <Shield className="h-8 w-8 text-primary" />,
    description: "Protection multicouche de vos actifs numériques. Audit des vulnérabilités et mise en place de mesures de défense proactives.",
    features: ["Audits de Sécurité", "Protection des Données", "Conformité Normative", "Sensibilisation des Équipes"],
  },
  {
    name: "Infrastructure & Réseau",
    icon: <Network className="h-8 w-8 text-primary" />,
    description: "Conception et maintenance d'infrastructures réseau performantes pour une connectivité stable et sécurisée en entreprise.",
    features: ["Réseaux LAN/WAN", "Surveillance Continue", "Sécurité des Équipements", "Solutions de Connectivité"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-neutral-950">
        <ConnectionMeshAnimation className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight text-white leading-tight">Nos Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-400">
            Des solutions technologiques de pointe, conçues pour propulser votre entreprise vers de nouveaux sommets d'innovation.
          </p>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service) => (
              <Card key={service.name} className="flex flex-col bg-card/80 backdrop-blur-sm border-white/10 overflow-hidden hover:-translate-y-2 transition-all duration-500 group shadow-lg">
                <CardHeader>
                  <div className="flex justify-center items-center h-24">
                     <div className="bg-primary/10 p-5 rounded-2xl group-hover:scale-110 transition-transform">
                       {service.icon}
                     </div>
                  </div>
                  <CardTitle className="text-2xl font-headline text-center mt-4">{service.name}</CardTitle>
                </CardHeader>
                <div className="flex-grow flex flex-col justify-between p-6 pt-0">
                  <div>
                    <p className="text-muted-foreground mb-8 text-center leading-relaxed">{service.description}</p>
                    <ul className="space-y-4 text-sm mb-10">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                          <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.link ? (
                    <Button asChild className="w-full mt-auto h-12 rounded-full font-bold">
                      <Link href={service.link}>Découvrir l'offre</Link>
                    </Button>
                  ) : (
                    <Button variant="outline" asChild className="w-full mt-auto h-12 rounded-full border-neutral-200">
                      <Link href="/contact">En savoir plus</Link>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
