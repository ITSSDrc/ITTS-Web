import Link from "next/link";
import { BrainCircuit, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">ITSS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Votre partenaire de confiance pour l'innovation et la transformation numérique.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Produit</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solutions Cloud</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Logiciels sur mesure</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cybersécurité</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Intelligence Artificielle</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Entreprise</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Carrières</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
               <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Presse</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Ressources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Études de cas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Légal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Conditions d'utilisation</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</Link></li>
               <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politique des cookies</Link></li>
            </ul>
          </div>

        </div>
        <div className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ITSS, Inc. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
