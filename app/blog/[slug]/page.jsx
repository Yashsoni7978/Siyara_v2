// app/blog/[slug]/page.jsx
// All /blog/[slug] routes are permanently redirected → /insights/[slug] via next.config.js
// This file stops Next.js from statically pre-rendering 25 duplicate article pages.
import { redirect } from 'next/navigation';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../../src/data/blogArticles';

// Return empty params list so Next.js does NOT generate /blog/[slug] static pages
export async function generateStaticParams() {
  return [];
}

export const metadata = {
  robots: 'noindex, nofollow',
};

export default async function BlogSlugRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/insights/${slug}`);
}
