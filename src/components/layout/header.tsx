
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Twitter, Github, Youtube, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Nos réalisations" },
];

const companyLinks = [
    { href: "/about", label: "À propos" },
    { href: "/team", label: "Notre Équipe" },
    { href: "/gallery", label: "Galerie" },
    { href: "/blog", label: "Blog" },
    { href: "/support#faq", label: "FAQ" },
]

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const logo = PlaceHolderImages.find(p => p.id === 'itss-logo');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 max-w-screen-xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {logo && <Image 
              src={logo.imageUrl}
              alt={logo.description} 
              width={40} 
              height={40} 
              className="rounded-full"
            />}
            <span className="font-headline text-xl font-bold">ITSS</span>
          </Link>
          <nav className="flex items-center gap-6 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80 font-medium",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                  "flex items-center gap-1 transition-colors hover:text-foreground/80 font-medium focus:outline-none",
                  companyLinks.some(link => pathname.startsWith(link.href.split('#')[0]) && link.href !== '/') ? "text-foreground" : "text-foreground/60"
              )}>
                Entreprise <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {companyLinks.map(link => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
                href="/contact"
                className={cn(
                  "transition-colors hover:text-foreground/80 font-medium",
                  pathname === "/contact" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Contact
              </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Ouvrir/Fermer le menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col bg-background/80 backdrop-blur-lg">
            <SheetHeader>
                <SheetTitle className="sr-only">Menu Principal</SheetTitle>
                <SheetDescription className="sr-only">Navigation principale du site</SheetDescription>
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {logo && <Image 
                    src={logo.imageUrl}
                    alt={logo.description} 
                    width={40} 
                    height={40} 
                    className="mr-2 rounded-full"
                  />}
                  <span className="font-headline text-xl font-bold">ITSS</span>
                </Link>
            </SheetHeader>
            
            <Separator className="my-4" />

            <div className="flex flex-1 flex-col">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-xl font-medium transition-colors hover:text-foreground/80",
                      pathname === link.href ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                 <p className="text-xl font-medium text-foreground/80 mt-4">Entreprise</p>
                 <div className="flex flex-col gap-4 pl-4">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-foreground/80",
                          pathname === link.href ? "text-foreground" : "text-foreground/60"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>
                 <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-xl font-medium transition-colors hover:text-foreground/80 pt-4",
                      pathname === "/contact" ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    Contact
                  </Link>
              </nav>
            </div>

            <div className="mt-auto">
              <Separator className="my-4" />
              <div className="flex items-center justify-center gap-6">
                <Link href="https://x.com/ITSSDrc" aria-label="X (Twitter)" onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
                </Link>
                <Link href="https://github.com/ITSSDrc" aria-label="GitHub" onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCEKykRG6I-5G5CE54FB3-4A" aria-label="YouTube" onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
                </Link>
              </div>
            </div>

          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center space-x-2 md:hidden">
          {logo && <Image 
            src={logo.imageUrl}
            alt={logo.description}
            width={40} 
            height={40} 
            className="rounded-full"
          />}
          <span className="font-headline text-xl font-bold">ITSS</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Button asChild size="lg" className="rounded-full font-semibold px-4 text-sm md:text-base">
            <Link href="/contact">Obtenir un devis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
