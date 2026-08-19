import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Edit3, Code, Megaphone, Bot, TrendingUp } from 'lucide-react';

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const nodes = [
    {
      id: '01',
      title: 'STRATEGY',
      description: 'We plan what matters.',
      icon: Lightbulb,
    },
    {
      id: '02',
      title: 'CREATE',
      description: 'We design what connects.',
      icon: Edit3,
    },
    {
      id: '03',
      title: 'BUILD',
      description: 'We develop what performs.',
      icon: Code,
    },
    {
      id: '04',
      title: 'MARKET',
      description: 'We promote what grows.',
      icon: Megaphone,
    },
    {
      id: '05',
      title: 'AUTOMATE',
      description: 'We streamline what saves time.',
      icon: Bot,
    },
    {
      id: '06',
      title: 'GROW',
      description: 'We optimize what scales.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="ecosystem" className="relative py-28 sm:py-36 bg-[#063C2D]/30 border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#19A878] uppercase">
            THE SIYARA ECOSYSTEM
          </span>
          <span className="h-[1px] w-8 bg-[#19A878]/50" />
        </motion.div>

        {/* Headlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE4] font-normal leading-[1.04] tracking-tight">
              All the pieces. <br />
              One <span className="text-[#19A878] italic">powerful</span> system.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <p className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed max-w-sm">
              We connect strategy, creativity, technology and growth to build a digital ecosystem that drives real results.
            </p>
          </div>
        </div>

        {/* 6 Connected Nodes System with Illuminated Line */}
        <div className="relative pt-6 pb-12">
          
          {/* Connecting Glowing Emerald Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-[#19A878]/30" />
            <div
              className="h-full bg-[#19A878] transition-all duration-500 shadow-[0_0_15px_#19A878]"
              style={{ width: `${((activeNode + 1) / nodes.length) * 100}%` }}
            />
          </div>

          {/* 6 Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = idx === activeNode;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(idx)}
                  onMouseEnter={() => setActiveNode(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circle Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'border-[#19A878] bg-[#063C2D] text-[#D4AF37] scale-110 shadow-[0_0_20px_rgba(25,168,120,0.5)]'
                          : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#CFC9BB]/70 group-hover:border-[#19A878]/60'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-sans text-xs font-bold tracking-[0.18em] uppercase mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[#19A878]' : 'text-[#F3EFE4]'
                    }`}
                  >
                    {node.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] text-[#CFC9BB]/80 font-light leading-relaxed max-w-[150px]">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
