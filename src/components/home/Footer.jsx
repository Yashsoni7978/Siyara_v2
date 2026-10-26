import React from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const servicesLinks = [
    { name: 'Web Design & Development', href: '/services/web-design-development' },
    { name: 'Branding & Identity', href: '/services/brand-strategy' },
    { name: 'SEO & GEO Optimization', href: '/services/seo-geo' },
    { name: 'Performance Marketing', href: '/services/performance-marketing' },
    { name: 'AI & Business Automation', href: '/services/ai-automation' },
    { name: 'Digital Growth Systems', href: '/services/growth-optimization' },
  ];

  const industryLinks = [
    { name: 'Doctors & Clinics', href: '/industries/healthcare' },
    { name: 'Real Estate Developers', href: '/industries/real-estate' },
    { name: 'Jewellery & Luxury', href: '/industries/jewellery-luxury' },
    { name: 'Interior Designers', href: '/industries/interior-design' },
    { name: 'Boutique Hotels & Resorts', href: '/industries/hospitality' },
    { name: 'Event Management', href: '/industries/event-management' },
    { name: 'E-Commerce & Retail', href: '/industries/ecommerce' },
  ];

  const companyLinks = [
    { name: 'About Siyara', href: '/about' },
    { name: 'Why Siyara', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Blog & Insights', href: '/insights' },
    { name: 'Contact Studio', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Website Cost in India', href: '/insights/website-development-cost-in-india-business-guide' },
    { name: 'Local SEO Guide Jaipur', href: '/insights/local-seo-guide-jaipur-businesses' },
    { name: 'High-Performance Websites', href: '/insights/what-makes-a-high-performing-website' },
    { name: 'Choosing an Agency', href: '/insights/how-to-choose-a-web-design-agency-in-jaipur' },
  ];

  return (
    <footer className="relative bg-[#070A09] pt-16 sm:pt-20 pb-12 border-t border-[#D9B45F]/15 text-[#F3EFE3] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16 border-b border-[#D9B45F]/15">
          
          {/* Brand & Positioning Column (Left 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Brand Lockup */}
              <Link href="/" className="inline-flex items-center gap-1.5 mb-4 group focus:outline-none">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors">
                  SIYARA
                </span>
                <span className="text-[#D9B45F] text-base group-hover:rotate-45 transition-transform duration-300">
                  ✦
                </span>
              </Link>

              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-6 max-w-sm">
                A digital architecture studio building connected systems for Jaipur businesses.
              </p>
            </div>

            {/* Direct Enquiry Box */}
            <div className="p-4 border border-[#D9B45F]/30 bg-[#071E18]/40 space-y-2.5">
              <div className="text-[10px] font-sans text-[#D9B45F] tracking-widest uppercase mb-1 font-semibold">
                Start a New Project
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-xs font-semibold text-[#F3EFE3] hover:text-[#D9B45F] transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9B45F]" />
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="w-3 h-3 text-[#D9B45F] ml-auto" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="font-sans text-xs font-semibold text-[#F3EFE3] hover:text-[#D9B45F] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D9B45F]" />
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-3 h-3 text-[#D9B45F] ml-auto" />
              </a>
            </div>
          </div>

          {/* Navigation Columns (Right 8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* CAPABILITIES */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-5">
                CAPABILITIES
              </h3>
              <ul className="flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#9D9B91] hover:text-[#F3EFE3] hover:translate-x-0.5 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-5">
                INDUSTRIES
              </h3>
              <ul className="flex flex-col gap-3">
                {industryLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#9D9B91] hover:text-[#F3EFE3] hover:translate-x-0.5 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-5">
                COMPANY
              </h3>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#9D9B91] hover:text-[#F3EFE3] hover:translate-x-0.5 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* GUIDES & CONTACT */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-5">
                RESOURCES
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#9D9B91] hover:text-[#F3EFE3] hover:translate-x-0.5 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-2">
                LOCATION
              </h3>
              <div className="flex items-center gap-2 text-xs font-sans text-[#9D9B91] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9B45F]" />
                <span>Jaipur, Rajasthan · India</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-[#9D9B91]">
                <MessageCircle className="w-3.5 h-3.5 text-[#D9B45F]" />
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9B45F] transition-colors"
                >
                  WhatsApp: +91 95872 69209
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#9D9B91]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="font-serif font-bold tracking-[0.2em] text-[#F3EFE3]">SIYARA✦</span>
            <span>© 2026 Siyara. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] tracking-wider text-[#9D9B91]">
            <Link href="/privacy" className="hover:text-[#D9B45F] transition-colors py-1">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D9B45F] transition-colors py-1">Terms of Service</Link>
            <Link href="/faq" className="hover:text-[#D9B45F] transition-colors py-1">FAQ</Link>
            <Link href="/sitemap.xml" className="hover:text-[#D9B45F] transition-colors py-1">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
