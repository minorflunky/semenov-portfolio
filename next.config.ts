/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export as Next.js image optimization is not supported on static hosting
  },
  // Remove or comment out the next line if deploying to minorflunky.github.io
  basePath: '/portfolio', 
};

module.exports = nextConfig;