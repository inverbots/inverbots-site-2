/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    domains: ['inverbots.com']
  },
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: 'https://inverbots.com/wp-json/wp/v2/publicaciones:path*'
      }
    ]
  }

}

module.exports = nextConfig
