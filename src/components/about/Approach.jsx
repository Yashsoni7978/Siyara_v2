'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search, Compass, Edit3, Code, Rocket, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const stages = [
    {
      id: '01',
      title: 'DISCOVER',
      subtitle: 'Audit & Clarity',
      description: 'We analyze your commercial model, current digital gaps, and user behavior before proposing solutions.',
      deliverable: 'Business & Brand Audit',
      icon: Search,
    },
    {
      id: '02',
      title: 'STRATEGIZE',
      subtitle: 'Architecture & Roadmap',
      description: 'We define the technical stack, brand positioning, and conversion architecture to guide all execution.',
      deliverable: 'Strategic Blueprint',
      icon: Compass,
    },
    {
      id: '03',
      title: 'DESIGN',
      subtitle: 'UI/UX & Identity',
      description: 'We design bespoke interfaces with refined typographic hierarchy, responsive pacing, and brand prestige.',
      deliverable: 'Bespoke UI/UX System',
      icon: Edit3,
    },
    {
      id: '04',
      title: 'DEVELOP',
      subtitle: 'Next.js Engineering',
      description: 'We build with clean Next.js code, edge caching, responsive image optimization, and semantic Schema.org markup.',
      deliverable: 'Next.js Architecture',
      icon: Code,
    },
    {
      id: '05',
      title: 'LAUNCH',
      subtitle: 'QA & Deployment',
      description: 'We conduct multi-viewport QA, performance stress testing, and structured rollouts with zero downtime.',
      deliverable: 'Production Deployment',
      icon: Rocket,
    },
    {
      id: '06',
      title: 'GROW',
      subtitle: 'Optimization & Scale',
      description: 'We optimize post-launch performance based on verified user data, search traction, and conversion metrics.',
      deliverable: 'Continuous Scale & CRO',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="process"
      aria-label="Our Six-Step Process and Methodology"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#080B0A] text-[#F3EFE4] overflow-hidden border-t border-[#D4AF37]/15"
    >
      {/* Background Deep Emerald Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D]/35 via-[#080B0A] to-[#080B0A] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-xs font-roboto font-medium tracking-[0.24em] text-[#D4AF37]">
            05
          </span>
          <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-xs font-roboto font-semibold tracking-[0.24em] text-[#F3EFE4] uppercase">
            OUR PROCESS
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
            Every stage connected.{' '}
            <span className="italic font-roboto text-[#E5C378]">
              Every decision intentional.
            </span>
          </motion.h2>
          <p className="font-lora text-sm sm:text-base text-[#9D9B91] font-light leading-relaxed max-w-2xl">
            A disciplined, six-stage methodology ensuring complete transparency and predictable delivery from initial consultation to continuous commercial growth.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal Progression: lg and above) */}
        <div className="hidden lg:block relative pt-4 pb-4">
          
          {/* Continuous Rail Line */}
          <div className="relative mb-8 px-4">
            <div className="w-full h-[2px] bg-white/10 rounded-full relative">
              <div 
                className="h-full bg-gradient-to-r from-[#063C2D] via-[#D4AF37] to-[#D4AF37] rounded-full transition-all duration-300"
                style={{ width: `${((activeStep + 1) / stages.length) * 100}%` }}
              />
            </div>
            
            {/* Stage Indicators */}
            <div className="absolute -top-[5px] left-4 right-4 flex justify-between pointer-events-none">
              {stages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    idx <= activeStep
                      ? 'bg-[#D4AF37] border-[#080B0A] scale-110 shadow-[0_0_8px_#D4AF37]'
                      : 'bg-[#080B0A] border-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 6 Horizontal Cards */}
          <div className="grid grid-cols-6 gap-3 xl:gap-4">
            {stages.map((stg, idx) => {
              const Icon = stg.icon;
              const isActive = idx === activeStep;

              return (
                <div
                  key={stg.id}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative rounded-2xl p-5 xl:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[350px] ${
                    isActive
                      ? 'bg-gradient-to-b from-[#063C2D]/50 via-[#080B0A] to-[#063C2D]/30 border border-[#D4AF37]/50 shadow-xl -translate-y-1'
                      : 'bg-white/[0.02] hover:bg-[#063C2D]/20 border border-white/10 hover:border-[#D4AF37]/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <span className={`text-[11px] font-roboto font-semibold tracking-widest ${isActive ? 'text-[#D4AF37]' : 'text-white/60'}`}>
                        STAGE {stg.id}
                      </span>
                      {idx < stages.length - 1 && (
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4AF37]' : 'text-white/20'}`} />
                      )}
                    </div>

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-colors ${
                      isActive ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' : 'bg-[#063C2D]/40 border-white/10 text-white/70'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-roboto text-base font-semibold text-[#F3EFE4] mb-1">
                      {stg.title}
                    </h3>
                    <span className="text-[10px] font-roboto text-[#19A878] tracking-wider uppercase block mb-3">
                      {stg.subtitle}
                    </span>

                    <p className="font-lora text-xs text-[#9D9B91] leading-relaxed font-light">
                      {stg.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[10px] font-roboto font-medium text-[#D4AF37] tracking-wider uppercase block truncate">
                      {stg.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* MOBILE & TABLET TIMELINE (Vertical Progression: under lg) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#D4AF37]/30 space-y-6 sm:space-y-8">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            return (
              <div key={stg.id} className="relative">
                {/* Node on vertical line */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#080B0A]" />

                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#063C2D]/50 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-roboto font-semibold tracking-wider text-[#D4AF37] uppercase block">
                        STAGE {stg.id} · {stg.subtitle}
                      </span>
                      <h3 className="font-roboto text-base sm:text-lg font-semibold text-[#F3EFE4]">
                        {stg.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-lora text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-3">
                    {stg.description}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] font-roboto text-[#19A878]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{stg.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
