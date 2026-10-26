import Contact from '../../src/views/Contact';

export const metadata = {
  title: 'Contact Web Design Studio Jaipur',
  description: 'Connect with Siyara Innovations via WhatsApp or email. Start your web design, local SEO, or brand architecture project with our Jaipur studio.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/contact',
    siteName: 'Siyara Innovations',
    title: 'Contact Web Design Studio Jaipur | Siyara Innovations',
    description: 'Connect with Siyara Innovations via WhatsApp or email. Start your web design, local SEO, or brand architecture project with our Jaipur studio.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Siyara Innovations · Digital Marketing & Web Design Studio in Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Web Design Studio Jaipur | Siyara Innovations',
    description: 'Connect with Siyara Innovations via WhatsApp or email. Start your web design, local SEO, or brand architecture project with our Jaipur studio.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function ContactPage() {
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
        'name': 'Contact',
        'item': 'https://www.siyaradigitals.com/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Contact />
    </>
  );
}
