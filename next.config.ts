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
        hostname: "sdepasczvfemrliuatcb.supabase.co",
        protocol: "https",
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "access-control-allow-origin",
            value: "*",
          },
          {
            key: "access-control-allow-credentials",
            value: "true",
          },
          {
            key: "access-control-allow-headers",
            value: "Content-Type, Authorization, X-Requested-With, Accept, Origin, X-CSRF-Token",
          },
          {
            key: "access-control-allow-methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },

        ],
      },
    ];
  }
};

export default nextConfig;
