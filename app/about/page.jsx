import About from '../../src/views/About';

export const metadata = {
  title: 'About Siyara Innovations | Digital Agency in Jaipur, Rajasthan',
  description: 'Siyara Innovations is a digital marketing, web design, and branding agency rooted in Jaipur, Rajasthan. We build connected growth systems for local businesses.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/about',
    siteName: 'Siyara Innovations',
    title: 'About Siyara Innovations | Digital Agency in Jaipur, Rajasthan',
    description: 'Siyara Innovations is a digital marketing, web design, and branding agency rooted in Jaipur, Rajasthan. We build connected growth systems for local businesses.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'About Siyara Innovations · Digital Agency in Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Siyara Innovations | Digital Agency in Jaipur, Rajasthan',
    description: 'Siyara Innovations is a digital marketing, web design, and branding agency rooted in Jaipur, Rajasthan. We build connected growth systems for local businesses.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
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
