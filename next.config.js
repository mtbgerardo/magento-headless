/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      MAGENTO_ENDPOINT: process.env.MAGENTO_ENDPOINT,
    },
    reactStrictMode: true,
  };
module.exports = nextConfig;
