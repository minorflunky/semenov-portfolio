/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/semenov-portfolio",
  assetPrefix: "/semenov-portfolio",
};

export default nextConfig;

