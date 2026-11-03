'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function WhoWeWorkWith() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Fashion & Lifestyle', href: '/industries/fashion-lifestyle' },
    { name: 'Food & Beverage', href: '/industries/food-beverage' },
    { name: 'Travel & Tourism', href: '/industries/travel-tourism' },
    { name: 'Events', href: '/industries/event-management' },
    { name: 'Professional Services', href: '/services' },
  ];

  return (
    <section
      id="who-we-work-with"
      aria-label="08 — Who We Work With"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#063C2D] text-[#F3EFE4] overflow-hidden"
    >
      {/* Deep Emerald Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D] via-[#05261C] to-[#041A13] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* 3-Part Composition Matching Reference Attachment 3:
            [ Narrative ] | [ Vertical Industry List ] [ Boardroom Visual ] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* COLUMN 1: Eyebrow, Headline & Narrative */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="lg:col-span-4"
          >
            {/* Section Identifier */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.2em] text-[#D4AF37]">
                08
              </span>
              <span className="text-xs sm:text-sm text-[#D4AF37]/50 font-normal">—</span>
              <span className="text-[11px] sm:text-xs font-roboto font-bold tracking-[0.22em] text-[#D4AF37] uppercase">
                WHO WE WORK WITH
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-lora text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#F3EFE4] leading-[1.15] tracking-tight mb-5">
              Industries we<br />
              <span className="italic text-[#E5C378]">create for.</span>
            </h2>

            {/* Narrative */}
            <p className="font-lora text-sm sm:text-base text-[#C5D2CE] font-light leading-relaxed">
              We work with businesses across sectors, bringing industry context, creative thinking and digital execution to real business goals.
            </p>
          </motion.div>

          {/* COLUMN 2: Vertical Industry List with Gold Arrows & Vertical Divider Line */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeCustom }}
            className="lg:col-span-3 lg:border-l lg:border-white/15 lg:pl-8 flex flex-col justify-center"
          >
            <ul className="space-y-3.5 sm:space-y-4">
              {industries.map((ind) => (
                <li key={ind.name}>
                  <Link
                    href={ind.href}
                    className="group flex items-center gap-2.5 text-sm sm:text-[15px] font-roboto font-medium text-[#F3EFE4] hover:text-[#E5C378] transition-colors"
                  >
                    <span className="text-[#E5C378] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                    <span>{ind.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Architectural Boardroom Visual */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeCustom }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/20 bg-[#03150E]">
              <Image
                src="/images/about-conference-room.webp"
                alt="Siyara Innovations strategic consulting and leadership boardroom"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
