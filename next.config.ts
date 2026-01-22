import type { NextConfig } from "next";

// 使用 STATIC_EXPORT 环境变量控制是否启用静态导出
// npm run build 会设置这个变量，npm run dev 不会
const enableStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  // 只在 STATIC_EXPORT=true 时启用静态导出
  ...(enableStaticExport && { output: 'export' }),
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
