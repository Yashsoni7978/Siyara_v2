import Contact from '../../src/views/Contact';

export const metadata = {
  title: 'Contact Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
  description: 'Start a project, book a strategy session or ask a question. Siyara is a digital architecture studio based in Jaipur, Rajasthan, working with ambitious businesses globally.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/contact',
    siteName: 'Siyara',
    title: 'Contact Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
    description: 'Start a project, book a strategy session or ask a question. Siyara is a digital architecture studio based in Jaipur, Rajasthan, working with ambitious businesses globally.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Siyara · Digital Architecture Studio',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@siyaradigital',
    title: 'Contact Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
    description: 'Start a project, book a strategy session or ask a question. Siyara is a digital architecture studio based in Jaipur, Rajasthan, working with ambitious businesses globally.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function ContactPage() {
  return <Contact />;
}
