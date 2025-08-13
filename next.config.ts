import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.springernature.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'life.tsinghua.edu.cn',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
