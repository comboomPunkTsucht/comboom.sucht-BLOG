import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fabian Aps',
    short_name: 'Fabian Aps',
    description: 'my own portfolio/impressum website',
    start_url: '/',
    display: 'standalone',
    display_override: ["standalone", "window-controls-overlay"],
    background_color: '#000000',
    theme_color: '#010101',
    lang: 'de-DE',
    prefer_related_applications: false,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/pictures/1024.png',
        sizes: '1024',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/1024.png',
        sizes: '1024',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/1024.png',
        sizes: '1024',
        type: 'image/png',
      },{
        src: '/pictures/512.png',
        sizes: '512',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/512.png',
        sizes: '1024',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/512.png',
        sizes: '1024',
        type: 'image/png',
      },
      {
        src: '/pictures/256.png',
        sizes: '256',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/256.png',
        sizes: '256',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/256.png',
        sizes: '256',
        type: 'image/png',
      },
      {
        src: '/pictures/128.png',
        sizes: '128',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/128.png',
        sizes: '128',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/128.png',
        sizes: '128',
        type: 'image/png',
      },
      {
        src: '/pictures/64.png',
        sizes: '64',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/64.png',
        sizes: '64',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/64.png',
        sizes: '64',
        type: 'image/png',
      },
      {
        src: '/pictures/32.png',
        sizes: '32',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/32.png',
        sizes: '32',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/32.png',
        sizes: '32',
        type: 'image/png',
      },
      {
        src: '/pictures/16.png',
        sizes: '16',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/16.png',
        sizes: '16',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/16.png',
        sizes: '16',
        type: 'image/png',
      },
    ],
  }
}
