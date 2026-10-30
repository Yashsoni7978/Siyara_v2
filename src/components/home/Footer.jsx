import React from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  // All 12 approved and implemented services
  const servicesLinks = [
    { name: 'Web Design & Development', href: '/services/web-design-development' },
    { name: 'Custom Next.js Development', href: '/services/web-development' },
    { name: 'SEO & GEO (AI Search)', href: '/services/seo-geo' },
    { name: 'Brand Strategy & Identity', href: '/services/brand-strategy' },
    { name: 'E-Commerce Architecture', href: '/services/ecommerce-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'UI/UX Experience Design', href: '/services/ui-ux-design' },
    { name: 'AI & Business Automation', href: '/services/ai-automation' },
    { name: 'Growth Systems Optimization', href: '/services/growth-optimization' },
    { name: 'Content & Creative Studio', href: '/services/content-creative' },
    { name: 'CRM & Lead Engine Systems', href: '/services/crm-lead-systems' },
    { name: 'Performance Marketing', href: '/services/performance-marketing' },
  ];

  // All 9 approved and implemented industry verticals
  const industryLinks = [
    { name: 'Healthcare & Clinics', href: '/industries/healthcare' },
    { name: 'Real Estate Developers', href: '/industries/real-estate' },
    { name: 'Jewellery & Luxury Goods', href: '/industries/jewellery-luxury' },
    { name: 'Interior Design & Architecture', href: '/industries/interior-design' },
    { name: 'Boutique Hotels & Resorts', href: '/industries/hospitality' },
    { name: 'Event Management & Weddings', href: '/industries/event-management' },
    { name: 'E-Commerce & Retail D2C', href: '/industries/ecommerce' },
    { name: 'Higher Education & EdTech', href: '/industries/education' },
    { name: 'Manufacturing & Industrial B2B', href: '/industries/manufacturing' },
  ];

  // Company navigation (removed duplicate 'Why Siyara' link)
  const companyLinks = [
    { name: 'About Siyara', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Selected Work', href: '/work' },
    { name: 'Insights & Engineering', href: '/insights' },
    { name: 'Contact Studio', href: '/contact' },
  ];

  // Verified strategic guides from published insights
  const resourceLinks = [
    { name: 'Website Cost in India', href: '/insights/website-development-cost-in-india-business-guide' },
    { name: 'Local SEO Guide Jaipur', href: '/insights/local-seo-guide-jaipur-businesses' },
    { name: 'High-Performance Websites', href: '/insights/what-makes-a-high-performing-website' },
    { name: 'Choosing a Design Agency', href: '/insights/how-to-choose-a-web-design-agency-in-jaipur' },
  ];

  return (
    <footer className="relative bg-[#080B0A] pt-16 sm:pt-20 pb-12 border-t border-[#19A878]/15 text-[#F3EFE4] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16 border-b border-[#19A878]/15">
          
          {/* Brand & Positioning Column (Left 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Brand Lockup */}
              <Link href="/" className="inline-flex items-center gap-1.5 mb-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878] rounded-sm">
                <span className="font-roboto text-2xl font-bold tracking-[0.2em] text-[#F3EFE4] group-hover:text-[#19A878] transition-colors">
                  SIYARA
                </span>
                <span className="text-[#19A878] text-base group-hover:rotate-45 transition-transform duration-300">
                  ✦
                </span>
              </Link>

              <p className="font-lora text-xs sm:text-sm text-[#A5B8AA] font-light leading-relaxed mb-6 max-w-sm">
                Engineering high-performance Next.js systems, local SEO, and search visibility for growing businesses.
              </p>
            </div>

            {/* Direct Enquiry Box */}
            <div className="p-4 border border-[#19A878]/25 bg-[#063C2D]/25 rounded-sm space-y-2.5">
              <div className="text-[10px] font-sans text-[#19A878] tracking-widest uppercase mb-1 font-semibold">
                Start a New Project
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-xs font-semibold text-[#F3EFE4] hover:text-[#19A878] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
              >
                <Mail className="w-3.5 h-3.5 text-[#19A878] shrink-0" />
                <span className="truncate">{siteConfig.email}</span>
                <ArrowUpRight className="w-3 h-3 text-[#19A878] ml-auto shrink-0" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Studio - Chat with Siyara Innovations"
                className="font-sans text-xs font-semibold text-[#F3EFE4] hover:text-[#19A878] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#19A878] shrink-0" />
                <span>WhatsApp Studio</span>
                <ArrowUpRight className="w-3 h-3 text-[#19A878] ml-auto shrink-0" />
              </a>
            </div>
          </div>

          {/* Navigation Columns (Right 8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* CAPABILITIES / SERVICES (All 12) */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#19A878] uppercase mb-4">
                CAPABILITIES
              </h3>
              <ul className="flex flex-col gap-2">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-[11px] text-[#A5B8AA] hover:text-[#F3EFE4] hover:translate-x-0.5 transition-all duration-200 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878] rounded-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* INDUSTRIES (All 9) */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#19A878] uppercase mb-4">
                INDUSTRIES
              </h3>
              <ul className="flex flex-col gap-2">
                {industryLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-[11px] text-[#A5B8AA] hover:text-[#F3EFE4] hover:translate-x-0.5 transition-all duration-200 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878] rounded-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#19A878] uppercase mb-4">
                COMPANY
              </h3>
              <ul className="flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#A5B8AA] hover:text-[#F3EFE4] hover:translate-x-0.5 transition-all duration-200 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878] rounded-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES & LOCATION */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#19A878] uppercase mb-4">
                RESOURCES
              </h3>
              <ul className="flex flex-col gap-2.5 mb-6">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#A5B8AA] hover:text-[#F3EFE4] hover:translate-x-0.5 transition-all duration-200 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878] rounded-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#19A878] uppercase mb-2">
                LOCATION
              </h3>
              <div className="flex items-center gap-2 text-xs font-sans text-[#A5B8AA] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#19A878] shrink-0" />
                <span>{siteConfig.location.city}, {siteConfig.location.region} · {siteConfig.location.country}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-[#A5B8AA]">
                <MessageCircle className="w-3.5 h-3.5 text-[#19A878] shrink-0" />
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#19A878] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878] rounded-sm"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#A5B8AA]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="font-roboto font-bold tracking-[0.2em] text-[#F3EFE4]">SIYARA✦</span>
            <span>© 2026 Siyara Innovations. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] tracking-wider text-[#A5B8AA]">
            <Link href="/privacy" className="hover:text-[#19A878] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#19A878] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878]">Terms of Service</Link>
            <Link href="/faq" className="hover:text-[#19A878] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878]">FAQ</Link>
            <Link href="/sitemap.xml" className="hover:text-[#19A878] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878]">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
