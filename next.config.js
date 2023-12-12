/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://firebasestorage.googleapis.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
