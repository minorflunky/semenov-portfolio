// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Keep basePath if deploying to minorflunky.github.io/portfolio
  basePath: '/portfolio', 
};

export default nextConfig;