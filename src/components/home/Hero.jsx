'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // The 5 official service slides with dedicated visual assets and copy
  const slides = [
    {
      id: '01',
      category: 'DIGITAL MARKETING & PERFORMANCE',
      headline: 'Make Every Campaign Count.',
      description:
        'Strategic digital campaigns that reach the right audience, generate quality leads and turn marketing investment into measurable growth.',
      primaryCta: {
        text: 'Explore Marketing',
        href: '/services/performance-marketing',
      },
      secondaryCta: {
        text: 'View Our Approach',
        href: '/about',
      },
      image: '/images/hero/hero-marketing-performance.webp',
      alt: 'Luxury Marketing Analytics Dashboard',
    },
    {
      id: '02',
      category: 'BRAND STRATEGY',
      headline: 'Build a Brand People Remember.',
      description:
        'Define your positioning, establish a distinctive identity and create a brand that earns recognition and trust.',
      primaryCta: {
        text: 'Build Your Brand',
        href: '/services/brand-strategy',
      },
      secondaryCta: {
        text: 'Explore Brand Strategy',
        href: '/services/brand-strategy',
      },
      image: '/images/hero/hero-brand-strategy.webp',
      alt: 'Luxury Forest Green Branding Flatlay',
    },
    {
      id: '03',
      category: 'WEBSITE DESIGN & DEVELOPMENT',
      headline: 'Digital Experiences That Move Business Forward.',
      description:
        'High-performing websites built around thoughtful design, seamless experiences and business objectives.',
      primaryCta: {
        text: 'Build Your Website',
        href: '/services/web-design-development',
      },
      secondaryCta: {
        text: 'Explore Our Work',
        href: '/#work',
      },
      image: '/images/hero/hero-web-development.webp',
      alt: 'Aarsika Luxury Web Design Showcase',
    },
    {
      id: '04',
      category: 'CRM & LEAD MANAGEMENT',
      headline: 'Turn Every Enquiry Into Opportunity.',
      description:
        'Organise leads, streamline follow-ups and manage your business pipeline with connected systems built for growth.',
      primaryCta: {
        text: 'Explore CRM Solutions',
        href: '/services/crm-lead-systems',
      },
      secondaryCta: {
        text: 'Book a Consultation',
        href: '/contact',
      },
      image: '/images/hero/hero-crm-lead-management.webp',
      alt: 'Luxury Lead Analytics Dashboard',
    },
    {
      id: '05',
      category: 'SOCIAL MEDIA & CONTENT',
      headline: 'Create Content That Gets Noticed.',
      description:
        'Build a stronger digital presence through thoughtful creative, engaging content and consistent social media communication.',
      primaryCta: {
        text: 'Explore Content Services',
        href: '/services/content-creative',
      },
      secondaryCta: {
        text: 'See Our Creative Work',
        href: '/#work',
      },
      image: '/images/hero/hero-social-content.webp',
      alt: 'Luxury Marketing Analytics Dashboard',
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay progression every 6 seconds, paused on hover
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, shouldReduceMotion, nextSlide, currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      aria-label="Siyara Innovations Services Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[92svh] sm:min-h-[100svh] pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 bg-[#080B0A] text-[#F3EFE4] overflow-hidden flex items-center select-none"
    >
      {/* ========================================================================= */}
      {/* BACKGROUND IMAGE SLIDER (Smooth 800ms Crossfade)                           */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={currentSlide === 0}
              className="object-cover object-center lg:object-right"
              sizes="100vw"
              quality={90}
            />

            {/* Left Vignette Overlay for Crisp Typography Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080B0A] via-[#080B0A]/85 sm:via-[#080B0A]/75 to-[#080B0A]/35 lg:to-transparent pointer-events-none" />

            {/* Top & Bottom Vignette for Seamless Navigation & Marquee Transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080B0A]/80 via-transparent to-[#080B0A] pointer-events-none" />

            {/* Subtle Atmospheric Emerald Lighting */}
            <div
              className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 hidden lg:block"
              style={{
                background: 'radial-gradient(circle at center, rgba(11, 90, 67, 0.45) 0%, transparent 65%)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE FOREGROUND CONTENT & EDITORIAL TYPOGRAPHY                           */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="max-w-2xl xl:max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Category Eyebrow */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D4AF37]">
                  {slide.id}
                </span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
                <span className="text-[10.5px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                  {slide.category}
                </span>
              </div>

              {/* Main Headline (h1 for SEO) */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[60px] xl:text-[68px] text-[#F3EFE4] font-normal leading-[1.05] tracking-tight mb-4 sm:mb-6">
                {slide.headline}
              </h1>

              {/* Service Description */}
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#ECE7D8]/85 font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
                {slide.description}
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4AF37] hover:bg-[#E5C378] text-[#080B0A] text-xs font-sans font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] group"
                >
                  <span>{slide.primaryCta.text}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2] text-[#080B0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#F3EFE4]/25 hover:border-[#D4AF37]/60 text-[#F3EFE4] hover:text-[#D4AF37] bg-[#080B0A]/40 backdrop-blur-sm text-xs font-sans font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 group min-h-[48px]"
                >
                  <span>{slide.secondaryCta.text}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDER CONTROLS: PREV/NEXT ARROWS, PROGRESS DASHES, SLIDE COUNTER         */}
      {/* ========================================================================= */}
      <div className="absolute bottom-6 sm:bottom-10 lg:bottom-12 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Left: Minimal Pagination Dashes */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? 'w-8 sm:w-10 bg-[#D4AF37]' : 'w-4 sm:w-5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              );
            })}
          </div>

          {/* Right: Counter and Prev / Next Navigation Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Slide Counter */}
            <div className="font-sans text-xs sm:text-[13px] text-[#D4AF37] tracking-[0.2em] font-medium mr-1 sm:mr-2">
              <span className="text-[#F3EFE4] font-semibold">{slide.id}</span>
              <span className="text-white/30 mx-1.5">/</span>
              <span className="text-white/50">05</span>
            </div>

            {/* Prev Button */}
            <button
              type="button"
              aria-label="Previous Slide"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#D4AF37] bg-[#080B0A]/70 backdrop-blur-md text-[#F3EFE4] hover:text-[#D4AF37] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.75]" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              aria-label="Next Slide"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#D4AF37] bg-[#080B0A]/70 backdrop-blur-md text-[#F3EFE4] hover:text-[#D4AF37] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.75]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
