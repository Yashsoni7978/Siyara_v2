'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Industries() {
  // Default to 02 Healthcare & Clinics (index 1) to match the reference design screenshot
  const [activeIndex, setActiveIndex] = useState(1);

  const industries = [
    {
      id: '01',
      name: 'REAL ESTATE',
      href: '/industries/real-estate',
      image: '/images/industries/real-estate.webp',
    },
    {
      id: '02',
      name: 'HEALTHCARE & CLINICS',
      href: '/industries/healthcare',
      image: '/images/industries/healthcare.webp',
    },
    {
      id: '03',
      name: 'JEWELLERY & LUXURY',
      href: '/industries/jewellery-luxury',
      image: '/images/industries/jewellery-luxury.webp',
    },
    {
      id: '04',
      name: 'INTERIOR DESIGN',
      href: '/industries/interior-design',
      image: '/images/industries/interior-design.webp',
    },
    {
      id: '05',
      name: 'HOSPITALITY & RESORTS',
      href: '/industries/hospitality',
      image: '/images/industries/hospitality.webp',
    },
    {
      id: '06',
      name: 'E-COMMERCE & D2C',
      href: '/industries/ecommerce',
      image: '/images/industries/ecommerce.webp',
    },
  ];

  const currentIndustry = industries[activeIndex] || industries[0];

  return (
    <section
      id="industries"
      aria-label="Industries We Empower"
      className="relative pt-12 sm:pt-16 lg:pt-18 pb-12 sm:pb-16 lg:pb-18 bg-[#070A09] text-[#F3EFE4] overflow-hidden border-b border-[#D4AF37]/15"
    >
      {/* Background Deep Emerald Atmosphere with Curved Ribbons */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#061610] to-[#070A09] pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 94, 73, 0.4) 0%, transparent 70%)',
        }}
      />
      {/* Subtle Abstract Light Curves matching reference */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block"
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 200 C 300 100, 600 500, 1100 250 C 1300 150, 1500 300, 1600 280"
          stroke="url(#emeraldLightGrad)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="emeraldLightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#19A878" stopOpacity="0" />
            <stop offset="50%" stopColor="#19A878" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D4AF37]">
              03
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/40" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              BUILT FOR AMBITIOUS INDUSTRIES
            </span>
          </div>

          {/* Heading (Left) & Supporting Copy (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7 xl:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] text-[#F3EFE4] font-normal leading-[1.08] tracking-tight">
                Industries We{' '}
                <span className="italic font-serif text-[#D4AF37]">Empower.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 xl:col-span-5 flex lg:justify-end">
              <p className="font-sans text-xs sm:text-[13px] text-[#A5B8AA]/80 font-light leading-relaxed max-w-xs lg:text-right">
                Strategic branding, digital platforms and growth systems for high-potential industries.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TWO-COLUMN LAYOUT: INDUSTRY LIST (LEFT) & FEATURED IMAGE (RIGHT)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Compact Horizontal Industry Rows */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
            {industries.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group relative py-3.5 sm:py-4 px-3 sm:px-4 flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0B5A43]/25 via-[#0B5A43]/10 to-transparent'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Left: Number & Industry Name */}
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span
                      className={`text-xs font-sans font-medium transition-colors duration-200 ${
                        isActive ? 'text-[#D4AF37]' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {item.id}
                    </span>

                    <Link
                      href={item.href}
                      className={`text-xs sm:text-[13px] font-sans font-semibold tracking-[0.16em] uppercase transition-colors duration-200 truncate ${
                        isActive
                          ? 'text-[#D4AF37]'
                          : 'text-[#F3EFE4] group-hover:text-[#D4AF37]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>

                  {/* Right: Diagonal Arrow Icon */}
                  <Link
                    href={item.href}
                    aria-label={`Explore ${item.name} Industry`}
                    className="shrink-0 pl-2"
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 transition-all duration-200 ${
                        isActive
                          ? 'text-[#D4AF37] translate-x-0.5 -translate-y-0.5'
                          : 'text-white/40 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    />
                  </Link>

                  {/* Active Bottom Indicator Accent */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndustryIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37]"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Landscape Featured Image corresponding to Selected Industry */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Link
              href={currentIndustry.href}
              className="block group"
              aria-label={`View ${currentIndustry.name} Industry Solutions`}
            >
              <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] rounded-[22px] lg:rounded-[26px] overflow-hidden border border-[#D4AF37]/35 group-hover:border-[#D4AF37]/70 shadow-[0_16px_40px_rgba(0,0,0,0.5)] bg-[#070A09] transition-all duration-300">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndustry.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentIndustry.image}
                      alt={currentIndustry.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    {/* Subtle Overlay for Polish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A09]/40 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
