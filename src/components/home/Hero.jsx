'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function usePrefersReducedMotion() {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMatches(mq.matches);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return matches;
}

export default function Hero() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

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
        href: '/services/social-media-marketing',
      },
      secondaryCta: {
        text: 'View Our Approach',
        href: '/about',
      },
      image: '/images/hero/hero-marketing-performance.webp',
      alt: 'Luxury Marketing Analytics Dashboard with Lead Metrics',
      objectPosition: 'object-[78%_center] sm:object-right lg:object-[80%_center]',
      overlayGradient:
        'linear-gradient(90deg, rgba(8, 11, 10, 0.52) 0%, rgba(8, 11, 10, 0.38) 35%, rgba(6, 24, 18, 0.12) 55%, transparent 75%)',
    },
    {
      id: '02',
      category: 'BRAND STRATEGY',
      headline: 'Build a Brand People Remember.',
      description:
        'Define your positioning, establish a distinctive identity and create a brand that earns recognition and trust.',
      primaryCta: {
        text: 'Build Your Brand',
        href: '/services/branding',
      },
      secondaryCta: {
        text: 'Explore Case Studies',
        href: '/work',
      },
      image: '/images/hero/hero-brand-strategy.webp',
      alt: 'Luxury Emerald Green Brand Book and Bespoke Stationery',
      objectPosition: 'object-[70%_center] sm:object-center lg:object-[75%_center]',
      overlayGradient:
        'linear-gradient(90deg, rgba(6, 20, 15, 0.55) 0%, rgba(6, 20, 15, 0.40) 35%, rgba(6, 28, 20, 0.14) 55%, transparent 75%)',
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
        href: '/work',
      },
      image: '/images/hero/hero-web-development.webp',
      alt: 'Aarsika Luxury E-Commerce Web Design Showcase on Laptop and Mobile',
      objectPosition: 'object-[75%_center] sm:object-right lg:object-[78%_center]',
      overlayGradient:
        'linear-gradient(90deg, rgba(8, 11, 10, 0.46) 0%, rgba(8, 11, 10, 0.32) 35%, rgba(6, 24, 18, 0.10) 55%, transparent 75%)',
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
      alt: 'Luxury Lead Analytics Dashboard and Customer Pipeline Showcase',
      objectPosition: 'object-[75%_center] sm:object-right lg:object-[78%_center]',
      overlayGradient:
        'linear-gradient(90deg, rgba(8, 11, 10, 0.50) 0%, rgba(8, 11, 10, 0.35) 35%, rgba(8, 11, 10, 0.12) 55%, transparent 75%)',
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
        href: '/work',
      },
      image: '/images/hero/hero-social-content.webp',
      alt: 'Digital Campaign Content Performance and Social Media Showcase',
      objectPosition: 'object-[78%_center] sm:object-right lg:object-[80%_center]',
      overlayGradient:
        'linear-gradient(90deg, rgba(8, 11, 10, 0.50) 0%, rgba(8, 11, 10, 0.35) 35%, rgba(6, 24, 18, 0.12) 55%, transparent 75%)',
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
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchCancel={() => setIsPaused(false)}
      className="relative min-h-[100svh] pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 bg-[#080B0A] text-[#F3EFE4] overflow-hidden flex items-center select-none"
    >
      {/* ========================================================================= */}
      {/* BACKGROUND IMAGE SLIDER (Smooth 800ms Crossfade)                           */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <div
          key="slide-0-static"
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
            currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <Image
            src={slides[0].image}
            alt={slides[0].alt}
            fill
            priority
            fetchPriority="high"
            className={`object-cover ${slides[0].objectPosition}`}
            sizes="100vw"
            quality={75}
          />

          {/* Directional Vignette Overlay Tailored Per Slide: subtle ~50% opacity near text, ~20% in middle, 0% on right */}
          <div
            className="absolute inset-0 hidden sm:block pointer-events-none transition-opacity duration-700"
            style={{ background: slides[0].overlayGradient }}
          />

          {/* Mobile Viewport Scrim: rich emerald-obsidian gradient ensuring crisp white typography & CTA contrast over bright imagery */}
          <div
            className="absolute inset-0 sm:hidden pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(8, 11, 10, 0.88) 0%, rgba(8, 11, 10, 0.78) 25%, rgba(6, 24, 18, 0.70) 50%, rgba(8, 11, 10, 0.72) 75%, rgba(8, 11, 10, 0.85) 100%)',
            }}
          />

          {/* Mobile Directional Vignette: subtle radial cushion directly behind editorial text & actions */}
          <div
            className="absolute inset-0 sm:hidden pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 35% 42%, rgba(8, 11, 10, 0.60) 0%, rgba(6, 20, 15, 0.35) 55%, transparent 85%)',
            }}
          />

          {/* Gentle Top Vignette for Floating Navbar Integration */}
          <div className="absolute top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-[#080B0A]/40 to-transparent pointer-events-none" />

          {/* Subtle Bottom Vignette for Slider Controls */}
          <div className="absolute bottom-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-t from-[#080B0A]/35 to-transparent pointer-events-none" />
        </div>

        {currentSlide !== 0 && (
          <div
            key={`slide-${currentSlide}`}
            className="absolute inset-0 w-full h-full z-10 transition-opacity duration-700 ease-out"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className={`object-cover ${slide.objectPosition}`}
              sizes="100vw"
              quality={75}
            />

            <div
              className="absolute inset-0 hidden sm:block pointer-events-none"
              style={{ background: slide.overlayGradient }}
            />

            <div
              className="absolute inset-0 sm:hidden pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(8, 11, 10, 0.82) 0%, rgba(8, 11, 10, 0.65) 38%, rgba(6, 20, 15, 0.40) 60%, transparent 82%)',
              }}
            />

            <div className="absolute top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-[#080B0A]/40 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-t from-[#080B0A]/35 to-transparent pointer-events-none" />
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* SLIDE FOREGROUND CONTENT & EDITORIAL TYPOGRAPHY                           */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px] relative">
          {/* Subtle localized soft scrim directly behind text copy for effortless legibility across all screen sizes */}
          <div
            className="absolute -inset-4 sm:-inset-8 rounded-3xl pointer-events-none -z-10 opacity-70 blur-2xl block"
            style={{
              background: 'radial-gradient(ellipse at 30% 45%, rgba(8, 11, 10, 0.65) 0%, rgba(6, 24, 18, 0.35) 60%, transparent 85%)',
            }}
          />

          <div key={slide.id} className="transition-opacity duration-300">
            {/* Category Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D4AF37] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                {slide.id}
              </span>
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
              <span className="text-[10.5px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#D4AF37] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                {slide.category}
              </span>
            </div>

            {/* Main Headline (h1 for SEO) */}
            <h1 className="font-roboto text-3xl sm:text-5xl lg:text-[64px] xl:text-[72px] text-[#F3EFE4] font-normal leading-[1.08] tracking-tight mb-4 sm:mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
              {slide.headline}
            </h1>

            {/* Service Description */}
            <p className="font-lora text-sm sm:text-base lg:text-[18px] text-[#ECE7D8]/95 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
              {slide.description}
            </p>

            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href={slide.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs sm:text-[13px] font-roboto font-medium tracking-[0.14em] uppercase rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 active:translate-y-0 min-h-[46px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
              >
                <span>{slide.primaryCta.text}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2] text-[#F3EFE4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs sm:text-[13px] font-roboto font-medium tracking-[0.14em] uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 active:translate-y-0 min-h-[46px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
              >
                <span>{slide.secondaryCta.text}</span>
                <ArrowRight className="w-4 h-4 text-[#F3EFE4] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDER CONTROLS: PREV/NEXT ARROWS, PROGRESS DASHES, SLIDE COUNTER         */}
      {/* ========================================================================= */}
      <div className="absolute bottom-6 sm:bottom-10 lg:bottom-12 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Left: Minimal Pagination Dashes */}
          <div className="flex items-center gap-1 sm:gap-2">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  className="relative min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded"
                >
                  <span
                    className={`h-1 rounded-full transition-all duration-300 shadow-sm block ${
                      isActive ? 'w-8 sm:w-10 bg-[#D4AF37]' : 'w-4 sm:w-5 bg-white/35 hover:bg-white/60'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Counter and Prev / Next Navigation Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Slide Counter */}
            <div className="font-sans text-xs sm:text-[13px] text-[#D4AF37] tracking-[0.2em] font-medium mr-1 sm:mr-2 drop-shadow-sm">
              <span className="text-[#F3EFE4] font-semibold">{slide.id}</span>
              <span className="text-white/35 mx-1.5">/</span>
              <span className="text-white/55">05</span>
            </div>

            {/* Prev Button */}
            <button
              type="button"
              aria-label="Previous Slide"
              onClick={prevSlide}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/25 hover:border-[#D4AF37] bg-[#080B0A]/60 hover:bg-[#080B0A]/85 backdrop-blur-md text-[#F3EFE4] hover:text-[#D4AF37] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.75]" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              aria-label="Next Slide"
              onClick={nextSlide}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/20 hover:border-[#D4AF37] bg-[#080B0A]/70 backdrop-blur-md text-[#F3EFE4] hover:text-[#D4AF37] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.75]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
