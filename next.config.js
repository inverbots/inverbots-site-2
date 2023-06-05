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
  },
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: 'https://script.google.com/macros/u/1/s/AKfycbwR0Wmj68xM8krCP8GwMNvrLt_K8WP_nbyga_ZEi2UjlLbibagZPo7UnMVRNUkCJQn_HQ/exec/:path*'
      }
    ]
  }
}

module.exports = nextConfig
