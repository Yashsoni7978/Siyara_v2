'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const projects = [
    {
      sector: 'Real Estate:',
      title: 'Digital Presence & Lead Growth',
      href: '/work/shri-property',
      image: '/images/about-work-real-estate.webp',
      alt: 'Real Estate: Digital Presence & Lead Growth by Siyara Innovations',
    },
    {
      sector: 'Wellness:',
      title: 'Brand Identity & Experience',
      href: '/work/aranya-resort',
      image: '/images/about-work-wellness.webp',
      alt: 'Wellness: Brand Identity & Experience by Siyara Innovations',
    },
    {
      sector: 'Food & Beverage:',
      title: 'Website & Marketing',
      href: '/work/noor',
      image: '/images/about-work-food-beverage.webp',
      alt: 'Food & Beverage: Website & Marketing by Siyara Innovations',
    },
  ];

  return (
    <section
      id="selected-work"
      aria-label="10 — The Work Behind The Thinking"
      className="relative pt-14 sm:pt-16 pb-16 sm:pb-20 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#C99742]">
            10
          </span>
          <span className="text-xs sm:text-sm text-[#080B0A]/40 font-normal">—</span>
          <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#080B0A] uppercase">
            THE WORK BEHIND THE THINKING
          </span>
        </div>

        {/* Headline */}
        <div className="mb-10 sm:mb-14">
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="font-lora text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.15] tracking-tight"
          >
            Selected work that reflects our approach.
          </motion.h2>
        </div>

        {/* 3 Project Cards Grid Matching Attachment 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.sector}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: easeCustom }}
            >
              <Link href={project.href} className="group block">
                {/* Card Image Container (Clean 16:10 Ratio) */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-md bg-[#E5DEC9] mb-3 border border-[#080B0A]/5">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Label: Sector in Gold + Title with Arrow */}
                <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-roboto font-medium group-hover:text-[#C99742] transition-colors">
                  <span className="font-bold text-[#C99742]">{project.sector}</span>
                  <span className="text-[#080B0A] group-hover:text-[#C99742] transition-colors">{project.title}</span>
                  <span className="text-xs text-[#080B0A]/60 group-hover:text-[#C99742] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
