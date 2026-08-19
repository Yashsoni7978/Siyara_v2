import React from 'react';
import { motion } from 'framer-motion';
import { Home, HeartPulse, GraduationCap, ShoppingBag, UtensilsCrossed, Gem, Cpu, ArrowRight } from 'lucide-react';

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
    { name: 'And More', icon: ArrowRight },
  ];

  return (
    <section id="industries" className="relative py-20 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <div className="text-center mb-12">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.24em] text-[#19A878] uppercase">
            TRUSTED BY BUSINESSES ACROSS INDUSTRIES
          </span>
        </div>

        {/* Horizontal Industry Strip matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {industryItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: easeCustom }}
                className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-[#D4AF37]/15 bg-[#0A0D0C] hover:border-[#19A878] hover:bg-[#063C2D]/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:text-[#19A878] group-hover:border-[#19A878] mb-3 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs font-medium text-[#F3EFE4] group-hover:text-[#E5C378] transition-colors leading-tight">
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
