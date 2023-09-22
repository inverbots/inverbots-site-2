/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    domains: ['inverbots.com', 'images.unsplash.com', 'administrador.inverbots.com', 'secure.gravatar.com'],
    headers: [
      {
        key: 'Access-Control-Allow-Origin',
        value: '*',
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://Inverbots.us19.list-manage.com/api/:path*',
      },
    ];
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
