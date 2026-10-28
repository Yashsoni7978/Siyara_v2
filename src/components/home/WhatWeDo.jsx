'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Code2, Search, Megaphone, Sparkles, TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhatWeDo() {
  const services = [
    {
      id: '01',
      title: 'BRAND STRATEGY & IDENTITY',
      subtitle: 'Positioning, naming, visual identity, messaging',
      href: '/services/brand-strategy',
      icon: Edit3,
      isDark: true,
      image: '/images/services/service_brand_identity.webp',
      imageAlt: 'Premium luxury branding stationery with gold monogram foil',
    },
    {
      id: '02',
      title: 'WEBSITE DESIGN & DEVELOPMENT (JAIPUR)',
      subtitle: 'Websites and web applications built for speed and conversion',
      href: '/services/web-design-development',
      icon: Code2,
      isDark: false,
      image: '/images/services/service_web_dev.webp',
      imageAlt: 'Modern web design interface on desktop display',
    },
    {
      id: '03',
      title: 'SEO & GEO OPTIMIZATION',
      subtitle: 'Search visibility across Google and AI answer engines',
      href: '/services/seo-geo',
      icon: Search,
      isDark: true,
      image: '/images/services/service_seo_geo.webp',
      imageAlt: 'Search and discovery visual metaphor on dark slate texture',
    },
    {
      id: '04',
      title: 'DIGITAL MARKETING & GROWTH',
      subtitle: 'Paid media, social, and performance marketing',
      href: '/services/performance-marketing',
      icon: Megaphone,
      isDark: false,
      image: '/images/services/service_digital_marketing.webp',
      imageAlt: 'Smartphone on creative workspace displaying digital campaign feed',
    },
    {
      id: '05',
      title: 'AI & BUSINESS AUTOMATION',
      subtitle: 'Intelligent workflows that replace manual ops',
      href: '/services/ai-automation',
      icon: Sparkles,
      isDark: true,
      image: '/images/services/service_ai_automation.webp',
      imageAlt: 'Sculptural 3D fluid architectural ribbons representing intelligent automation',
    },
    {
      id: '06',
      title: 'GROWTH SYSTEMS & CRO',
      subtitle: 'Analytics, conversion optimization, scalable growth',
      href: '/services/crm-lead-systems',
      icon: TrendingUp,
      isDark: false,
      image: '/images/services/service_growth_cro.webp',
      imageAlt: '3D bar chart with upward green growth arrow on marble pedestal',
    },
  ];

  return (
    <section
      id="services"
      aria-label="Siyara Innovations Services and Disciplines"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#070A09] text-[#F3EFE4] overflow-hidden border-t border-[#D9B45F]/15"
    >
      {/* Background Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06261D]/50 via-[#070A09] to-[#070A09] opacity-90 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.16) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Introduction: Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-18 lg:mb-20">
          {/* Left Column: Tag and Large Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7"
          >
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#19A878] uppercase">
                OUR SERVICES
              </span>
              <span className="w-10 sm:w-14 h-[1px] bg-[#19A878]/60 inline-block" />
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[64px] text-[#F3EFE4] font-normal leading-[1.08] tracking-tight">
              One connected system,<br />
              eight disciplines<br />
              working <span className="text-[#19A878]">together.</span>
            </h2>
          </motion.div>

          {/* Right Column: Supporting Description and Minimal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-end lg:items-start space-y-6"
          >
            <p className="font-sans text-xs sm:text-sm text-[#A5B8AA] font-light leading-relaxed max-w-md">
              Siyara Innovations brings strategy, creativity and technology together to help businesses build stronger brands, better digital experiences and measurable growth.
            </p>

            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#19A878]/45 hover:border-[#19A878] text-[#F3EFE4] hover:bg-[#19A878]/10 text-xs font-sans font-medium tracking-[0.18em] uppercase transition-all duration-200 group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#19A878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual Service Grid: 3 Columns x 2 Rows Desktop, Responsive Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDark = service.isDark;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '60px 0px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={service.href}
                  aria-label={`Explore ${service.title}`}
                  className="block group h-full focus:outline-none focus:ring-1 focus:ring-[#19A878] rounded-2xl"
                >
                  <div
                    className={`relative rounded-2xl sm:rounded-[22px] overflow-hidden p-6 sm:p-7 flex flex-col justify-between h-[280px] sm:h-[300px] lg:h-[290px] xl:h-[310px] transition-all duration-300 border ${
                      isDark
                        ? 'bg-[#061B14] border-[#19A878]/25 hover:border-[#19A878]/60 shadow-[0_12px_32px_rgba(0,0,0,0.4)]'
                        : 'bg-[#F3EFE4] border-[#E5E0D2] hover:border-[#063C2D]/50 shadow-[0_12px_32px_rgba(0,0,0,0.15)]'
                    }`}
                  >
                    {/* Right-Hand Asymmetric Artwork Container */}
                    <div className="absolute right-0 top-0 bottom-0 w-[46%] sm:w-[48%] overflow-hidden pointer-events-none select-none">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        className="object-cover object-left group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Smooth Left Gradient Blend */}
                      <div
                        className={`absolute inset-0 pointer-events-none ${
                          isDark
                            ? 'bg-gradient-to-r from-[#061B14] via-[#061B14]/40 to-transparent'
                            : 'bg-gradient-to-r from-[#F3EFE4] via-[#F3EFE4]/35 to-transparent'
                        }`}
                      />
                    </div>

                    {/* Top Row: Service Number and Circular Icon */}
                    <div className="relative z-10 flex items-center gap-3">
                      <span
                        className={`text-xs font-sans font-medium tracking-[0.24em] ${
                          isDark ? 'text-[#19A878]' : 'text-[#080B0A]/60'
                        }`}
                      >
                        {service.id}
                      </span>

                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                          isDark
                            ? 'border border-[#19A878]/40 bg-[#063C2D]/60 text-[#19A878]'
                            : 'border border-[#080B0A]/15 bg-[#080B0A] text-[#F3EFE4]'
                        }`}
                      >
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Middle Content: Service Title and Description */}
                    <div className="relative z-10 max-w-[62%] sm:max-w-[58%] my-auto pr-2">
                      <h3
                        className={`font-serif text-lg sm:text-[19px] lg:text-[18px] xl:text-[20px] font-normal tracking-wide uppercase leading-snug transition-colors duration-200 ${
                          isDark
                            ? 'text-[#F3EFE4] group-hover:text-white'
                            : 'text-[#080B0A] group-hover:text-black'
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`font-sans text-[11px] sm:text-xs font-light leading-relaxed mt-2 line-clamp-3 ${
                          isDark ? 'text-[#A5B8AA]' : 'text-[#101613]/70'
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row: Minimal Circular Arrow Control */}
                    <div className="relative z-10">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isDark
                            ? 'border border-white/20 text-[#F3EFE4] group-hover:border-[#19A878] group-hover:text-[#19A878] group-hover:bg-[#19A878]/10'
                            : 'border border-[#080B0A]/20 text-[#080B0A] group-hover:border-[#080B0A] group-hover:bg-[#080B0A]/5'
                        }`}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
