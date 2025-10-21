import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { PageLoader } from '@/components/page-loader';
import { Inter, Poppins } from 'next/font/google';

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

export const metadata: Metadata = {
  title: 'ITSS - Solutions et Services Technologiques Innovants',
  description: 'Favoriser le succès des entreprises grâce à des solutions technologiques de pointe.',
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
          <PageLoader>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <Toaster />
          </PageLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
