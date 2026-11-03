'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Globe, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Studio() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section
      id="perspective"
      aria-label="Our Perspective & Roots"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#080B0A] text-[#F3EFE4] overflow-hidden border-t border-[#D4AF37]/15"
    >
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D]/35 via-[#080B0A] to-[#080B0A] pointer-events-none" />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-xs font-roboto font-medium tracking-[0.24em] text-[#D4AF37]">
            07
          </span>
          <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-xs font-roboto font-semibold tracking-[0.24em] text-[#F3EFE4] uppercase">
            OUR PERSPECTIVE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Single Strong Architectural Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/25 aspect-[16/11] max-w-lg lg:max-w-none mx-auto group bg-[#063C2D]/30">
              <Image
                src="/images/digital-architecture-connected-systems.webp"
                alt="Siyara Innovations Studio Perspective & Architectural Vision"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A]/85 via-transparent to-transparent pointer-events-none" />

              {/* Geographic & Standard Pill */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-4 rounded-2xl bg-[#080B0A]/85 border border-[#D4AF37]/30 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-roboto font-semibold tracking-wider text-[#F3EFE4] uppercase">
                    JAIPUR STUDIO · GLOBAL REACH
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-roboto text-[#19A878]">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Pan-India &amp; International</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE4] leading-[1.12] sm:leading-[1.08] tracking-tight mb-6 sm:mb-8">
              Rooted in perspective.{' '}
              <span className="italic font-roboto text-[#E5C378]">
                Built for what&apos;s next.
              </span>
            </h2>

            <div className="space-y-4 font-lora text-sm sm:text-base text-[#9D9B91] font-light leading-relaxed mb-8 max-w-xl">
              <p>
                Our studio draws inspiration from Jaipur’s heritage of architectural proportion, meticulous craftsmanship, and enduring design. This cultural foundation informs our belief that digital systems should be built with substance and longevity, not transient shortcuts.
              </p>
              <p>
                At the same time, our engineering benchmarks and delivery standards are uncompromisingly modern. We engineer with modern headless stacks, edge infrastructure, and AI-enabled search indexing so that our clients can command recognition across domestic and international markets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 max-w-md">
              <div>
                <span className="text-xs font-roboto font-semibold tracking-wider text-[#D4AF37] uppercase block mb-1">
                  HERITAGE PRINCIPLE
                </span>
                <p className="font-lora text-xs text-[#F3EFE4]/80 font-light leading-snug">
                  Proportion, patience, and uncompromising aesthetic craft.
                </p>
              </div>
              <div>
                <span className="text-xs font-roboto font-semibold tracking-wider text-[#19A878] uppercase block mb-1">
                  MODERN STANDARD
                </span>
                <p className="font-lora text-xs text-[#F3EFE4]/80 font-light leading-snug">
                  Next.js speed, edge distribution, and structured AI discoverability.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
