import About from '../../src/views/About';

export const metadata = {
  title: 'About Our Digital Studio Jaipur',
  description: 'Learn how Siyara Innovations engineers connected Next.js websites, local SEO, and brand identity systems for businesses in Jaipur, Rajasthan.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/about',
    siteName: 'Siyara Innovations',
    title: 'About Our Digital Studio Jaipur | Siyara Innovations',
    description: 'Learn how Siyara Innovations engineers connected Next.js websites, local SEO, and brand identity systems for businesses in Jaipur, Rajasthan.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'About Siyara Innovations · Digital Studio in Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Digital Studio Jaipur | Siyara Innovations',
    description: 'Learn how Siyara Innovations engineers connected Next.js websites, local SEO, and brand identity systems for businesses in Jaipur, Rajasthan.',
    images: ['https://www.siyaradigitals.com/images/siyaradigitals_og_image.png'],
  },
};

export default function AboutPage() {
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
        'name': 'About',
        'item': 'https://www.siyaradigitals.com/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
