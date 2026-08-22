import About from '../../src/views/About';

export const metadata = {
  title: 'About Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
  description: 'Siyara is a digital architecture studio based in Jaipur. We combine creativity, technology and strategy to build connected digital systems for ambitious businesses.',
  alternates: {
    canonical: 'https://siyara.in/about',
  },
};

export default function AboutPage() {
  return <About />;
}
