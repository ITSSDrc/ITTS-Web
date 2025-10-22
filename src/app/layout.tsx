
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { PageLoader } from '@/components/page-loader';
import { Inter, Poppins } from 'next/font/google';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
});

const siteUrl = 'https://www.itssdrc.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ITSS DRC - Solutions et Services Technologiques Innovants',
    template: '%s - ITSS DRC',
  },
  description: 'ITSS DRC est votre partenaire pour l\'innovation et la transformation numérique à Bunia et en RDC. Nous offrons des solutions de pointe en Cloud, développement logiciel, cybersécurité et IA.',
  keywords: ['ITSS DRC', 'Bunia', 'RDC', 'développement logiciel', 'cybersécurité', 'solutions cloud', 'intelligence artificielle', 'services informatiques', 'transformation numérique'],
  authors: [{ name: 'ITSS DRC', url: siteUrl }],
  creator: 'ITSS DRC',
  publisher: 'ITSS DRC',
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: 'ITSS DRC - Solutions et Services Technologiques Innovants',
    description: 'Propulsez votre entreprise vers l\'avenir avec des solutions de pointe en Cloud, Logiciel, Cybersécurité et Intelligence Artificielle.',
    url: siteUrl,
    siteName: 'ITSS DRC',
    images: [
      {
        url: '/images/og-image.png', // Assurez-vous que cette image existe dans public/images
        width: 1200,
        height: 630,
        alt: 'Logo de ITSS DRC sur un fond technologique',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITSS DRC - Solutions et Services Technologiques Innovants',
    description: 'Votre partenaire pour l\'innovation et la transformation numérique à Bunia et en RDC.',
    site: '@ITSSDrc',
    creator: '@ITSSDrc',
    images: [`${siteUrl}/images/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/itss-logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/itss-logo.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/images/itss-logo.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn("font-body antialiased", "bg-background text-foreground")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <Suspense>
            <PageLoader>
              <Header />
              <main>
                {children}
              </main>
              <Footer />
              <Toaster />
            </PageLoader>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
