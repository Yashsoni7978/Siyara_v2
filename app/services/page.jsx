import Services from '../../src/views/Services';

export const metadata = {
  title: 'Digital Marketing, Web Development & SEO Services Jaipur | Siyara',
  description: 'Explore Siyara’s core services: custom web development, search engine optimization (SEO), social media marketing, and brand identity in Jaipur, India.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/services',
    siteName: 'Siyara Innovations',
    title: 'Digital Marketing, Web Development & SEO Services Jaipur | Siyara',
    description: 'Explore Siyara’s core services: custom web development, search engine optimization (SEO), social media marketing, and brand identity in Jaipur, India.',
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
    title: 'Digital Marketing, Web Development & SEO Services Jaipur | Siyara',
    description: 'Explore Siyara’s core services: custom web development, search engine optimization (SEO), social media marketing, and brand identity in Jaipur, India.',
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
