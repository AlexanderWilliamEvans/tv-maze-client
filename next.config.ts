import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'static.tvmaze.com',
          port: '',
          pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.tvmaze.com',
        port: '',
        pathname: '/*',
      }
  ],
  }
};

export default nextConfig;
