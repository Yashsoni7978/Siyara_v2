import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../src/data/blogArticles';

export const dynamic = "force-static";

export default async function sitemap() {
  const baseUrl = 'https://www.siyaradigitals.com';

  // Base routes
  const routes = ['', '/about', '/services', '/work', '/contact', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : (route === '/work' ? 0.9 : 0.8),
  }));

  // Legal and Resource routes
  const legalRoutes = ['/faq', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // Industry vertical routes
  const industryRoutes = [
    '/industries/healthcare',
    '/industries/real-estate',
    '/industries/interior-design',
    '/industries/event-management',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic blog routes
  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  const blogRoutes = allArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...industryRoutes, ...legalRoutes, ...blogRoutes];
}
