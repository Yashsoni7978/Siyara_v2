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
        source: '/industries/hospitality',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/ui-ux-design',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/ai-agents',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/blog/what-high-performing-websites-have-in-common',
        destination: '/blog/what-makes-a-high-performing-website',
        permanent: true,
      },
      {
        source: '/blog/how-to-choose-web-development-company',
        destination: '/blog/how-to-choose-a-web-design-agency-in-jaipur',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
