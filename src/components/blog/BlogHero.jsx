import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080B0A] overflow-hidden">
      {/* Deep Atmospheric Background Effects */}
      <div className="absolute inset-0 bg-radial from-[#063C2D]/40 via-[#080B0A]/90 to-[#080B0A] pointer-events-none" />
      
      {/* Subtle Gold Particles / Energy Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#19A878]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" />

      {/* Decorative Grid Mesh overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none border border-[#D4AF37]/30 bg-[#063C2D]/30 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
              SIYARA INSIGHTS
            </span>
          </motion.div>

          {/* Main Editorial Display Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#F3EFE4] leading-[1.08] tracking-tight mb-8"
          >
            Ideas that shape the{' '}
            <span className="italic font-normal text-gold-gradient">
              digital future.
            </span>
          </motion.h1>

          {/* Supporting Perspective Line */}
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#CFC9BB]/90 font-light leading-relaxed max-w-2xl"
          >
            Insights, strategies and perspectives on building brands, technology and growth in a rapidly changing digital world.
          </motion.p>
        </div>

        {/* Fine Editorial Accent Strip */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-14 pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-[#CFC9BB]/70"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#D4AF37] font-mono uppercase tracking-widest text-[10px]">PUB — VOL 04</span>
            <span className="w-1 h-1 rounded-full bg-[#19A878]" />
            <span className="tracking-wider">Thought Leadership & Intelligence</span>
          </div>

          <div className="flex items-center gap-2 text-[#CFC9BB]/60 text-[11px] tracking-wider uppercase">
            <span>Explore Articles</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
