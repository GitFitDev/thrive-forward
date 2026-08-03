//@ts-check

const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
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
