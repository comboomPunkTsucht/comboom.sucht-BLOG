/** @type {import('next').NextConfig} */
const isVercel = process.env.NODE_Vercel === 'true';
const isProd = process.env.NODE_ENV === 'PROD';

let internalHost = null;

if (!isVercel && !isProd) {
  const { internalIpV4 } = await import('internal-ip');
  internalHost = await internalIpV4();
}

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
    domains: ['cdn.idx.dev','/'],
  },
  assetPrefix: isVercel ? (!isProd ? 'https://dev.comboompunksucht.app': 'https://comboompunksucht.app') : `http://${internalHost}:3000`
};



export default nextConfig;
