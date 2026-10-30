'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  TrendingUp,
  Sparkles,
  Code2,
  Search,
  Megaphone,
  Bot,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion();

  // The 6 official core services with exact required copy and mapped luxury artwork
  const services = [
    {
      id: '01',
      title: 'Growth Systems & CRO',
      description:
        'Data-driven strategy, analytics and conversion optimization to turn more traffic into real business results.',
      href: '/services/crm-lead-systems',
      icon: TrendingUp,
      isDark: false, // Light Ivory Card
      image: '/images/services/service-growth-systems.webp',
      imageAlt: 'Luxury marble plinth with green marble growth chart and golden upward arrow',
      objectPosition: 'object-[75%_center] sm:object-[70%_bottom] lg:object-right-bottom',
      overlayGradient:
        'linear-gradient(180deg, rgba(243, 239, 228, 0.35) 0%, rgba(243, 239, 228, 0.10) 25%, rgba(243, 239, 228, 0.70) 52%, rgba(243, 239, 228, 0.94) 74%, #F3EFE4 100%)',
    },
    {
      id: '02',
      title: 'Brand Strategy & Identity',
      description:
        'Positioning, naming, visual identity and messaging that create brands people remember.',
      href: '/services/brand-strategy',
      icon: Sparkles,
      isDark: true, // Dark Emerald Card
      image: '/images/services/service-brand-strategy.webp',
      imageAlt: 'Luxury emerald green leather brand book, gold monogram and bespoke stationery',
      objectPosition: 'object-[75%_center] sm:object-right',
      overlayGradient:
        'linear-gradient(180deg, rgba(6, 26, 19, 0.35) 0%, rgba(6, 26, 19, 0.10) 25%, rgba(6, 24, 18, 0.68) 52%, rgba(6, 20, 15, 0.94) 74%, #061A13 100%)',
    },
    {
      id: '03',
      title: 'Website Design & Development',
      description:
        'High-performing websites built around thoughtful design, seamless experiences and business objectives.',
      href: '/services/web-design-development',
      icon: Code2,
      isDark: false, // Light Ivory Card
      image: '/images/services/service-web-development.webp',
      imageAlt: 'Modern laptop and smartphone workspace displaying luxury Aarsika fragrance website',
      objectPosition: 'object-[75%_center] sm:object-right',
      overlayGradient:
        'linear-gradient(180deg, rgba(243, 239, 228, 0.35) 0%, rgba(243, 239, 228, 0.10) 25%, rgba(243, 239, 228, 0.70) 52%, rgba(243, 239, 228, 0.94) 74%, #F3EFE4 100%)',
    },
    {
      id: '04',
      title: 'SEO & GEO Optimization',
      description:
        'Increase your visibility across Google and AI search with strategic, high-impact optimization.',
      href: '/services/seo-geo',
      icon: Search,
      isDark: true, // Dark Emerald Card
      image: '/images/services/service-seo-geo.webp',
      imageAlt: 'Gold magnifying glass with Google AI Overview pill on emerald marble workspace',
      objectPosition: 'object-center sm:object-center',
      overlayGradient:
        'linear-gradient(180deg, rgba(6, 26, 19, 0.35) 0%, rgba(6, 26, 19, 0.10) 25%, rgba(6, 24, 18, 0.68) 52%, rgba(6, 20, 15, 0.94) 74%, #061A13 100%)',
    },
    {
      id: '05',
      title: 'Digital Marketing & Growth',
      description:
        'Paid media, social media and performance marketing that reach the right audience, generate quality leads and deliver measurable growth.',
      href: '/services/performance-marketing',
      icon: Megaphone,
      isDark: false, // Light Ivory Card
      image: '/images/services/service-digital-marketing.webp',
      imageAlt: 'Digital campaign performance analytics dashboard with Google and Meta badges',
      objectPosition: 'object-[75%_center] sm:object-right',
      overlayGradient:
        'linear-gradient(180deg, rgba(243, 239, 228, 0.35) 0%, rgba(243, 239, 228, 0.10) 25%, rgba(243, 239, 228, 0.70) 52%, rgba(243, 239, 228, 0.94) 74%, #F3EFE4 100%)',
    },
    {
      id: '06',
      title: 'AI & Business Automation',
      description:
        'Intelligent workflows that replace manual operations and help your business scale efficiently.',
      href: '/services/ai-automation',
      icon: Bot,
      isDark: true, // Dark Emerald Card
      image: '/images/services/service-ai-automation.webp',
      imageAlt: 'Tablet and smartphone showcasing automated lead workflows and CRM pipelines',
      objectPosition: 'object-[75%_center] sm:object-right',
      overlayGradient:
        'linear-gradient(180deg, rgba(6, 26, 19, 0.35) 0%, rgba(6, 26, 19, 0.10) 25%, rgba(6, 24, 18, 0.68) 52%, rgba(6, 20, 15, 0.94) 74%, #061A13 100%)',
    },
  ];

  return (
    <section
      id="services"
      aria-label="Siyara Innovations Services and Disciplines"
      className="relative py-16 sm:py-20 lg:py-22 bg-[#070A09] text-[#F3EFE4] overflow-hidden border-t border-[#D9B45F]/15"
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
        {/* Section Header: Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-14 lg:mb-14">
          {/* Left Column: Label and Large Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7"
          >
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                02 — OUR SERVICES
              </span>
              <span className="w-10 sm:w-14 h-[1px] bg-[#D4AF37]/50 inline-block" />
            </div>

            {/* Main Headline */}
            <h2 className="font-roboto text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] text-[#F3EFE4] font-normal leading-[1.08] tracking-tight">
              One connected system,<br />
              six disciplines<br />
              working <span className="text-[#D4AF37] italic font-roboto">together.</span>
            </h2>
          </motion.div>

          {/* Right Column: Supporting Description and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-end lg:items-start space-y-5"
          >
            <p className="font-lora text-xs sm:text-sm text-[#A5B8AA] font-light leading-relaxed max-w-md">
              Siyara Innovations brings strategy, creativity and technology together to help businesses build stronger brands, better digital experiences and measurable growth.
            </p>

            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#D4AF37]/45 hover:border-[#D4AF37] text-[#F3EFE4] hover:bg-[#D4AF37]/10 text-xs font-sans font-medium tracking-[0.18em] uppercase transition-all duration-200 group"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 6-Card Grid: Desktop 3x2, Tablet 2 Cols, Mobile 1 Col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDark = service.isDark;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '60px 0px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={service.href}
                  aria-label={`Explore ${service.title}`}
                  className="block group h-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70 rounded-[22px]"
                >
                  <div
                    className={`relative rounded-[22px] sm:rounded-[24px] overflow-hidden p-5 sm:p-6 flex flex-col justify-between min-h-[390px] sm:min-h-[410px] lg:min-h-[415px] xl:min-h-[435px] transition-all duration-350 border ${
                      isDark
                        ? 'bg-[#061A13] border-[#0B5A43]/30 hover:border-[#D4AF37]/60 shadow-[0_12px_36px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_48px_rgba(6,60,45,0.35)]'
                        : 'bg-[#F3EFE4] border-[#E5E0D2] hover:border-[#063C2D]/60 shadow-[0_12px_36px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.25)]'
                    }`}
                  >
                    {/* Background Artwork Layer (Integrated 1:1 Composition) */}
                    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={`object-cover ${service.objectPosition} ${
                          shouldReduceMotion ? '' : 'group-hover:scale-[1.03]'
                        } transition-transform duration-500 ease-out`}
                      />

                      {/* Directional Translucent Overlay for Contrast & Readability */}
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                        style={{ background: service.overlayGradient }}
                      />
                    </div>

                    {/* Top Control Bar: Number, Circular Icon, and Circular Arrow CTA */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-xs font-sans font-semibold tracking-[0.24em] ${
                            isDark ? 'text-[#D4AF37]' : 'text-[#063C2D]'
                          }`}
                        >
                          {service.id}
                        </span>

                        <div
                          className={`w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-transform duration-300 ${
                            shouldReduceMotion ? '' : 'group-hover:scale-105'
                          } ${
                            isDark
                              ? 'border border-[#D4AF37]/35 bg-[#063C2D]/75 text-[#E5C378] backdrop-blur-sm shadow-sm'
                              : 'border border-[#063C2D]/20 bg-[#063C2D] text-[#F3EFE4] shadow-sm'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Circular Arrow CTA */}
                      <div
                        className={`w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isDark
                            ? 'border border-white/25 bg-[#06241B]/60 text-[#F3EFE4] backdrop-blur-sm group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#080B0A]'
                            : 'border border-[#080B0A]/20 bg-white/75 text-[#080B0A] backdrop-blur-sm group-hover:border-[#063C2D] group-hover:bg-[#063C2D] group-hover:text-[#F3EFE4]'
                        }`}
                      >
                        <ArrowRight
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                            shouldReduceMotion ? '' : 'group-hover:translate-x-1'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Bottom Editorial Content Panel */}
                    <div className="relative z-10 mt-auto pt-4">
                      {/* Subtle accent indicator */}
                      <div className="mb-2">
                        <span
                          className={`inline-block w-7 h-[2px] rounded-full ${
                            isDark ? 'bg-[#D4AF37]/70' : 'bg-[#063C2D]/70'
                          }`}
                        />
                      </div>

                      {/* Service Heading */}
                      <h3
                        className={`font-roboto text-xl sm:text-[23px] lg:text-[21px] xl:text-[24px] font-normal leading-[1.18] tracking-tight transition-colors duration-200 ${
                          isDark
                            ? 'text-[#F3EFE4] group-hover:text-white'
                            : 'text-[#080B0A] group-hover:text-[#063C2D]'
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p
                        className={`font-lora text-xs sm:text-[12.5px] leading-relaxed mt-2 line-clamp-3 ${
                          isDark ? 'text-[#C2D1C7] font-light' : 'text-[#1E2823] font-normal'
                        }`}
                      >
                        {service.description}
                      </p>
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
