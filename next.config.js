/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // This allows wouter to work properly with Next.js by providing location polyfill
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "url": require.resolve("url/"),
    };
    
    return config;
  }
};

module.exports = nextConfig;
