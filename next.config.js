/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/beyond-nuria-v2/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/beyond-nuria-v2' : '',
=======
>>>>>>> Stashed changes
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/beyond-nuria-v2/',
  basePath: '/beyond-nuria-v2',
  reactStrictMode: true,
  swcMinify: true,
<<<<<<< Updated upstream
=======
>>>>>>> origin/main
>>>>>>> Stashed changes
}

module.exports = nextConfig
