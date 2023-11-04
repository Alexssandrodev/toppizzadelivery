/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'br.freepik.com'
            },
        ],
    },
  }

module.exports = nextConfig
