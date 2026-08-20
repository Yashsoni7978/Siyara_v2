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
  ArrowUpRight,
} from 'lucide-react';

export default function ServiceIndex({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const leftServices = [
    {
      id: '01',
      title: 'BRAND STRATEGY & IDENTITY',
      description: 'Architectural brand positioning, visual identity systems, and high-trust messaging.',
      icon: Compass,
      slug: '/services/brand-strategy',
    },
    {
      id: '02',
      title: 'SOCIAL MEDIA & DIGITAL MARKETING',
      description: 'Audience growth, brand awareness campaigns, and community engagement systems.',
      icon: Share2,
      slug: '/services/social-digital-marketing',
    },
    {
      id: '03',
      title: 'CONTENT & CREATIVE PRODUCTION',
      description: 'High-impact editorial content, brand storytelling, and video asset production.',
      icon: Video,
      slug: '/services/content-creative',
    },
    {
      id: '04',
      title: 'PERFORMANCE MARKETING',
      description: 'Data-driven paid media, customer acquisition campaigns, and ROI optimization.',
      icon: Target,
      slug: '/services/performance-marketing',
    },
    {
      id: '05',
      title: 'WEB DESIGN & DEVELOPMENT',
      description: 'Bespoke web applications, high-conversion digital portals, and fast engineering.',
      icon: Code,
      slug: '/services/web-design-development',
    },
  ];

  const rightServices = [
    {
      id: '06',
      title: 'AI & BUSINESS AUTOMATION',
      description: 'Intelligent AI workflows, business operations automation, and custom agents.',
      icon: Bot,
      slug: '/services/ai-automation',
    },
    {
      id: '07',
      title: 'E-COMMERCE & DIGITAL COMMERCE',
      description: 'Scalable D2C storefronts, automated subscriptions, and frictionless checkout.',
      icon: ShoppingBag,
      slug: '/services/ecommerce',
    },
    {
      id: '08',
      title: 'CRM, LEADS & CONVERSION SYSTEMS',
      description: 'High-intent lead capture funnels, automated CRM nurture, and CRO architecture.',
      icon: Filter,
      slug: '/services/crm-lead-systems',
    },
    {
      id: '09',
      title: 'SEO & GEO OPTIMIZATION',
      description: 'Organic search domination, AI generative search visibility, and local GEO rankings.',
      icon: Search,
      slug: '/services/seo-geo',
    },
    {
      id: '10',
      title: 'ANALYTICS, GROWTH & OPTIMIZATION',
      description: 'Comprehensive data tracking, performance dashboards, and continuous optimization.',
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
        className="group relative p-6 sm:p-8 bg-[#ECE7D8] hover:bg-[#F3EFE3] border border-[#B9923F]/30 hover:border-[#0B5E49] transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-md"
      >
        {/* Glow overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#0B5E49]/05 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
          {/* Icon in Circular Container */}
          <div
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
              isHovered
                ? 'border-[#0B5E49] bg-[#0B5E49] text-[#F3EFE3] scale-105 shadow-[0_0_15px_rgba(11,94,73,0.3)]'
                : 'border-[#0B5E49]/30 bg-[#F3EFE3] text-[#0B5E49]'
            }`}
          >
            <Icon className="w-5 h-5 stroke-[1.75]" />
          </div>

          {/* Number */}
          <span
            className={`font-serif text-3xl font-normal leading-none transition-colors duration-300 ${
              isHovered ? 'text-[#0B5E49]' : 'text-[#B9923F]'
            }`}
          >
            {item.id}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3
            className={`font-serif text-xl sm:text-2xl font-normal leading-tight mb-3 transition-colors duration-300 ${
              isHovered ? 'text-[#0B5E49]' : 'text-[#101613]'
            }`}
          >
            {item.title}
          </h3>

          <p className="font-sans text-xs text-[#101613]/70 font-light leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Action Arrow */}
          <div className="flex items-center justify-between pt-4 border-t border-[#B9923F]/20">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#0B5E49] group-hover:text-[#B9923F] transition-colors uppercase font-bold">
              EXPLORE CAPABILITY
            </span>
            <ArrowUpRight
              className={`w-4 h-4 text-[#0B5E49] transition-transform duration-300 ${
                isHovered ? 'translate-x-1 -translate-y-1 text-[#B9923F]' : 'opacity-70'
              }`}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services-index" className="relative py-28 sm:py-36 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            02
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            What We Build
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[0.98]">
            End-to-end capabilities <br />
            for <span className="text-[#0B5E49] italic font-normal">ambitious brands.</span>
          </h2>
        </motion.div>

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

