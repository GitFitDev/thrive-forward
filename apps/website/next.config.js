//@ts-check

const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@org/components'],
  poweredByHeader: false,
  turbopack: {
    root: path.resolve(__dirname, '../..'),
  },
};

module.exports = nextConfig;
