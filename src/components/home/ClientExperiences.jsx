'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: '01',
    quoteLead:
      'Siyara understood our vision from the very first conversation and delivered a website that truly represents our brand. The entire process was ',
    quoteHighlight: 'smooth, professional and well-structured.',
    author: 'Founder',
    category: 'HOSPITALITY BRAND',
  },
  {
    id: '02',
    quoteLead:
      'Working with Siyara brought clear structure and refined aesthetics to our online presence. Their attention to detail and technical execution ',
    quoteHighlight: 'exceeded our expectations at every stage.',
    author: 'Managing Director',
    category: 'E-COMMERCE BRAND',
  },
  {
    id: '03',
    quoteLead:
      'The collaborative process was straightforward and focused from day one. Siyara delivered a sophisticated platform that ',
    quoteHighlight: 'communicates our value clearly to corporate clients.',
    author: 'Principal',
    category: 'BUSINESS & SERVICES BRAND',
  },
  {
    id: '04',
    quoteLead:
      'From initial concepts to final launch, the team demonstrated remarkable technical discipline and craft. Our digital experience ',
    quoteHighlight: 'matches the high standard of our physical events.',
    author: 'Creative Director',
    category: 'EVENTS & EXPERIENCES BRAND',
  },
];

const categories = [
  {
    title: 'HOSPITALITY',
    subtitle: 'Hotels & Resorts',
  },
  {
    title: 'E-COMMERCE',
    subtitle: 'Consumer Brands',
  },
  {
    title: 'BRAND WEBSITE',
    subtitle: 'Business & Services',
  },
  {
    title: 'EVENTS',
    subtitle: 'Events & Experiences',
  },
  {
    title: 'RESTAURANT',
    subtitle: 'Food & Beverage',
  },
];

export default function ClientExperiences() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="client-experiences"
      aria-label="Client Experiences and Testimonials"
      aria-roledescription="carousel"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#070A09] text-[#F3EFE4] overflow-hidden border-t border-[#D9B45F]/15"
    >
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/40 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(12, 107, 82, 0.14) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Top Composition: Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-stretch">
          {/* Left Column: Section Tag, Editorial Headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between pr-0 lg:pr-10 xl:pr-12"
          >
            <div>
              {/* Small Section Header */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#F3EFE4]">
                  05
                </span>
                <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
                <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
                  CLIENT EXPERIENCES
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-[#F3EFE4] font-normal leading-[1.12] tracking-tight">
                Trusted by<br />
                businesses<br />
                that choose<br />
                Siyara,{' '}
                <span className="italic font-roboto text-[#D9B45F] font-normal">
                  grow<br />
                  differently.
                </span>
              </h2>
            </div>

            {/* Supporting Description */}
            <p className="font-lora text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed max-w-sm mt-8 sm:mt-10 lg:mt-12">
              Long-term relationships, meaningful collaborations and digital experiences that create real business impact.
            </p>
          </motion.div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1 flex justify-center">
            <div className="w-[1px] h-full bg-white/10" />
          </div>

          {/* Right Column: Testimonial Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between pl-0 lg:pl-6 xl:pl-8"
          >
            {/* Top Row: Sub-label & Slide Counter */}
            <div className="flex items-center justify-between pb-4 sm:pb-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.22em] text-[#D9B45F] uppercase">
                  CLIENT TESTIMONIAL
                </span>
                <span className="h-[1px] w-8 sm:w-10 bg-[#D9B45F]/40" />
              </div>

              <div className="text-xs sm:text-sm font-sans tracking-[0.24em] text-[#9D9B91] tabular-nums font-light">
                {`${current.id} / 04`}
              </div>
            </div>

            {/* Middle Row: Quote Mark + Large Testimonial Quotation */}
            <div className="flex items-start gap-4 sm:gap-6 my-auto py-4 sm:py-6">
              {/* Custom Champagne-Gold Quotation Mark */}
              <svg
                width="36"
                height="30"
                viewBox="0 0 40 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#D9B45F] shrink-0 mt-1 select-none"
                aria-hidden="true"
              >
                <path
                  d="M14 6C11 10.5 8.5 15 8 19C9 18.5 10.5 18 12 18C16 18 19 21 19 25.5C19 30 15.5 33.5 11 33.5C6 33.5 3 29.5 3 24C3 16 8 8 16 4L14 6ZM32 6C29 10.5 26.5 15 26 19C27 18.5 28.5 18 30 18C34 18 37 21 37 25.5C37 30 33.5 33.5 29 33.5C24 33.5 21 29.5 21 24C21 16 26 8 34 4L32 6Z"
                  fill="currentColor"
                />
              </svg>

              {/* Animated Testimonial Text */}
              <div className="flex-1 min-h-[140px] sm:min-h-[110px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-lora text-lg sm:text-xl lg:text-2xl xl:text-[27px] text-[#F3EFE4] font-normal leading-[1.4] tracking-normal"
                  >
                    {current.quoteLead}
                    <span className="text-[#D9B45F] font-normal">
                      {current.quoteHighlight}
                    </span>
                  </motion.blockquote>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Row: Attribution & Minimal Circular Navigation Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 sm:pt-8 mt-2 sm:mt-4">
              {/* Author Attribution */}
              <div className="flex items-center gap-3">
                <span className="w-6 sm:w-8 h-[1px] bg-[#D9B45F]/60 shrink-0" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-sm sm:text-base font-sans text-[#F3EFE4] font-light">
                      {current.author}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.22em] text-[#D9B45F] uppercase mt-0.5">
                      {current.category}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Circular Navigation Buttons */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-[#D9B45F] flex items-center justify-center text-white/80 hover:text-[#D9B45F] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#D9B45F] cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#D9B45F] hover:bg-[#c9a34e] flex items-center justify-center text-[#070A09] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#D9B45F] cursor-pointer shadow-md"
                >
                  <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Industry Strip */}
        <div className="mt-14 sm:mt-18 lg:mt-24 pt-8 sm:pt-10 border-t border-white/10">
          {/* Desktop Layout: Horizontal Strip with Vertical Dividers */}
          <div className="hidden lg:flex items-center justify-between divide-x divide-white/10">
            {/* Label Column */}
            <div className="pr-6 xl:pr-8 shrink-0 flex items-center gap-4">
              <div className="text-left">
                <div className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase leading-tight">
                  BUSINESSES
                </div>
                <div className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase leading-tight mt-0.5">
                  WE&apos;VE WORKED WITH
                </div>
              </div>
              <span className="w-6 h-[1px] bg-[#D9B45F]/50 shrink-0" />
            </div>

            {/* 5 Categories */}
            {categories.map((cat) => (
              <div key={cat.title} className="flex-1 px-4 text-center">
                <div className="text-[11px] xl:text-xs font-sans font-medium tracking-[0.18em] text-[#F3EFE4] uppercase">
                  {cat.title}
                </div>
                <div className="text-[11px] xl:text-xs font-sans text-[#9D9B91] font-light mt-1">
                  {cat.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Layout: Clean Compact Arrangement */}
          <div className="lg:hidden space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-[11px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase leading-tight">
                BUSINESSES WE&apos;VE WORKED WITH
              </div>
              <span className="w-8 h-[1px] bg-[#D9B45F]/50" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]"
                >
                  <div className="text-[11px] font-sans font-medium tracking-[0.16em] text-[#F3EFE4] uppercase">
                    {cat.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-sans text-[#9D9B91] font-light mt-1">
                    {cat.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
