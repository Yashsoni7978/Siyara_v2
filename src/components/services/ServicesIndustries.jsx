import React from 'react';
import { motion } from 'framer-motion';
import { Home, HeartPulse, GraduationCap, ShoppingBag, UtensilsCrossed, Gem, Cpu, ArrowUpRight } from 'lucide-react';

export default function ServicesIndustries() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const industryItems = [
    { name: 'Real Estate', icon: Home },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Education', icon: GraduationCap },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Hospitality', icon: UtensilsCrossed },
    { name: 'Jewellery & Luxury', icon: Gem },
    { name: 'SaaS & Tech', icon: Cpu },
    { name: 'And More', icon: ArrowUpRight },
  ];

  return (
    <section id="industries" className="relative py-28 sm:py-36 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            06
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Specialist System & Industries
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[0.98]">
            SIX DISCIPLINE <br />
            <span className="text-[#0B5E49] italic font-normal">SPECIALIST SYSTEM.</span>
          </h2>
        </motion.div>

        {/* Horizontal Industry Strip matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {industryItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: easeCustom }}
                className="flex flex-col items-center justify-center text-center p-5 rounded-none border border-[#B9923F]/30 bg-[#ECE7D8] hover:border-[#0B5E49] hover:bg-[#F3EFE3] transition-all duration-300 group cursor-pointer shadow-md"
              >
                <div className="w-10 h-10 rounded-full border border-[#0B5E49]/30 bg-[#F3EFE3] flex items-center justify-center text-[#0B5E49] group-hover:bg-[#0B5E49] group-hover:text-[#F3EFE3] group-hover:border-[#0B5E49] mb-3 transition-colors">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="font-sans text-xs font-semibold text-[#101613] group-hover:text-[#0B5E49] transition-colors leading-tight">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

