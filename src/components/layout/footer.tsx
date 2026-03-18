
'use client';
import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Youtube } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ConnectionMeshAnimation } from "../connection-mesh-animation";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const logo = PlaceHolderImages.find(p => p.id === 'itss-logo');
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Masquer le footer sur la page d'invitation
  if (pathname?.startsWith('/invitation/')) return null;
  
  return (
    <footer className={cn("relative border-t bg-background/50 backdrop-blur-sm overflow-hidden")}>
      <ConnectionMeshAnimation className="opacity-30" />
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
               {logo && <Image 
                src={logo.imageUrl}
                alt={logo.description}
                width={40} 
                height={40}
                className="rounded-full"
              />}
              <span className="font-headline text-xl font-bold">ITSS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Votre partenaire de confiance pour l'innovation et la transformation numérique à Bunia et partout en RDC.
            </p>
            <div className="flex items-center gap-5 mt-6">
              <Link href="https://x.com/ITSSDrc" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://github.com/ITSSDrc" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCEKykRG6I-5G5CE54FB3-4A" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground uppercase text-xs tracking-widest">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cloud</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Logiciels</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cybersécurité</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">IA & DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground uppercase text-xs tracking-widest">Entreprise</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Carrières</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
               <li><Link href="/press" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Presse</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground uppercase text-xs tracking-widest">Légal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Confidentialité</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Conditions</Link></li>
              <li><Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {year} ITSS DRC. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
               <Link href="/documentation" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
               <Link href="/support" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Support</Link>
               <Link href="/portfolio" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
