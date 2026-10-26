export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'PerplexityBot', 'ClaudeBot', 'Applebot'],
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: 'https://www.siyaradigitals.com/sitemap.xml',
    host: 'https://www.siyaradigitals.com',
  };
}
