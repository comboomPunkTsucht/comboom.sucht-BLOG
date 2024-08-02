"use server"
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