"use client";  // Ensure you are using client-side rendering

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Particles from '@/components/particles';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { FlagValues } from '@vercel/flags/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from './head';

// No need to export metadata here as it's already imported

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const values = { exampleFlag: true };

  return (
    <html lang="de" suppressHydrationWarning>
      <Head />
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