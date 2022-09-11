/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["variety.com", "images.unsplash.com", "imgur.com"],
  },
};

module.exports = nextConfig;
