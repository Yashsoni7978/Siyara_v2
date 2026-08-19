import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AboutCTA() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section id="contact" className="relative py-32 sm:py-44 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-90 pointer-events-none" />

      {/* Vector Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none stroke-[#D4AF37]/30 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 200 C 400 400, 1000 100, 1800 300" strokeWidth="1" strokeDasharray="3 6" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCustom }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3EFE4] font-normal leading-[1.02] tracking-tight mb-8 max-w-4xl mx-auto"
        >
          Let's build something <br />
          <span className="text-[#E5C378] italic">extraordinary</span> together.
        </motion.h2>

        {/* Supporting */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
          className="font-sans text-base sm:text-xl text-[#CFC9BB] font-light max-w-lg mx-auto leading-relaxed mb-12"
        >
          Have a project in mind? Let's create something amazing.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
          className="flex justify-center"
        >
          <a
            href="mailto:hello@siyara.dev"
            className="inline-flex items-center gap-3 px-9 py-4.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-2xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:-translate-y-0.5"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
