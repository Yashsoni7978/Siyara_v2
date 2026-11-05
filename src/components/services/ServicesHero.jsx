'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function ServicesHero() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const fadeUp = (delayMs = 0) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: easeCustom },
    },
  });

  return (
    <section
      id="services-hero"
      aria-label="Services Hero"
      className="relative min-h-[85svh] pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#080B0A] text-[#F3EFE4] overflow-hidden flex items-center"
    >
      {/* Background Atmosphere: Deep Emerald & Obsidian Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />

      {/* Subtle Radial Glow */}
      <div
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.35) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-24 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[calc(100svh-160px)] lg:min-h-0">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={false}
              animate="visible"
              variants={fadeUp(150)}
              className="flex items-center gap-2.5 mb-5 sm:mb-6"
            >
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                — OUR SERVICES —
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={false}
              animate="visible"
              variants={fadeUp(300)}
              className="font-roboto text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-normal text-[#F3EFE4] leading-[1.1] tracking-tight mb-5 sm:mb-6"
            >
              Digital Solutions<br />
              Built for<br />
              <span className="font-lora italic text-[#E5C378]">Real Business Growth.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={false}
              animate="visible"
              variants={fadeUp(450)}
              className="font-lora text-sm sm:text-base lg:text-[17px] text-[#C5D2CE] font-light leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              We help brands grow through strategy, creativity and technology. Explore our services designed to solve real challenges and create measurable impact.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={false}
              animate="visible"
              variants={fadeUp(600)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              {/* Primary: Explore All Services */}
              <a
                href="#disciplines"
                className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs sm:text-sm font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 group"
              >
                <span>Explore All Services</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary: Talk to Our Team */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Talk to our team on WhatsApp"
                className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 border border-[#E5C378]/50 bg-[#063C2D]/50 hover:bg-[#063C2D] text-[#F3EFE4] hover:text-[#E5C378] text-xs sm:text-sm font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Flowing Emerald & Champagne Gold Abstract Artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[460px] lg:max-w-none aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-[#03150E]/80">
              <Image
                src="/images/siyara_hero_artwork.webp"
                alt="Siyara Innovations flowing emerald and champagne gold luxury abstract visual"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 550px"
                className="object-cover object-center"
                priority
                fetchPriority="high"
              />
              {/* Subtle ambient soft edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
