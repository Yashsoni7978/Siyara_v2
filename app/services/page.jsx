import Services from '../../src/views/Services';

export const metadata = {
  title: 'Web Design & SEO Services Jaipur',
  description: 'Explore Siyara Innovations services: custom Next.js web development, local SEO, social media marketing, and brand architecture in Jaipur, India.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/services',
    siteName: 'Siyara Innovations',
    title: 'Web Design & SEO Services Jaipur | Siyara Innovations',
    description: 'Explore Siyara Innovations services: custom Next.js web development, local SEO, social media marketing, and brand architecture in Jaipur, India.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Siyara Innovations Services · Web Development, SEO & Digital Marketing Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Services Jaipur | Siyara Innovations',
    description: 'Explore Siyara Innovations services: custom Next.js web development, local SEO, social media marketing, and brand architecture in Jaipur, India.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.siyaradigitals.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://www.siyaradigitals.com/services',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Web Design & Development Jaipur',
        'serviceType': 'Web Development',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Custom Next.js website design and web development for interior designers, event managers, medical clinics, and small businesses.',
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Web Solutions',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Clinic & Doctor Websites' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Interior Design Portfolios' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Event Management Platforms' } },
          ],
        },
      },
      {
        '@type': 'Service',
        'name': 'Search Engine Optimization (SEO) Jaipur',
        'serviceType': 'Search Engine Optimization',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Local SEO, Google Business Profile ranking, and technical on-page search visibility for Jaipur businesses.',
      },
      {
        '@type': 'Service',
        'name': 'Social Media Marketing Jaipur',
        'serviceType': 'Social Media Marketing',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Organic social strategy, Instagram grid architecture, content production, and community engagement for lifestyle and professional brands.',
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.siyaradigitals.com/services#catalog',
        'url': 'https://www.siyaradigitals.com/services',
        'name': 'Siyara Innovations Digital Architecture & Engineering Services Catalog',
        'description': 'Comprehensive digital architecture, Next.js engineering, Generative Engine Optimization (GEO), and brand positioning services.',
        mainEntity: {
          '@type': 'ItemList',
          name: 'Core Service Disciplines',
          numberOfItems: 11,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Custom Next.js Web Development & Engineering',
              url: 'https://www.siyaradigitals.com/services/web-design-development',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Generative Engine Optimization (GEO) & Technical SEO',
              url: 'https://www.siyaradigitals.com/services/seo-geo',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Brand Strategy & Visual Identity Architecture',
              url: 'https://www.siyaradigitals.com/services/brand-strategy',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'High-Performance E-Commerce (Headless & D2C)',
              url: 'https://www.siyaradigitals.com/services/ecommerce-development',
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Mobile Application Development (React Native & PWA)',
              url: 'https://www.siyaradigitals.com/services/mobile-app-development',
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'UI/UX Product Design & Design Systems',
              url: 'https://www.siyaradigitals.com/services/ui-ux-design',
            },
            {
              '@type': 'ListItem',
              position: 7,
              name: 'AI Business Automation & Custom CRM Workflows',
              url: 'https://www.siyaradigitals.com/services/ai-automation',
            },
            {
              '@type': 'ListItem',
              position: 8,
              name: 'Growth Systems, Paid Ads CRO & Conversion Architecture',
              url: 'https://www.siyaradigitals.com/services/growth-optimization',
            },
            {
              '@type': 'ListItem',
              position: 9,
              name: 'Creative Direction & Brand Identity Systems',
              url: 'https://www.siyaradigitals.com/services/content-creative',
            },
            {
              '@type': 'ListItem',
              position: 10,
              name: 'CRM Automation & Lead Systems',
              url: 'https://www.siyaradigitals.com/services/crm-lead-systems',
            },
            {
              '@type': 'ListItem',
              position: 11,
              name: 'Performance Marketing & Paid Acquisition',
              url: 'https://www.siyaradigitals.com/services/performance-marketing',
            },
          ],
        },
      },
      {
        '@type': 'Service',
        'name': 'Brand Strategy & Visual Identity Jaipur',
        'serviceType': 'Branding',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Brand naming, visual language, typography systems, and high-trust positioning designed to command premium pricing.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Services />
    </>
  );
}
