import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  // ADD THESE LINES FOR GITHUB PAGES:
  output: 'export',  // This is required for static export
  trailingSlash: true,
  images: {
    unoptimized: true  // Required for static export
  },
  basePath: '/codewave', // Replace with your repository name
};

export default nextConfig;