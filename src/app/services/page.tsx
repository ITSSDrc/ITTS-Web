
import * as React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cloud, Code, Palette, Shield, Network, BarChart, BrainCircuit, Wrench, Mail, Smartphone, QrCode } from "lucide-react";
import type { Metadata } from 'next';
import { ConnectionMeshAnimation } from "@/components/connection-mesh-animation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Nos Services - ITSS',
  description: 'Explorez les services technologiques complets proposés par ITSS, y compris les solutions cloud, les logiciels personnalisés, la cybersécurité et l\'infogérance.',
};

const serviceDetails = [
  {
    name: "Invitations Électroniques",
    icon: <QrCode className="h-8 w-8 text-primary" />,
    description: "Système innovant de cartes d'invitation numériques avec QR codes, synchronisé entre une app Flutter et une interface Web élégante.",
    features: ["Gestion via App Flutter", "Affichage Web Premium", "Validation par QR Code", "Confirmation RSVP en ligne"],
    link: "/services/invitations"
  },
  {
    name: "Solutions Cloud",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    description: "Tirez parti de la puissance du cloud avec nos services complets, incluant la migration, la gestion et l'optimisation. Architectures AWS, Azure et Google Cloud.",
    features: ["Migration & Stratégie Cloud", "Infrastructure as Code (IaC)", "Informatique sans serveur", "Conteneurisation (Docker/K8s)"],
  },
  {
    name: "Logiciels sur Mesure",
    icon: <Code className="h-8 w-8 text-primary" />,
    description: "Logiciel sur mesure adapté à vos processus métier. Applications web et mobiles robustes, évolutives et conviviales.",
    features: ["Développement Web Full-Stack", "Apps mobiles (iOS & Android)", "Conception & Intégration d'API", "Maintenance et support"],
  },
  {
    name: "Design UI/UX",
    icon: <Palette className="h-8 w-8 text-primary" />,
    description: "Expériences utilisateur exceptionnelles. Interfaces intuitives et esthétiques qui captivent vos utilisateurs et renforcent votre marque.",
    features: ["Recherche utilisateur", "Prototypage & Wireframing", "Conception d'interfaces (UI)", "Systèmes de design"],
  },
  {
    name: "Cybersécurité",
    icon: <Shield className="h-8 w-8 text-primary" />,
    description: "Défense multicouche pour protéger vos données et infrastructures. Identification des vulnérabilités et mesures proactives.",
    features: ["Tests d'intrusion & Audits", "Détection et réponse (MDR)", "Conformité (RGPD, ISO)", "Formation à la sécurité"],
  },
  {
    name: "Infrastructure & Réseau",
    icon: <Network className="h-8 w-8 text-primary" />,
    description: "Infrastructure réseau fiable et performante, gérée par nos experts pour une connectivité sans faille.",
    features: ["Conception LAN/WAN", "Gestion et surveillance", "Sécurité des infrastructures", "Solutions VPN"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <ConnectionMeshAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
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
              <Card key={service.name} className="glow-card flex flex-col bg-card/80 backdrop-blur-sm border-white/10 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group">
                <CardHeader>
                  <div className="flex justify-center items-center h-24">
                     <div className="bg-primary/10 p-4 rounded-full">
                       {service.icon}
                     </div>
                  </div>
                  <CardTitle className="text-2xl font-headline text-center">{service.name}</CardTitle>
                </CardHeader>
                <div className="flex-grow flex flex-col justify-between p-6 pt-0">
                  <div>
                    <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                    <ul className="space-y-3 text-sm mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.link ? (
                    <Button asChild className="w-full mt-auto">
                      <Link href={service.link}>Découvrir ce service</Link>
                    </Button>
                  ) : (
                    <Button variant="ghost" disabled className="w-full mt-auto opacity-0">
                      En savoir plus
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
