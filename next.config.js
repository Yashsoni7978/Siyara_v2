/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/our-work',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/industries',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/industries/fitness',
        destination: '/services',
        permanent: true,
      },

      {
        source: '/services/app-development',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/ai-agents',
        destination: '/services/ai-automation',
        permanent: true,
      },
      // ==========================================
      // /blog → /insights Canonical Unification
      // Eliminates duplicate content & GSC penalties
      // ==========================================
      {
        source: '/blog',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/insights/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
