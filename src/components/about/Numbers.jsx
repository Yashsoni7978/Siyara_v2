'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Award, Briefcase, Globe, Layers } from 'lucide-react';

function Counter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(target);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !isInView) return;

    const duration = 1200;
    const startTime = performance.now();
    setCount(0);

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Numbers() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const verifiedMetrics = [
    {
      id: '01',
      number: 60,
      suffix: '+',
      label: 'Client Engagements Delivered',
      context: 'Partnered with growing enterprises across Jaipur, pan-India, and select international markets to engineer digital solutions.',
      icon: Briefcase,
    },
    {
      id: '02',
      number: 110,
      suffix: '+',
      label: 'Digital Projects Launched',
      context: 'Encompassing custom Next.js web applications, e-commerce storefronts, and brand identity systems.',
      icon: Layers,
    },
    {
      id: '03',
      number: 12,
      suffix: '',
      label: 'Industry Verticals Mastered',
      context: 'Specialized architectures across healthcare, luxury jewellery, hospitality, fashion, real estate, and culinary venues.',
      icon: Globe,
    },
    {
      id: '04',
      number: 6,
      suffix: '+',
      label: 'Years Combined Background',
      context: 'Combined professional engineering, UI/UX systems design, and commercial growth optimization experience.',
      icon: Award,
    },
  ];

  return (
    <section
      id="experience-impact"
      aria-label="Experience & Verified Impact"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3EFE4] text-[#080B0A] overflow-hidden border-t border-[#080B0A]/10"
    >
      {/* Subtle Warm Ivory Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/50 to-[#F3EFE4] opacity-80 pointer-events-none" />
      
      {/* Architectural Background Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #080B0A 1px, transparent 1px), linear-gradient(to bottom, #080B0A 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-xs font-roboto font-medium tracking-[0.24em] text-[#B9923F]">
            06
          </span>
          <span className="w-8 h-[1px] bg-[#063C2D]/30" />
          <span className="text-[11px] sm:text-xs font-roboto font-semibold tracking-[0.24em] text-[#063C2D] uppercase">
            EXPERIENCE &amp; IMPACT
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-normal text-[#080B0A] leading-[1.12] sm:leading-[1.08] tracking-tight mb-4"
          >
            Work that moves{' '}
            <span className="italic font-roboto text-[#063C2D]">
              businesses forward.
            </span>
          </motion.h2>
          <p className="font-lora text-sm sm:text-base text-[#101613]/75 font-light leading-relaxed max-w-2xl">
            Substantiated metrics reflecting genuine studio capability and commercial execution delivered across diverse industry engagements.
          </p>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {verifiedMetrics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '60px 0px' }}
                transition={{ duration: 0.5, delay: 0.05 * idx, ease: easeCustom }}
                className="p-8 rounded-3xl bg-[#ECE7D8]/80 border border-[#063C2D]/15 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-roboto font-semibold tracking-[0.2em] text-[#B9923F] uppercase">
                      METRIC {stat.id}
                    </span>
                    <Icon className="w-4 h-4 text-[#063C2D]/60" />
                  </div>

                  <div className="font-roboto text-4xl sm:text-5xl lg:text-6xl font-normal text-[#080B0A] mb-2 tracking-tight">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </div>

                  <h3 className="font-roboto text-base font-semibold text-[#080B0A] mb-2">
                    {stat.label}
                  </h3>

                  <p className="font-lora text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed">
                    {stat.context}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#080B0A]/10 flex items-center justify-between text-[10px] font-roboto font-medium tracking-wider text-[#063C2D] uppercase">
                  <span>Verified Studio Record</span>
                  <span>✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
