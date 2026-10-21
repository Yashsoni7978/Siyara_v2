import Work from '../../src/views/Work';

export const metadata = {
  title: 'Our Work & Client Showcases | Web Development & Design Jaipur',
  description: 'Explore verified digital projects and interactive showcases built by Siyara Innovations across healthcare, interior design, real estate, and small businesses.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/work',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/work',
    siteName: 'Siyara Innovations',
    title: 'Our Work & Client Showcases | Web Development & Design Jaipur',
    description: 'Explore verified digital projects and interactive showcases built by Siyara Innovations across healthcare, interior design, real estate, and small businesses.',
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
    title: 'Our Work & Client Showcases | Web Development & Design Jaipur',
    description: 'Explore verified digital projects and interactive showcases built by Siyara Innovations across healthcare, interior design, real estate, and small businesses.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function WorkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
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
