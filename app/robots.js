export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://siyara.in/sitemap.xml',
  };
}
