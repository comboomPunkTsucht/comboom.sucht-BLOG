//app/layout.tsx
import "./globals.css";
import Particles from "@/components/particles";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Metadata } from "next";
import localFont from "next/font/local";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "comboom.sucht | The Mgaming Group",
  description: "web page of comboom.sucht",
  keywords:
    "comboom, sucht, comboom.sucht, comboompunktsucht, mcpeaps_HD, mahd, blackdragon",
  twitter: {
    card: "summary_large_image",
    title: "comboom.sucht | The Mgaming Group",
    description: "web page of comboom.sucht",
    siteId: "1349452878545629186",
    creator: "@ComboomS",
    creatorId: "1349452878545629186",
    images: [
      {
        url: `${process.env.HOST_URL || "http://localhost:3000"}/media/1024.png`,
        alt: "Logo of comboom.sucht",
        width: 1024,
        height: 1024,
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "comboom.sucht | The Mgaming Group",
    description: "web page of comboom.sucht",
    url: `${process.env.HOST_URL || "http://localhost:3000"}`,
    images: [
      {
        url: `${process.env.HOST_URL || "http://localhost:3000"}/media/1024.png`,
        alt: "Logo of comboom.sucht",
        width: 1024,
        height: 1024,
      },
    ],
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Fonts

// Konfiguration für CaskaydiaCoveNerdFontPropo
const CaskaydiaCoveNerdFontPropo = localFont({
  src: [
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-SemiLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-SemiLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-ExtraLightItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontPropo-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
});

// Konfiguration für CaskaydiaCoveNerdFontMono
const CaskaydiaCoveNerdFontMono = localFont({
  src: [
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-SemiLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFontMono-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
});

// Konfiguration für CaskaydiaCoveNerdFont
const CaskaydiaCoveNerdFont = localFont({
  src: [
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-SemiLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-SemiLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-ExtraLightItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CaskaydiaCoveNerdFont-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
});

// No need to export metadata here as it's already imported

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const values = { exampleFlag: true, log_metadata: false };
  if (values.log_metadata) {
    console.log("metadata: " + metadata);
  }
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#010101" />
        <meta
          name="start_url"
          content={`${process.env.HOST_URL || "http://localhost:3000"}`}
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="#010101" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="comboom.sucht | The Mgaming Group"
        />
        <meta name="application-name" content="comboom.sucht" />
        <meta name="msapplication-TileColor" content="#010101" />
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <meta
          name="keywords"
          content="comboom, sucht, comboom.sucht, comboompunktsucht, mcpeaps_HD, mahd, blackdragon"
        />
        <meta
          name="format-detection"
          content="telephone=yes, date=no, email=yes, address=yes"
        />
      </head>
      <body className={cn("")}>
        <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background">
              <Particles quantity={400} refresh={true} />
              <div className="z-1 flex flex-1 flex-col">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
