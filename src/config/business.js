/**
 * Siyara Innovations — Canonical Business Configuration
 * Single source of truth for all business details, contact channels, location, and verified social links.
 * 
 * BUSINESS FACTS:
 * - Siyara Innovations, Jaipur, India.
 * - Services: web development, SEO, social media marketing, branding.
 * - Clients: event management, doctors and clinics, interior designers, small local businesses.
 * - Email: info@siyaradigitals.com (the only owned domain).
 * - WhatsApp-only number: +91 95872 69209 (wa.me/919587269209).
 * - Calls NOT accepted: no tel: links, no "call" wording.
 * - Socials: LinkedIn and Instagram only.
 * - Location: Jaipur, Rajasthan only. No residential street address.
 */

export const BUSINESS_CONFIG = {
  name: 'Siyara Innovations',
  legalName: 'Siyara Innovations',
  url: 'https://www.siyaradigitals.com',
  domain: 'siyaradigitals.com',
  email: 'info@siyaradigitals.com',
  whatsappNumber: '919587269209',
  whatsappFormatted: '+91 95872 69209',
  whatsappUrl: 'https://wa.me/919587269209?text=Hello%20Siyara%20Innovations%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business.',
  location: {
    city: 'Jaipur',
    region: 'Rajasthan',
    country: 'India',
    countryCode: 'IN',
    displayName: 'Jaipur, Rajasthan',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/company/siyarainnovations/',
    instagram: 'https://www.instagram.com/siyarainnovations/',
  },
  services: [
    { name: 'Web Development', slug: 'web-development', href: '/services/web-development' },
    { name: 'Search Engine Optimization', slug: 'seo', href: '/services/seo' },
    { name: 'Social Media Marketing', slug: 'social-media', href: '/services/social-media' },
    { name: 'Branding & Identity', slug: 'branding', href: '/services/branding' },
  ],
  niches: [
    { name: 'Healthcare & Clinics', slug: 'healthcare', href: '/industries/healthcare' },
    { name: 'Real Estate & Builders', slug: 'real-estate', href: '/industries/real-estate' },
    { name: 'Interior Designers', slug: 'interior-design', href: '/industries/interior-design' },
    { name: 'Event Management', slug: 'event-management', href: '/industries/event-management' },
  ],
};

export const businessConfig = BUSINESS_CONFIG;
export default BUSINESS_CONFIG;
