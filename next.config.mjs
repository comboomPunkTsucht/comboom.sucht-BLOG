/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 24 * 60 * 60 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 16,
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
  reactStrictMode: false,
  experimental: {
    typedRoutes: false,
    ppr: true,
    reactCompiler: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'cdn.idx.dev',
      'dev.comboompunksucht.app',
      'comboompunksucht.app',
      'assets.tina.io',
    ],
  },
  assetPrefix: isProd ? process.env.HOST_URL : `http://localhost:3000`,
  env: {
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_MGMT_API_ACCESS_TOKEN: process.env.AUTH0_MGMT_API_ACCESS_TOKEN,
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,

    NEXT_PUBLIC_TINA_CLIENT_ID: process.env.NEXT_PUBLIC_TINA_CLIENT,
    TINA_TOKEN: process.env.TINA_TOKEN,
    TINA_SEARCH_TOKEN: process.env.TINA_SEARCH_TOKEN,
  },
};

console.log("assetPrefix:", nextConfig.assetPrefix);

export default nextConfig;