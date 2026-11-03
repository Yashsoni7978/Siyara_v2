'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Sparkles, Cpu, Handshake } from 'lucide-react';

export default function Beliefs() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const principles = [
    {
      id: '01',
      title: 'Strategy Before Execution',
      description: 'We diagnose commercial challenges, target audiences, and market positioning before writing a line of code or designing a single interface.',
      icon: Compass,
      highlight: 'Deliberate Intent',
    },
    {
      id: '02',
      title: 'Craft in Every Detail',
      description: 'Nothing is left to default templates. Every typeface pairing, visual interaction, and asset resolution is tuned to convey bespoke brand prestige.',
      icon: Sparkles,
      highlight: 'Tailored Precision',
    },
    {
      id: '03',
      title: 'Built for Performance',
      description: 'We engineer with high-performance Next.js architectures, edge routing, and clean code to guarantee sub-second rendering and high search visibility.',
      icon: Cpu,
      highlight: 'Technical Rigor',
    },
    {
      id: '04',
      title: 'Growth Through Partnership',
      description: 'Digital platforms are living business assets. We stay engaged beyond launch through ongoing conversion optimization and strategic support.',
      icon: Handshake,
      highlight: 'Long-Term Alignment',
    },
  ];

  return (
    <section
      id="philosophy"
      aria-label="Our Core Philosophy and Principles"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#080B0A] text-[#F3EFE4] overflow-hidden border-t border-[#D4AF37]/15"
    >
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D]/40 via-[#080B0A] to-[#080B0A] pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 90, 67, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-xs font-roboto font-medium tracking-[0.24em] text-[#D4AF37]">
            03
          </span>
          <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-xs font-roboto font-semibold tracking-[0.24em] text-[#F3EFE4] uppercase">
            OUR PHILOSOPHY
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F3EFE4] leading-[1.12] sm:leading-[1.08] tracking-tight mb-4"
          >
            The thinking behind{' '}
            <span className="italic font-roboto text-[#E5C378]">
              everything we build.
            </span>
          </motion.h2>
          <p className="font-lora text-sm sm:text-base text-[#9D9B91] font-light leading-relaxed max-w-2xl">
            Four foundational convictions guide our studio’s architectural decisions, creative choices, and ongoing client partnerships.
          </p>
        </div>

        {/* 4 Cards Grid Inspired by Homepage Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '60px 0px' }}
                transition={{ duration: 0.5, delay: 0.05 * idx, ease: easeCustom }}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#063C2D]/35 via-[#080B0A] to-[#080B0A] border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#063C2D]/60 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-roboto font-semibold tracking-[0.2em] text-[#D4AF37]/70 uppercase">
                      {p.id}
                    </span>
                  </div>

                  <span className="text-[11px] font-roboto font-semibold tracking-[0.2em] text-[#19A878] uppercase block mb-2">
                    {p.highlight}
                  </span>

                  <h3 className="font-roboto text-xl sm:text-2xl font-normal text-[#F3EFE4] mb-3 leading-snug">
                    {p.title}
                  </h3>

                  <p className="font-lora text-sm sm:text-base text-[#9D9B91] font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-roboto text-[#9D9B91]">
                  <span className="tracking-wider uppercase text-[11px]">Siyara Principle</span>
                  <span className="text-[#D4AF37]">✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
