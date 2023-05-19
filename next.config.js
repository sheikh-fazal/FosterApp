/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['ifa-s3-public-dev-001.s3.eu-west-2.amazonaws.com'],
},
};

module.exports = nextConfig;
