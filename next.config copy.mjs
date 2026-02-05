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
    ],
  },
};

export default nextConfig;
