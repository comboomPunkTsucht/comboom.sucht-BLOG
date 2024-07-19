/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

let internalHost = null;

if (!isProd) {
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
    ppr:true,
  },
  images: {
    unoptimized: true,
    domains: ['cdn.idx.dev'],
  },
  assetPrefix: isProd ? null : `http://${internalHost}:3000`,
};

export default nextConfig;
