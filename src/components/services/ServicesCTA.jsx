import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function ServicesCTA() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section id="contact" className="relative py-32 sm:py-44 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-90 pointer-events-none" />

      {/* Vector Linework */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none stroke-[#D4AF37]/30 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 300 C 400 100, 1000 500, 1800 200" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Buttons */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeCustom }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE4] font-normal leading-[1.04] tracking-tight mb-8"
            >
              Ready to build something <br />
              <span className="text-[#19A878] italic">extraordinary</span> together?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="font-sans text-base sm:text-lg text-[#CFC9BB] font-light max-w-lg leading-relaxed mb-10"
            >
              Let's create a digital experience that elevates your brand and drives real growth.
            </motion.p>

            {/* Dual Buttons matching reference image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <a
                href="mailto:hello@siyara.dev"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#063C2D] border border-[#19A878]/50 hover:bg-[#19A878] text-[#F3EFE4] hover:text-[#080B0A] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-[#063C2D]/50 group"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#080B0A] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:hello@siyara.dev"
                className="inline-flex items-center gap-2.5 px-6 py-4 border border-[#D4AF37]/40 bg-[#080B0A]/80 hover:bg-[#063C2D]/50 text-[#F3EFE4] hover:text-[#E5C378] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>SCHEDULE A CALL</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Portal Arch with Geometric Star matching reference image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-radial from-[#19A878]/30 via-[#063C2D]/40 to-transparent blur-2xl opacity-70 rounded-full" />
              
              <div className="relative rounded-t-[100px] rounded-b-xl bg-gradient-to-b from-[#063C2D]/80 to-[#080B0A] border border-[#19A878]/40 p-8 text-center aspect-[4/5] flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-[#D4AF37]/50 bg-[#080B0A] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(25,168,120,0.3)]">
                  <span className="text-[#D4AF37] text-3xl font-serif">✦</span>
                </div>
                <span className="text-[10px] font-mono tracking-[0.24em] text-[#D4AF37] uppercase">
                  SIYARA INNOVATIONS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
