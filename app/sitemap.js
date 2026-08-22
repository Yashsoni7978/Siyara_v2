import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../src/data/blogArticles';

export default async function sitemap() {
  const baseUrl = 'https://siyara.in';

  // Base routes
  const routes = ['', '/about', '/services', '/contact', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  const blogRoutes = allArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
