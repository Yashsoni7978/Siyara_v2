/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
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
      // 1. Featured article old slug redirect (Task 3)
      {
        source: '/insights/new-digital-ecosystem-strategy-technology-growth',
        destination: '/insights/new-digital-growth-strategy-technology',
        permanent: true,
      },
      // 2. Hospitality industry redirect (Task 3 & Ground Truth 4)
      {
        source: '/industries/hospitality',
        destination: '/industries',
        permanent: true,
      },
      // 3. Four approved consolidation redirects (Task 3)
      {
        source: '/insights/seo-geo-search-visibility-prepare-for-ai-search',
        destination: '/insights/how-to-rank-chatgpt-perplexity-india',
        permanent: true,
      },
      {
        source: '/insights/what-makes-a-high-performing-website',
        destination: '/insights/why-your-jaipur-business-needs-a-professional-website-in-2026',
        permanent: true,
      },
      {
        source: '/insights/what-is-digital-architecture',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/insights/how-to-choose-digital-architecture-studio-rajasthan',
        destination: '/insights/how-to-choose-a-web-design-agency-in-jaipur',
        permanent: true,
      },
      // 4. Portfolio and service legacy aliases
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
        source: '/services/app-development',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/ai-agents',
        destination: '/services/ai-automation',
        permanent: true,
      },
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
      // 5. /blog -> /insights Canonical Unification
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
