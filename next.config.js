/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    domains: ['inverbots.com'],
    headers: [
      {
        key: 'Access-Control-Allow-Origin',
        value: 'https://inverbots-site-2.vercel.app'
      },
      {
        key: 'Access-Control-Allow-Origin',
        value: 'http://localhost:3000/'
      }
    ]
  }
}

module.exports = nextConfig
