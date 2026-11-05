'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section 
      id="about-hero" 
      aria-label="About Siyara Innovations Hero"
      className="relative min-h-[85vh] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#080B0A] text-[#F3EFE4] overflow-hidden flex items-center"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D]/35 via-[#080B0A] to-[#080B0A] pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.2) 0%, transparent 70%)',
        }}
      />
      
      {/* Architectural Background Lines */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-[#D4AF37]/10 bg-gradient-to-l from-[#063C2D]/15 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[calc(100svh-160px)] lg:min-h-0">
            {/* Section Identifier */}
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#D4AF37]">
                01
              </span>
              <span className="text-xs sm:text-sm text-[#D4AF37]/50 font-normal">—</span>
              <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#F3EFE4] uppercase">
                ABOUT SIYARA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-lora text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-normal leading-[1.12] sm:leading-[1.1] tracking-tight text-[#F3EFE4] mb-6 sm:mb-8">
              We turn ambitious ideas into{' '}
              <span className="italic text-[#E5C378]">
                meaningful digital experiences.
              </span>
            </h1>

            {/* Brand Introduction — Cleaned of 'digital architecture studio' phrase */}
            <div className="max-w-xl space-y-4 mb-8 sm:mb-10">
              <p className="font-lora text-base sm:text-lg text-[#C5D2CE] font-light leading-relaxed">
                Siyara Innovations unites brand strategy, bespoke web engineering, and commercial growth systems into one connected discipline.
              </p>
              <p className="font-lora text-sm sm:text-base text-[#9D9B91] font-light leading-relaxed">
                We believe that good businesses should not have to navigate disconnected vendors, fragmented tools, and inconsistent digital execution. We design and engineer cohesive systems built to scale.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#our-story"
                className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-[#D4AF37] hover:bg-[#c9a34e] text-[#080B0A] text-xs font-roboto font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-xl shadow-[#D4AF37]/20 hover:scale-105 active:scale-100"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full border border-white/20 hover:border-[#D4AF37] text-[#F3EFE4] hover:text-[#D4AF37] text-xs font-roboto font-semibold tracking-[0.16em] uppercase transition-all duration-300 bg-white/[0.03]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Brand Identity Artwork */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/25 group bg-[#063C2D]/20">
              <Image
                src="/images/siyara_hero_artwork.webp"
                alt="Siyara Innovations Brand Identity & Digital Systems Artwork"
                priority
                fetchPriority="high"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Studio Emblem Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#080B0A]/85 border border-[#D4AF37]/30 backdrop-blur-md">
                <span className="text-[10px] font-roboto font-semibold tracking-[0.2em] text-[#D4AF37] uppercase block mb-1">
                  SIYARA INNOVATIONS
                </span>
                <p className="font-lora text-xs text-[#F3EFE4]/90 font-light leading-snug">
                  Strategy · Design · Technology · Growth
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
