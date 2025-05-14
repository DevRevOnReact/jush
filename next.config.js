/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HUBSPOT_API_URL: "https://pback5-479789841998.us-central1.run.app",
    NEXT_PUBLIC_API_URL: "https://playful-boba-c760ca.netlify.app",
    HUBSPOT_API_KEY: "pat-eu1-1234567890abcdef"
  },
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
