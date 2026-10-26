import Work from '../../src/views/Work';
import { projectsData } from '../../src/data/projectsData';

export const metadata = {
  title: 'Web Design & Digital Portfolio Jaipur',
  description: 'Explore live digital architectures, Next.js web builds, and branding systems engineered for healthcare, real estate, and retail clients in Jaipur.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/work',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/work',
    siteName: 'Siyara Innovations',
    title: 'Web Design & Digital Portfolio Jaipur | Siyara Innovations',
    description: 'Explore live digital architectures, Next.js web builds, and branding systems engineered for healthcare, real estate, and retail clients in Jaipur.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Our Work & Client Showcases · Siyara Innovations Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Digital Portfolio Jaipur | Siyara Innovations',
    description: 'Explore live digital architectures, Next.js web builds, and branding systems engineered for healthcare, real estate, and retail clients in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function WorkPage() {
  const liveShowcases = projectsData.filter((p) => p.status === 'LIVE' || p.featured).slice(0, 10);

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
            'name': 'Work',
            'item': 'https://www.siyaradigitals.com/work',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.siyaradigitals.com/work#portfolio',
        'url': 'https://www.siyaradigitals.com/work',
        'name': 'Siyara Innovations Client Portfolio & Architectural Showcases',
        'description': 'Live digital architectures, Next.js web applications, and enterprise brand systems engineered for clients in Jaipur and across India.',
        'mainEntity': {
          '@type': 'ItemList',
          'name': 'Featured Digital Architecture Projects',
          'numberOfItems': liveShowcases.length,
          'itemListElement': liveShowcases.map((project, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': project.title || project.name,
            'description': project.description || project.tagline,
            'url': project.link || `https://www.siyaradigitals.com/work#${project.slug}`,
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Work />
    </>
  );
}
