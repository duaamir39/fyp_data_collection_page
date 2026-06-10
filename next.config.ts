import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensure we can deploy on static/server environments seamlessly
};

export default nextConfig;
