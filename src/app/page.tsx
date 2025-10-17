import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Code, Shield, Server, Zap } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to power your applications.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Custom Software",
    description: "Bespoke software development tailored to your unique business needs.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security services.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Managed IT",
    description: "Reliable and proactive IT management to keep your systems running smoothly.",
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex flex-col min-h-[calc(100vh-theme(spacing.14))]">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-headline font-bold md:text-6xl lg:text-7xl tracking-tighter">
            Empowering Your Digital Future
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            ITSS delivers innovative technology solutions to drive business growth and efficiency. We are your trusted partner in digital transformation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold md:text-4xl">Our Mission</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Our mission is to empower businesses with state-of-the-art technology and expert guidance. We believe in building long-term partnerships, delivering solutions that not only solve today's challenges but also pave the way for future success. We are committed to excellence, innovation, and integrity in everything we do.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Zap className="h-32 w-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">Comprehensive Tech Services</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, we offer a full spectrum of services to meet your technology needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="link" asChild>
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
