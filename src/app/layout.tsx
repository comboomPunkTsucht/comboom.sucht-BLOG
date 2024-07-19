import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Particles from '@/components/particles';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import { encrypt } from '@vercel/flags';
import { FlagValues } from '@vercel/flags/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata: Metadata = {
  title: "Fabian Aps Portfolio/Impressum",
  description: "my own portfolio/impressum website",
  keywords: "portfolio, website, impressum, github, linkedin, aps, fabian",
  twitter: {
    card: 'summary_large_image',
    title: 'Fabian Aps Portfolio/Impressum',
    description: 'my own portfolio/impressum website',
    siteId: '723191637950775296',
    creator: '@mcpeaps_HD',
    creatorId: '723191637950775296',
    images: [{
      url: 'https://mahd.comboompunksucht.app/pictures/logo.PNG',
      alt: 'Logo of mcpeaps_HD', // Alt attribute for Twitter image
      width: 3000,
      height: 3000
    }], // Must be an absolute URL
  },
  openGraph: {
    type: 'website',
    title: 'Fabian Aps Portfolio/Impressum',
    description: 'my own portfolio/impressum website',
    url: 'https://mahd.comboompunksucht.app',
    images: [{
      url: 'https://mahd.comboompunksucht.app/pictures/logo.PNG',
      alt: 'Logo of mcpeaps_HD', // Alt attribute for Twitter image
      width: 3000,
      height: 3000
    }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
      noarchive: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
//<link rel="manifest" href="/manifest.webmanifest" />
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const values = { exampleFlag: true };
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#010101" />
        <meta name="start_url" content="https://mahd.comboompunksucht.app/" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#010101" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Fabian Aps Portfolio/Impressum" />
        <meta name="application-name" content="Fabian Aps" />
        <meta name="msapplication-TileColor" content="#010101" />
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="sitemap" href="/sitemap" />
        <meta name="keywords" content="portfolio, website, impressum, github, linkedin, aps, fabian" />
        <meta name="format-detection" content="telephone=yes, date=no, email=yes, address=yes" />
      </head>
      <body>
        <UserProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

          <div className="bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background">
          <Particles
            quantity={400}
            refresh={true}
          />
            <div className="z-1">{children}
            <FlagValues values={values} />
            </div>
          </div>
          </ThemeProvider>
          <SpeedInsights />
          <Analytics />
          </UserProvider>
      </body>
      </html>
  );
}