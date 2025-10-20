"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 max-w-screen-xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/user-assets%2Fitss-logo-new.png?alt=media&token=e150531c-52f3-455e-9060-6e9f1f41746b" 
              alt="ITSS Logo" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
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
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="mb-8 flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <Image 
                src="https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/user-assets%2Fitss-logo-new.png?alt=media&token=e150531c-52f3-455e-9060-6e9f1f41746b" 
                alt="ITSS Logo" 
                width={40} 
                height={40} 
                className="mr-2 rounded-full"
              />
              <span className="font-headline text-xl font-bold">ITSS</span>
            </Link>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
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
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center space-x-2 md:hidden">
          <Image 
            src="https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/user-assets%2Fitss-logo-new.png?alt=media&token=e150531c-52f3-455e-9060-6e9f1f41746b" 
            alt="ITSS Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="font-headline text-xl font-bold">ITSS</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Button asChild size="lg" className="rounded-full font-semibold">
            <Link href="/contact">Obtenir un devis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}