import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesHero() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay / 1000, ease: easeCustom },
    },
  });

  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#080B0A] overflow-hidden flex items-center">
      {/* Deep Emerald Background Atmosphere */}
      <div className="absolute inset-0 bg-radial from-[#063C2D]/50 via-[#080B0A]/90 to-[#080B0A] opacity-90 pointer-events-none" />

      {/* Abstract Gold & Emerald Linework SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none stroke-[#D4AF37]/30 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 200 C 300 50, 700 450, 1500 100 S 1800 600, 2200 400" strokeWidth="1.2" strokeDasharray="4 8" />
        <circle cx="25%" cy="35%" r="1.5" fill="#19A878" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="75%" cy="65%" r="2" fill="#D4AF37" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(200)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#19A878] uppercase">
                OUR SERVICES
              </span>
              <span className="h-[1px] w-8 bg-[#19A878]/50" />
            </motion.div>

            {/* Main Headline */}
            <div className="mb-8">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(400)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                We build.
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(550)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                We manage.
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(700)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#19A878] italic"
              >
                We grow.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp(850)}
              className="font-sans text-base sm:text-lg text-[#CFC9BB] font-light leading-relaxed mb-10 max-w-lg"
            >
              Everything your brand needs to launch, scale and stay ahead — handled by one team.
            </motion.p>

            {/* Action CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(1000)}
            >
              <a
                href="#services-index"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#063C2D] border border-[#19A878]/40 hover:bg-[#19A878] text-[#F3EFE4] hover:text-[#080B0A] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-[#063C2D]/40 group"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#080B0A] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Sophisticated Digital Brand Portal & Ecosystem Environment (NO LAPTOP!) */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.8, ease: easeCustom }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Outer Emerald Glow Aura */}
              <div className="absolute -inset-6 bg-radial from-[#19A878]/30 via-[#063C2D]/40 to-transparent blur-3xl opacity-80 rounded-full" />

              {/* Portal Display Frame */}
              <div className="relative rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-[#063C2D]/80 via-[#080B0A] to-[#080B0A] border border-[#19A878]/40 p-4 sm:p-6 shadow-2xl overflow-hidden aspect-[4/5] flex flex-col items-center justify-center text-center">
                
                {/* Glowing Portal Arch Inner Line */}
                <div className="absolute inset-4 rounded-t-[124px] rounded-b-xl border border-[#D4AF37]/30 pointer-events-none" />

                {/* Subtle Emerald Atmosphere Radial Glow */}
                <div className="absolute inset-0 bg-radial from-[#19A878]/20 via-[#063C2D]/30 to-transparent pointer-events-none" />

                {/* Siyara Central Emblem / Geometric Star */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#D4AF37]/50 bg-[#080B0A]/90 backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(25,168,120,0.3)]">
                  <div className="absolute inset-2 rounded-full border border-[#19A878]/40 animate-pulse" />
                  <span className="text-[#D4AF37] text-4xl sm:text-5xl font-serif">✦</span>
                </div>

                {/* Digital Brand Ecosystem Label & Tagline */}
                <div className="relative z-10 max-w-xs">
                  <span className="text-[10px] font-mono tracking-[0.24em] text-[#D4AF37] uppercase mb-2 block">
                    THE DIGITAL SYSTEM
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE4] leading-tight font-normal mb-3">
                    One Unified Brand & <br />
                    <span className="text-[#19A878] italic">Growth Engine.</span>
                  </h3>
                  <p className="text-[11px] font-sans text-[#CFC9BB]/70 font-light leading-relaxed">
                    Strategy, Identity, Development, Marketing & Automation seamlessly integrated.
                  </p>
                </div>

                {/* Gold Structural Accent Arc at base */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[9px] font-mono text-[#D4AF37]/70 tracking-widest uppercase">
                  <span>SIYARA</span>
                  <span>✦</span>
                  <span>ECOSYSTEM</span>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
