/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/beyond-nuria-v2/',
  basePath: '/beyond-nuria-v2',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
