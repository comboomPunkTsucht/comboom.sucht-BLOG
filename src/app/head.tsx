import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "comboom.sucht | The Mgaming Group",
  description: "web page of comboom.sucht",
  keywords: "comboom, sucht, comboom.sucht, comboompunktsucht, mcpeaps_HD, mahd, blackdragon",
  twitter: {
    card: 'summary_large_image',
    title: 'comboom.sucht | The Mgaming Group',
    description: 'web page of comboom.sucht',
    siteId: '1349452878545629186',
    creator: '@ComboomS',
    creatorId: '1349452878545629186',
    images: [{
      url: 'https://comboompunksucht.app/pictures/1024.png',
      alt: 'Logo of comboom.sucht',
      width: 1024,
      height: 1024,
    }],
  },
  openGraph: {
    type: 'website',
    title: 'comboom.sucht | The Mgaming Group',
    description: 'web page of comboom.sucht',
    url: 'https://comboompunksucht.app',
    images: [{
      url: 'https://comboompunksucht.app/pictures/1024.png',
      alt: 'Logo of comboom.sucht',
      width: 1024,
      height: 1024,
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

export default function Head() {
  return (
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
  );
}