/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    domains: ['inverbots.com', 'images.unsplash.com', 'administrador.inverbots.com'],
    headers: [
      {
        key: 'Access-Control-Allow-Origin',
        value: 'https://inverbots-site-2.vercel.app'
      },
      {
        key: 'Access-Control-Allow-Origin',
        value: 'http://localhost:3000'
      },
      {
        key: 'Access-Control-Allow-Origin',
        value: 'https://inverbots.com'
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
}

module.exports = nextConfig
