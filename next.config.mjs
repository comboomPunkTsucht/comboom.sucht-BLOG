/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'DEV';


let internalHost = null;

if (isDev) {
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
    domains: [
      'cdn.idx.dev',
      'dev.comboompunksucht.app',
      'comboompunksucht.app',
    ],
  },
  assetPrefix: !isDev ? null : `http://${internalHost}:3000`,
};

console.log("assetPrefix:", nextConfig.assetPrefix);
console.log("Next config:", nextConfig)

export default nextConfig;
