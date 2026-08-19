import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section id="cta" className="relative py-32 sm:py-44 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Emerald Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-90 pointer-events-none" />

      {/* Restrained Architectural Linework SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none stroke-[#D4AF37]/30 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 300 C 400 100, 1000 500, 1800 200" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="50%" cy="50%" r="200" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 4" />
      </svg>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Section Numbering */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
            11
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            Start A Conversation
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3EFE4] font-normal leading-[1.02] tracking-tight mb-8 max-w-4xl mx-auto"
        >
          READY TO BUILD <br />
          <span className="text-[#E5C378] italic">SOMETHING BETTER?</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
          className="font-sans text-base sm:text-xl text-[#CFC9BB] font-light max-w-xl mx-auto leading-relaxed mb-12"
        >
          Let's create a digital experience that drives real growth.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-2xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-4.5 border border-[#D4AF37]/50 bg-[#063C2D]/30 hover:bg-[#063C2D]/70 text-[#F3EFE4] hover:text-[#E5C378] text-xs sm:text-sm font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>SCHEDULE A CALL</span>
          </a>
        </motion.div>

        {/* Restrained Center Gold Line */}
        <div className="mt-20 max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      </div>
    </section>
  );
}
