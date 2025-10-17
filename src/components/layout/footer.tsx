import Link from "next/link";
import { Mountain, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">ITSS</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Favoriser le succès des entreprises grâce à des solutions technologiques de pointe.
            </p>
            <div className="flex items-center gap-4">
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
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Solutions Cloud</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Logiciels sur mesure</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Cybersécurité</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Infogérance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">À propos</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Carrières</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ITSS. Tous droits réservés.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Conditions d'utilisation</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Politique de confidentialité</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
