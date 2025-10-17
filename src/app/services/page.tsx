import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - ITSS',
  description: 'Explore the comprehensive technology services offered by ITSS, including cloud solutions, custom software, cybersecurity, and managed IT.',
};

const serviceDetails = [
  {
    name: "Cloud Solutions",
    description: "Leverage the power of the cloud with our comprehensive services, including migration, management, and optimization. We build scalable, resilient, and cost-effective cloud architectures on AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration & Strategy", "Infrastructure as Code (IaC)", "Serverless Computing", "Containerization (Docker & Kubernetes)"],
  },
  {
    name: "Custom Software Development",
    description: "Get tailor-made software that aligns perfectly with your business processes. Our agile development team builds robust, scalable, and user-friendly web and mobile applications from scratch.",
    features: ["Full-Stack Web Development", "Mobile App Development (iOS & Android)", "API Design & Integration", "UI/UX Design & Prototyping"],
  },
  {
    name: "Cybersecurity Services",
    description: "In an era of increasing digital threats, our cybersecurity services provide a multi-layered defense to protect your valuable data and infrastructure. We identify vulnerabilities and implement proactive security measures.",
    features: ["Penetration Testing", "Security Audits & Compliance", "Managed Detection & Response (MDR)", "Employee Security Training"],
  },
  {
    name: "Managed IT Services",
    description: "Offload the burden of IT management and focus on your core business. Our proactive managed services ensure your systems are always up-to-date, secure, and performing optimally, minimizing downtime.",
    features: ["24/7 System Monitoring", "Help Desk & Technical Support", "Network Management", "Data Backup & Disaster Recovery"],
  },
  {
    name: "Data Analytics & BI",
    description: "Turn your data into actionable insights. We help you collect, process, and visualize data to make informed business decisions, identify trends, and uncover new opportunities for growth.",
    features: ["Data Warehousing", "ETL Pipeline Development", "Interactive Dashboards", "Predictive Analytics"],
  },
  {
    name: "DevOps & Automation",
    description: "Accelerate your development lifecycle and improve software quality with our DevOps expertise. We implement CI/CD pipelines and automate infrastructure to increase efficiency and reliability.",
    features: ["CI/CD Pipeline Implementation", "Infrastructure Automation", "Monitoring & Logging Solutions", "Cloud-Native Tooling"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-headline font-bold md:text-5xl">Our Technology Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide a wide range of expert services designed to solve complex challenges and drive innovation for your business.
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
