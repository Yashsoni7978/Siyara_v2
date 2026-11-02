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
        source: '/industries/fitness',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/industries/hospitality',
        destination: '/industries',
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
      // SEO Overhaul — 301 Redirects (B2)
      // ==========================================
      {
        source: '/digital-architecture-studio-jaipur',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nextjs-web-development-jaipur',
        destination: '/services/web-design-development',
        permanent: true,
      },
      {
        source: '/geo-agency-india',
        destination: '/services/seo-services',
        permanent: true,
      },
      {
        source: '/services/web-development',
        destination: '/services/web-design-development',
        permanent: true,
      },
      {
        source: '/services/seo-geo',
        destination: '/services/seo-services',
        permanent: true,
      },
      {
        source: '/services/brand-strategy',
        destination: '/services/branding',
        permanent: true,
      },
      {
        source: '/insights/best-web-design-company-jaipur',
        destination: '/insights/how-to-choose-a-web-design-agency-in-jaipur',
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
