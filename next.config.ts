import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
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
  // 如果你的网站不是部署在根目录，可以设置 basePath
  // basePath: '/your-subdirectory',

  // 如果需要尾部斜杠，可以设置
  // trailingSlash: true,
};

export default nextConfig;
