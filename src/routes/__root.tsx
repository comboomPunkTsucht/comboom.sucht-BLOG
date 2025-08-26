import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'
import Particles from "@/components/Particles.tsx";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'comboom.sucht Streaming-Overlay',
      },
      {
        short_name: 'CBPS Streaming-Overlay',
      },
      {
        name: 'description',
        content: 'A Streamelements streaming overlay by comboom.sucht',
      },
      {
        name: 'theme-color',
        content: '#2E3440',
      },

      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#2E3440',
      },

    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
        content_type: 'application/manifest+json'
      }
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-DE">
    <head>
      <HeadContent />
    </head>
    <body>
    <div className="">
      <Particles quantity={400} refresh={true} />
      <div className="z-1">
        <Header />
        {children}
        <TanStackRouterDevtools />
        <Scripts />
      </div>
    </div>
    </body>
    </html>
  )
}
