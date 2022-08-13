/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["variety.com", "images.unsplash.com", "imgur.com"],
  },
};

module.exports = nextConfig;
