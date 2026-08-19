import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleFooterLinkClick = (e, href) => {
    if (href === '/blog' || href === '#insights') {
      e.preventDefault();
      if (onNavigate) onNavigate('blog');
      window.history.pushState({}, '', '/blog');
    } else if (href === '/about' || href === '#about') {
      e.preventDefault();
      if (onNavigate) onNavigate('about');
      window.history.pushState({}, '', '/about');
    } else if (href === '/services' || href === '#services') {
      e.preventDefault();
      if (onNavigate) onNavigate('services');
      window.history.pushState({}, '', '/services');
    } else if (href === '/contact' || href === '#contact') {
      e.preventDefault();
      if (onNavigate) onNavigate('contact');
      window.history.pushState({}, '', '/contact');
    }
  };

  const servicesLinks = [
    { name: 'Web Design & Development', href: '/services' },
    { name: 'Branding & Identity', href: '/services' },
    { name: 'SEO & GEO Optimization', href: '/services' },
    { name: 'Digital Marketing', href: '/services' },
    { name: 'AI & Automation', href: '/services' },
    { name: 'Growth Systems', href: '/services' },
  ];

  const companyLinks = [
    { name: 'About Siyara', href: '/about' },
    { name: 'Why Siyara', href: '/about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Our Process', href: '#process' },
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Case Studies', href: '#work' },
    { name: 'Agency Insights', href: '/blog' },
    { name: 'FAQ', href: '#cta' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  return (
    <footer id="contact" className="relative bg-[#080B0A] border-t border-[#D4AF37]/20 pt-20 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-[#063C2D]/30 via-transparent to-transparent pointer-events-none opacity-40" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#D4AF37]/15">
          
          {/* Brand & Positioning Column (Left 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Brand Lockup */}
              <a href="#" className="inline-flex items-center gap-1.5 mb-4 group focus:outline-none">
                <span className="font-sans text-2xl font-bold tracking-[0.2em] text-[#F3EFE4] group-hover:text-[#D4AF37] transition-colors">
                  SIYARA
                </span>
                <span className="text-[#D4AF37] text-base group-hover:rotate-45 transition-transform duration-300">
                  ✦
                </span>
              </a>

              <p className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed mb-6 max-w-sm">
                We build digital experiences that drive growth, build brands and create lasting impact.
              </p>
            </div>

            {/* Direct Enquiry Box */}
            <div className="p-4 border border-[#D4AF37]/25 bg-[#063C2D]/20">
              <div className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase mb-1">
                Start a New Project
              </div>
              <a
                href="mailto:hello@siyara.dev"
                className="font-sans text-xs font-semibold text-[#F3EFE4] hover:text-[#E5C378] transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>hello@siyara.dev</span>
                <ArrowUpRight className="w-3 h-3 text-[#D4AF37] ml-auto" />
              </a>
            </div>
          </div>

          {/* Navigation Columns (Right 8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* SERVICES */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase mb-5">
                SERVICES
              </h4>
              <ul className="flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleFooterLinkClick(e, link.href)}
                      className="font-sans text-xs text-[#CFC9BB]/70 hover:text-[#F3EFE4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase mb-5">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleFooterLinkClick(e, link.href)}
                      className="font-sans text-xs text-[#CFC9BB]/70 hover:text-[#F3EFE4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES & CONTACT */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase mb-5">
                RESOURCES
              </h4>
              <ul className="flex flex-col gap-3 mb-8">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleFooterLinkClick(e, link.href)}
                      className="font-sans text-xs text-[#CFC9BB]/70 hover:text-[#F3EFE4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
                LOCATION
              </h4>
              <div className="flex items-center gap-2 text-xs font-sans text-[#CFC9BB]/70">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Digital Agency · Global Operations</span>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#CFC9BB]/60">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-[0.2em] text-[#F3EFE4]">SIYARA✦</span>
            <span>© 2026 SIYARA INNOVATIONS. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider text-[#CFC9BB]/70">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
