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
        src: '/pictures/logo.PNG',
        sizes: 'any',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: '/pictures/logo.PNG',
        sizes: 'any',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: '/pictures/logo.PNG',
        sizes: 'any',
        type: 'image/png',
      }
    ],
  }
}
