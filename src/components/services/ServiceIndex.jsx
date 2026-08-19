import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Video,
  Code,
  ShoppingBag,
  Search,
  Share2,
  Target,
  Bot,
  Filter,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

export default function ServiceIndex({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const leftServices = [
    {
      id: '01',
      title: 'BRAND STRATEGY & IDENTITY',
      description: 'We craft memorable brands with strategy, positioning and design.',
      icon: Compass,
      slug: '/services/brand-strategy',
    },
    {
      id: '02',
      title: 'CONTENT & CREATIVE PRODUCTION',
      description: 'High-impact content that tells your story and drives engagement.',
      icon: Video,
      slug: '/services/content-creative',
    },
    {
      id: '03',
      title: 'WEB DESIGN & DEVELOPMENT',
      description: 'Fast, beautiful and conversion-focused websites that perform.',
      icon: Code,
      slug: '/services/web-design-development',
    },
    {
      id: '04',
      title: 'E-COMMERCE & DIGITAL COMMERCE',
      description: 'Scalable online stores designed to sell, retain and grow.',
      icon: ShoppingBag,
      slug: '/services/ecommerce',
    },
    {
      id: '05',
      title: 'SEO & GEO',
      description: 'Rank higher on Google and get discovered across AI and search.',
      icon: Search,
      slug: '/services/seo-geo',
    },
  ];

  const rightServices = [
    {
      id: '06',
      title: 'SOCIAL MEDIA & DIGITAL MARKETING',
      description: 'Build your presence, grow your audience and create real impact.',
      icon: Share2,
      slug: '/services/social-digital-marketing',
    },
    {
      id: '07',
      title: 'PERFORMANCE MARKETING',
      description: 'ROI-driven campaigns that bring in leads, sales and measurable growth.',
      icon: Target,
      slug: '/services/performance-marketing',
    },
    {
      id: '08',
      title: 'AI & BUSINESS AUTOMATION',
      description: 'Automate workflows, save time and make your business smarter.',
      icon: Bot,
      slug: '/services/ai-automation',
    },
    {
      id: '09',
      title: 'CRM, LEADS & CONVERSION SYSTEMS',
      description: 'Capture, nurture and convert leads with smart systems that work for you.',
      icon: Filter,
      slug: '/services/crm-lead-systems',
    },
    {
      id: '10',
      title: 'ANALYTICS, GROWTH & OPTIMIZATION',
      description: 'Track, analyse and optimize for continuous growth and performance.',
      icon: BarChart3,
      slug: '/services/growth-optimization',
    },
  ];

  const renderServiceCard = (item, globalIdx) => {
    const Icon = item.icon;
    const isHovered = hoveredIdx === globalIdx;

    return (
      <div
        key={item.id}
        onMouseEnter={() => setHoveredIdx(globalIdx)}
        onMouseLeave={() => setHoveredIdx(null)}
        onClick={() => {
          if (onNavigate) onNavigate(item.slug);
        }}
        className="group relative p-6 sm:p-8 bg-[#080B0A] hover:bg-[#063C2D]/30 border border-[#D4AF37]/15 hover:border-[#19A878]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
      >
        {/* Glow overlay */}
        <div
          className={`absolute inset-0 bg-radial from-[#19A878]/15 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="relative z-10 flex items-start gap-4 mb-6">
          {/* Icon in Circular Container */}
          <div
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
              isHovered
                ? 'border-[#19A878] bg-[#063C2D] text-[#D4AF37] scale-110 shadow-[0_0_15px_rgba(25,168,120,0.4)]'
                : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#19A878]'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>

          {/* Number */}
          <span
            className={`font-serif text-3xl font-normal leading-none ml-auto transition-colors duration-300 ${
              isHovered ? 'text-[#D4AF37]' : 'text-[#19A878]'
            }`}
          >
            {item.id}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3
            className={`font-serif text-xl sm:text-2xl font-normal leading-tight mb-3 transition-colors duration-300 ${
              isHovered ? 'text-[#E5C378]' : 'text-[#F3EFE4]'
            }`}
          >
            {item.title}
          </h3>

          <p className="font-sans text-xs text-[#CFC9BB]/75 font-light leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Action Arrow */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] group-hover:text-[#19A878] transition-colors uppercase">
              LEARN MORE
            </span>
            <ArrowRight
              className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 ${
                isHovered ? 'translate-x-1.5 text-[#19A878]' : 'opacity-60'
              }`}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services-index" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Atmosphere Glow */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-70 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#19A878] uppercase">
            WHAT WE DO
          </span>
          <span className="h-[1px] w-8 bg-[#19A878]/50" />
        </div>

        <div className="mb-16 max-w-3xl">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.08]">
            End-to-end capabilities for <br />
            modern <span className="text-[#19A878] italic">digital brands.</span>
          </h2>
        </div>

        {/* 2-Column Editorial Service Index Grid (Left 5, Right 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {leftServices.map((service, idx) => renderServiceCard(service, idx))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {rightServices.map((service, idx) => renderServiceCard(service, idx + 5))}
          </div>

        </div>

      </div>
    </section>
  );
}
