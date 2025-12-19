import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jcarmall.r2.orpad.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
