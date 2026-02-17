import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.fineartamerica.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.gimlivingspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
