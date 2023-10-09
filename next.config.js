/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nuts.themerex.net",
      },
    ],
  },
};

module.exports = nextConfig;
