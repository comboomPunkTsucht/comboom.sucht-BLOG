"use client";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Particles from '@/components/particles';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { FlagValues } from '@vercel/flags/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { metadata } from './metadata';

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
        <meta name="start_url" content="https://comboompunksucht.app/" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#010101" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="comboom.sucht | The Mgaming Group" />
        <meta name="application-name" content="comboom.sucht" />
        <meta name="msapplication-TileColor" content="#010101" />
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="sitemap" href="/sitemap" />
        <meta name="keywords" content="comboom, sucht, comboom.sucht, comboompunktsucht, mcpeaps_HD, mahd, blackdragon" />
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
              <div className="bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background min-h-screen flex flex-col">
                <Particles quantity={400} refresh={true} />
                <div className="flex-1 flex flex-col z-1">
                  {children}
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
