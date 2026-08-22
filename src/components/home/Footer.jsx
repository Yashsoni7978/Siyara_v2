import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
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
    { name: 'Our Work', href: '/#work' },
    { name: 'Our Process', href: '/#process' },
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Case Studies', href: '/#work' },
    { name: 'Studio Insights', href: '/blog' },
    { name: 'FAQ', href: '/#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="relative bg-[#070A09] pt-20 pb-12 border-t border-[#D9B45F]/15 text-[#F3EFE3] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#D9B45F]/15">
          
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
                A digital architecture studio building connected systems for ambitious businesses.
              </p>
            </div>

            {/* Direct Enquiry Box */}
            <div className="p-4 border border-[#D9B45F]/30 bg-[#071E18]/40">
              <div className="text-[10px] font-mono text-[#D9B45F] tracking-widest uppercase mb-1 font-semibold">
                Start a New Project
              </div>
              <a
                href="mailto:hello@siyara.dev"
                className="font-sans text-xs font-semibold text-[#F3EFE3] hover:text-[#D9B45F] transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9B45F]" />
                <span>hello@siyara.dev</span>
                <ArrowUpRight className="w-3 h-3 text-[#D9B45F] ml-auto" />
              </a>
            </div>
          </div>

          {/* Navigation Columns (Right 8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* SERVICES */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-5">
                CAPABILITIES
              </h4>
              <ul className="flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#9D9B91] hover:text-[#F3EFE3] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-5">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#9D9B91] hover:text-[#F3EFE3] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES & CONTACT */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-5">
                RESOURCES
              </h4>
              <ul className="flex flex-col gap-3 mb-8">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-xs text-[#9D9B91] hover:text-[#F3EFE3] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-[#D9B45F] uppercase mb-3">
                LOCATION
              </h4>
              <div className="flex items-center gap-2 text-xs font-sans text-[#9D9B91]">
                <MapPin className="w-3.5 h-3.5 text-[#D9B45F]" />
                <span>Jaipur, Rajasthan · India</span>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#9D9B91]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold tracking-[0.2em] text-[#F3EFE3]">SIYARA✦</span>
            <span>© 2026 Siyara. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider text-[#9D9B91]">
            <Link href="#" className="hover:text-[#D9B45F] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#D9B45F] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#D9B45F] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
