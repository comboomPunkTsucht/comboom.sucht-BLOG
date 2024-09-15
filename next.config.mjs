import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  onDemandEntries: {
    maxInactiveAge: 24 * 60 * 60 * 1000,
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
    turbo: {
      moduleIdStrategy: 'deterministic',
      resolveExtensions: [
        '.md',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
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

    HOST_URL: process.env.HOST_URL,

    FLAGS_SECRET: process.env.FLAGS_SECRET,
  },
  async redirects() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
        permanent: true,
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },
      {
        source: '/admin.html',
        destination: '/admin/index.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;