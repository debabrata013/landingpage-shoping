import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/landingpage-shoping',
  assetPrefix: '/landingpage-shoping',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
