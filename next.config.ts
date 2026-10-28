import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Authenticated responses must never be shared through a public cache.
  poweredByHeader: false,
};

export default nextConfig;
