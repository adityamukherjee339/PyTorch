import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Next.js requires turning off image optimization when exporting static sites
  images: { unoptimized: true },
};

export default nextConfig;
