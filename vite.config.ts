import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";
import richSvg from "vite-plugin-react-rich-svg";
import liveReload from 'vite-plugin-live-reload'
import { qrcode } from 'vite-plugin-qrcode';
import AutoImport from 'unplugin-auto-import/vite'
import ViteRestart from 'vite-plugin-restart'
//import biomePlugin from 'vite-plugin-biome'
import { VitePWA } from 'vite-plugin-pwa'

import { wrapVinxiConfigWithSentry } from '@sentry/tanstackstart-react'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    viteReact(),
    cloudflare(
      { viteEnvironment:{name: "ssr"}, persistState: true, },
    ),
    richSvg(),
    qrcode(),
    liveReload("@/{routs,components,lib,app,data,hooks}/**/*.{js,ts,jsx,tsx}"),
    AutoImport({}),
    ViteRestart({
      restart: ['@/assets/**/*', './assets/**/*' ],
    }),
    //biomePlugin({
    //  mode: 'check',
    //  applyFixes: true
    //}),
    VitePWA()
  ],
})

export default wrapVinxiConfigWithSentry(config, {
  org: process.env.VITE_SENTRY_ORG,
  project: process.env.VITE_SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,
})
