import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Keep this line only if deploying to minorflunky.github.io/portfolio
  basePath: "/semenov-portfolio", 
};

export default nextConfig;