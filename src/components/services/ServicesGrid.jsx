'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { DISCIPLINES_DATA } from './ServicesDisciplines.jsx';

export default function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section
      id="all-services"
      aria-label="Explore Our Services"
      className="relative pt-10 sm:pt-12 pb-20 sm:pb-24 lg:pb-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
            — ALL SERVICES —
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-16 mb-12 sm:mb-16">
          <h2 className="font-lora text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.15] tracking-tight">
            Explore Our Services
          </h2>

          <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed max-w-md">
            End-to-end digital capabilities to help your brand grow, engage and perform better.
          </p>
        </div>

        {/* 8-Card Grid: 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7">
          {DISCIPLINES_DATA.map((service, idx) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: easeCustom }}
              >
                <Link
                  href={service.slug}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#EFE9DC]/80 hover:bg-[#EFE9DC] border border-[#080B0A]/8 hover:border-[#C99742]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 h-full min-h-[220px] overflow-hidden"
                >
                  {/* Subtle Corner Abstract Artistic Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-300 overflow-hidden rounded-tr-2xl">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Card Content Top: Icon + Title + Description */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center text-[#C99742] group-hover:text-[#080B0A] group-hover:bg-[#E5C378] transition-colors duration-300 mb-5 shadow-xs">
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-roboto font-bold text-base sm:text-lg text-[#080B0A] group-hover:text-[#C99742] transition-colors duration-200 mb-2 leading-snug">
                      {service.name}
                    </h3>

                    {/* Short Description */}
                    <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed mb-6">
                      {service.gridDescription}
                    </p>
                  </div>

                  {/* Card Bottom: Learn More Link */}
                  <div className="relative z-10 pt-2 border-t border-[#080B0A]/8 flex items-center justify-between text-xs font-roboto font-bold tracking-[0.1em] text-[#080B0A] group-hover:text-[#C99742] uppercase transition-colors">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

