/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['inverbots.com', 'images.unsplash.com', 'inverbots.xyz', 'secure.gravatar.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://Inverbots.us19.list-manage.com/api/:path*',
      },
    ];
  }
}

module.exports = nextConfig
