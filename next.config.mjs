/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Keep '/portfolio' if deploying to minorflunky.github.io/portfolio
  basePath: '/semenov-portfolio', 
};

export default nextConfig;