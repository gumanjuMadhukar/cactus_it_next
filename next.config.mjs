/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Optional: enables native View Transitions API (where supported).
    // Remove if you prefer only Framer Motion transitions.
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',  // Allow any path under the domain
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'portermetrics.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
