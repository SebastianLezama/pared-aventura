import { pattern } from "motion/react-client";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https",
      },
      {
        hostname: "zaixtvloxvtlauxdlrhg.supabase.co",
        protocol: "https",
      }
    ],
  },
};

export default nextConfig;
