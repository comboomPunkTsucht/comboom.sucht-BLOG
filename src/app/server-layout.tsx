import type { Metadata } from "next";

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
      alt: 'Logo of mcpeaps_HD',
      width: 3000,
      height: 3000,
    }],
  },
  openGraph: {
    type: 'website',
    title: 'Fabian Aps Portfolio/Impressum',
    description: 'my own portfolio/impressum website',
    url: 'https://mahd.comboompunksucht.app',
    images: [{
      url: 'https://mahd.comboompunksucht.app/pictures/logo.PNG',
      alt: 'Logo of mcpeaps_HD',
      width: 3000,
      height: 3000,
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