import BlogClient from './BlogClient';

export const metadata = {
  title: 'Studio Insights | Siyara · Digital Strategy, Brand & Growth Intelligence',
  description: 'Strategic perspectives on digital growth, brand positioning, search intelligence and conversion engineering from the Siyara studio.',
  alternates: {
    canonical: 'https://siyara.in/blog',
  },
};

export default function BlogListPage() {
  return <BlogClient />;
}
