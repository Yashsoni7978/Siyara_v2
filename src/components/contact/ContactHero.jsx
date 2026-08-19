import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, ShieldCheck } from 'lucide-react';

export default function ContactHero() {
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
      {/* Deep Emerald Radial Atmosphere Background */}
      <div className="absolute inset-0 bg-radial from-[#063C2D]/60 via-[#080B0A]/95 to-[#080B0A] opacity-90 pointer-events-none" />

      {/* Abstract Gold Light Lines SVG Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none stroke-[#D4AF37]/30 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 250 C 300 50, 800 500, 1600 150 S 1900 650, 2300 450" strokeWidth="1.2" strokeDasharray="4 8" />
        <circle cx="20%" cy="30%" r="2" fill="#19A878" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="80%" cy="70%" r="2.5" fill="#D4AF37" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(350)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                LET'S CONNECT
              </span>
              <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
            </motion.div>

            {/* Main Editorial Headline */}
            <div className="mb-8">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(500)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                Turn Ideas
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(650)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                Into Impact.
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(800)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight"
              >
                <span className="text-[#F3EFE4]">Let's Build </span>
                <span className="text-[#19A878] italic">Something </span>
                <span className="text-[#D4AF37]">Great.</span>
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp(950)}
              className="font-sans text-base sm:text-lg text-[#CFC9BB] font-light leading-relaxed mb-10 max-w-lg"
            >
              Whether you have a project in mind, need expert advice or want to explore opportunities — we're here to help.
            </motion.p>

            {/* Action CTA Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(1100)}
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2.5 px-7 py-4 border border-[#D4AF37]/50 bg-[#063C2D]/40 hover:bg-[#D4AF37] text-[#F3EFE4] hover:text-[#080B0A] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-[#063C2D]/40 group"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#080B0A] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Digital Brand Object Centerpiece (Reference Direction) */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7, ease: easeCustom }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Outer Emerald Glow Aura */}
              <div className="absolute -inset-8 bg-radial from-[#19A878]/35 via-[#063C2D]/40 to-transparent blur-3xl opacity-90 rounded-full" />

              {/* Floating Badge Overlay 1: Quick Response (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-4 -left-2 sm:left-4 z-30 bg-[#080B0A]/90 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-2 rounded-full shadow-2xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#063C2D] border border-[#19A878] flex items-center justify-center text-[#D4AF37]">
                  <Clock className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-[#F3EFE4] uppercase">
                  Quick Response
                </span>
              </motion.div>

              {/* Floating Badge Overlay 2: Expert Team (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-12 -right-2 sm:right-4 z-30 bg-[#080B0A]/90 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-2 rounded-full shadow-2xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#063C2D] border border-[#19A878] flex items-center justify-center text-[#D4AF37]">
                  <Users className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-[#F3EFE4] uppercase">
                  Expert Team
                </span>
              </motion.div>

              {/* Floating Badge Overlay 3: Long-Term Partnership (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute bottom-16 -left-2 sm:left-6 z-30 bg-[#080B0A]/90 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-2 rounded-full shadow-2xl flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#063C2D] border border-[#19A878] flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-[#F3EFE4] uppercase">
                  Long-Term Partnership
                </span>
              </motion.div>

              {/* Main Emerald Digital Brand Object Pedestal Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#063C2D] via-[#080B0A] to-[#080B0A] border border-[#D4AF37]/40 p-6 sm:p-10 shadow-2xl overflow-hidden aspect-[4/4.2] flex flex-col items-center justify-center text-center">
                
                {/* Background Vertical Light Lines */}
                <div className="absolute inset-0 flex justify-between px-12 opacity-20 pointer-events-none">
                  <div className="w-[1px] h-full bg-[#D4AF37]" />
                  <div className="w-[1px] h-full bg-[#D4AF37]" />
                  <div className="w-[1px] h-full bg-[#D4AF37]" />
                  <div className="w-[1px] h-full bg-[#D4AF37]" />
                </div>

                {/* Glowing Orbital Light Ring (Continuous subtle animation) */}
                <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full border border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.25)] pointer-events-none animate-pulse-glow" />
                
                {/* Secondary Orbital Arc */}
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-[#19A878]/30 pointer-events-none rotate-45" />

                {/* Tiered Circular Pedestal Base */}
                <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-xl bg-gradient-to-tr from-[#063C2D]/90 via-[#0B5A43]/80 to-[#080B0A] border border-[#D4AF37]/60 p-6 shadow-[0_0_50px_rgba(6,60,45,0.8)] flex flex-col items-center justify-center group transform transition-transform duration-700 hover:scale-[1.02]">
                  
                  {/* Outer Pedestal Rim Highlight */}
                  <div className="absolute inset-2 rounded-lg border border-[#D4AF37]/30 pointer-events-none" />

                  {/* Centered Siyara Golden Geometric Emblem (Reflects reference image center star) */}
                  <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#080B0A] border-2 border-[#D4AF37] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <div className="absolute inset-1.5 rounded-full border border-[#19A878]/60 animate-pulse" />
                    {/* Golden Siyara Geometric Star Pattern */}
                    <div className="relative flex items-center justify-center">
                      <span className="text-[#D4AF37] text-4xl sm:text-5xl font-serif">✦</span>
                    </div>
                  </div>

                  {/* Emblem Sub-Label */}
                  <span className="text-[10px] font-mono tracking-[0.26em] text-[#D4AF37] uppercase font-bold">
                    SIYARA INNOVATIONS
                  </span>
                  <span className="text-[9px] font-sans tracking-[0.16em] text-[#CFC9BB]/70 uppercase mt-0.5">
                    DIGITAL ECOSYSTEM
                  </span>

                </div>

                {/* Bottom Lighting Floor Detail */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/80 to-transparent pointer-events-none" />

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
