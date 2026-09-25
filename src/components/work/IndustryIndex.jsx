'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Gem,
  Building,
  Hotel,
  ShieldPlus,
  Shirt,
  Coffee,
  ShoppingBag,
  Ticket,
  Mic,
  Compass,
  Cpu,
  Wallet,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getIndustryCategories } from '../../data/projectsData';

// Map string icon names to Lucide components
const iconMap = {
  Grid: LayoutGrid,
  Gem: Gem,
  Building: Building,
  Hotel: Hotel,
  ShieldPlus: ShieldPlus,
  Shirt: Shirt,
  Coffee: Coffee,
  ShoppingBag: ShoppingBag,
  Ticket: Ticket,
  Mic: Mic,
  Compass: Compass,
  Cpu: Cpu,
  Wallet: Wallet,
  Layers: Layers
};

export default function IndustryIndex({ selectedIndustry, onSelectIndustry }) {
  const categories = getIndustryCategories();
  const scrollContainerRef = useRef(null);

  // Split categories into 2 lines / rows
  const midPoint = Math.ceil(categories.length / 2);
  const row1 = categories.slice(0, midPoint);
  const row2 = categories.slice(midPoint);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const renderCategoryButton = (cat) => {
    const IconComponent = iconMap[cat.icon] || LayoutGrid;
    const isSelected = selectedIndustry === cat.id;

    return (
      <button
        key={cat.id}
        onClick={() => onSelectIndustry(cat.id)}
        className={`flex-shrink-0 flex items-center gap-3 sm:gap-3.5 px-4 sm:px-5 py-3 sm:py-3.5 border transition-all duration-300 relative text-left group ${
          isSelected
            ? 'bg-[#101613] text-[#F3EFE3] border-[#101613] shadow-lg scale-[1.02]'
            : 'bg-[#ECE7D8]/70 hover:bg-[#ECE7D8] text-[#101613]/80 border-[#101613]/10 hover:border-[#0B5E49]/30'
        }`}
      >
        {/* Icon Container */}
        <div
          className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center transition-colors ${
            isSelected ? 'text-[#B9923F]' : 'text-[#0B5E49] group-hover:text-[#B9923F]'
          }`}
        >
          <IconComponent className="w-4 h-4 stroke-[1.8]" />
        </div>

        {/* Thin Vertical Rule */}
        <div className={`h-6 w-[1px] ${isSelected ? 'bg-white/15' : 'bg-[#101613]/15'}`} />

        {/* Text Content */}
        <div className="flex flex-col pr-1">
          <span
            className={`font-sans text-[11px] sm:text-[12px] font-bold tracking-[0.18em] uppercase whitespace-nowrap ${
              isSelected ? 'text-[#F3EFE3]' : 'text-[#101613]'
            }`}
          >
            {cat.name}
          </span>
          <span
            className={`font-sans text-[9px] sm:text-[10px] tracking-wider uppercase font-medium mt-0.5 whitespace-nowrap ${
              isSelected ? 'text-[#B9923F]' : 'text-[#101613]/60'
            }`}
          >
            {cat.count}
          </span>
        </div>

        {/* Active Indicator Underline */}
        {isSelected && (
          <motion.div
            layoutId="active-work-industry-indicator"
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B9923F]"
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          />
        )}
      </button>
    );
  };

  return (
    <section id="explore-industry" className="relative py-12 sm:py-16 bg-[#F3EFE3] text-[#101613] border-b border-[#0B5E49]/10">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#B9923F]">
              01
            </span>
            <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
            <span className="text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.24em] text-[#0B5E49] uppercase">
              EXPLORE BY INDUSTRY
            </span>
          </motion.div>

          {/* Controls for Scroll */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full border border-[#101613]/20 flex items-center justify-center text-[#101613] hover:border-[#0B5E49] hover:bg-[#0B5E49] hover:text-[#F3EFE3] transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full border border-[#101613]/20 flex items-center justify-center text-[#101613] hover:border-[#0B5E49] hover:bg-[#0B5E49] hover:text-[#F3EFE3] transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Line / 2-Row Editorial Industry Selector Container */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-4 pt-1 no-scrollbar select-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Row 1 */}
          <div className="flex items-center gap-3 sm:gap-4">
            {row1.map(renderCategoryButton)}
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-3 sm:gap-4">
            {row2.map(renderCategoryButton)}
          </div>
        </div>

      </div>
    </section>
  );
}
