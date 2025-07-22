/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // 👈 DISABLING PWA IN DEVELOPMENT MODE
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: false, // 👈 DISABLING THIS TO AVOID DOUBLE RENDER
  images: {
    domains: ['cdn2.thecatapi.com'], // ← add your external hostname here
  },
  // Proxy API calls through Next.js to avoid CORS issues
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://danamit-auth-service.liara.run/api/:path*',
      },
    ];
  },
});

module.exports = nextConfig;
