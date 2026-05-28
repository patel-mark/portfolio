/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint:{
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ["assets.aceternity.com"], // Add the hostname here
    },
  };;

export default nextConfig;

  