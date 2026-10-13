import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for full-width header photos so they stay as crisp as possible.
    qualities: [75, 90],
  },
};

export default nextConfig;
