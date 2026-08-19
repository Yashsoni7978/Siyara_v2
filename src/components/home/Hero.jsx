import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  // Mouse position state for subtle desktop parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || shouldReduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalized values from -1 to 1
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePos({
      x: Math.max(-1, Math.min(1, normX)),
      y: Math.max(-1, Math.min(1, normY)),
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Custom motion ease curve
  const easeCustom = [0.16, 1, 0.3, 1];

  const fadeUp = (delayMs) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delayMs / 1000, ease: easeCustom },
    },
  });

  const scaleFade = (delayMs) => ({
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.0, delay: delayMs / 1000, ease: easeCustom },
    },
  });

  // Parallax offsets calculation
  const getParallaxStyle = (multiplier) => {
    if (isMobile || shouldReduceMotion) return {};
    return {
      transform: `translate3d(${mousePos.x * multiplier}px, ${mousePos.y * multiplier}px, 0)`,
      transition: 'transform 0.2s ease-out',
    };
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 bg-[#080B0A] overflow-hidden flex items-center"
    >
      {/* LAYER 0: Obsidian Base Dark Layer */}
      <div className="absolute inset-0 bg-[#080B0A] z-0" />

      {/* LAYER 1: Emerald Atmosphere Smoke (Background framing) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.15 }}
        style={getParallaxStyle(4)}
        className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
      >
        <img
          src="/images/Gemini_Generated_Image_v8ldi5v8ldi5v8ld.png"
          alt="Siyara Emerald Atmosphere"
          className="w-full h-full object-cover object-center mix-blend-screen opacity-70 animate-atmosphere radial-mask-soft scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-[#080B0A]/80" />
      </motion.div>

      {/* LAYER 2: Emerald Flowing Energy Wisps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.2 }}
        style={getParallaxStyle(8)}
        className="absolute inset-0 pointer-events-none z-[2] overflow-hidden"
      >
        <img
          src="/images/Gemini_Generated_Image_aid1xoaid1xoaid1.png"
          alt="Emerald Energy Wisps"
          className="w-full h-full object-cover object-right-center mix-blend-screen opacity-65 animate-energy-drift scale-110"
        />
      </motion.div>

      {/* LAYER 3: Soft Ambient Radial Glow Behind Portal */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-glow opacity-60 blur-3xl pointer-events-none z-[3]" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* LEFT COLUMN: Editorial Typography & Action CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(450)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
                01
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                DIGITAL EXPERIENCES.
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="mb-8">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(600)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                WE BUILD
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(700)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                BRANDS.
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(800)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#E5C378] italic drop-shadow-[0_4px_24px_rgba(212,175,55,0.15)]"
              >
                THAT DOMINATE.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(900)}
              className="mb-10 max-w-lg"
            >
              <p className="font-sans text-base sm:text-lg text-[#F3EFE4]/90 font-medium tracking-wide leading-relaxed">
                Strategy. Design. Technology.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#CFC9BB]/80 font-light leading-relaxed mt-1">
                Everything you need to grow online.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(1000)}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-4 border-b border-[#D4AF37]/40 text-[#F3EFE4] hover:text-[#D4AF37] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 group"
              >
                <span>VIEW OUR WORK</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Siyara Digital Portal Visual Centerpiece */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleFade(1100)}
              className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
            >
              
              {/* LAYER 4: Champagne Gold Energy Accent Layer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.4 }}
                style={getParallaxStyle(12)}
                className="absolute -inset-10 pointer-events-none z-[4] overflow-hidden"
              >
                <img
                  src="/images/Gemini_Generated_Image_p03y7gp03y7gp03y.png"
                  alt="Champagne Gold Energy Ribbons"
                  className="w-full h-full object-contain mix-blend-screen opacity-65 animate-gold-flow"
                />
              </motion.div>

              {/* LAYER 5: Gold Glints / Particle Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.6 }}
                style={getParallaxStyle(16)}
                className="absolute -inset-12 pointer-events-none z-[5] overflow-hidden"
              >
                <img
                  src="/images/Gemini_Generated_Image_19sjf619sjf619sj.png"
                  alt="Gold Light Glints"
                  className="w-full h-full object-cover mix-blend-screen opacity-45 animate-glint radial-mask-center"
                />
              </motion.div>

              {/* Grounding Portal Soft Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-black/80 blur-2xl rounded-full z-[6] pointer-events-none" />

              {/* LAYER 6: Primary Siyara 3D Digital Portal Display */}
              <div style={getParallaxStyle(6)} className="relative z-[7]">
                <div className="relative animate-portal-float">
                  
                  {/* Subtle Emerald & Gold Accent Ambient Halo */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#063C2D]/50 via-[#19A878]/20 to-[#D4AF37]/20 blur-xl opacity-75 rounded-3xl pointer-events-none" />

                  {/* Siyara Portal 3D Frame Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-sm bg-[#080B0A]/40">
                    <img
                      src="/images/Gemini_Generated_Image_i6e37zi6e37zi6e3.png"
                      alt="Siyara 3D Digital Portal Display"
                      className="w-full h-auto object-cover object-center transform transition-transform duration-700 hover:scale-[1.02]"
                    />

                    {/* Subtle Overlay Reflection Gradient for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
