/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // apiBaseUrl: process.env.API_BASE_URL || "http://localhost:5000",
    apiBaseUrl:
      process.env.API_BASE_URL || "https://odd-tan-elephant-gear.cyclic.app",
    // baseUrl: process.env.BASE_URL || "http://localhost:3000",
    baseUrl: process.env.BASE_URL || "https://daudweb.com",
  },
  images: {
    domains: ["s.kaskus.id"],
  },
};

module.exports = nextConfig;
