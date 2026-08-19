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

  const easeCustom = [0.16, 1, 0.3, 1];

  const fadeUp = (delayMs) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delayMs / 1000, ease: easeCustom },
    },
  });

  const scaleFade = (delayMs) => ({
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.0, delay: delayMs / 1000, ease: easeCustom },
    },
  });

  const getParallaxStyle = (multiplier) => {
    if (isMobile || shouldReduceMotion) return {};
    return {
      transform: `translate3d(${mousePos.x * multiplier}px, ${mousePos.y * multiplier}px, 0)`,
      transition: 'transform 0.25s ease-out',
    };
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-[96vh] pt-32 pb-16 lg:pt-36 lg:pb-24 bg-[#080B0A] overflow-hidden flex items-center"
    >
      {/* CANVAS BASE: Obsidian Canvas */}
      <div className="absolute inset-0 bg-[#080B0A] z-0" />

      {/* LAYER 1: Emerald Atmosphere Background Smoke (Seamless Blend) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.15 }}
        style={{
          ...getParallaxStyle(3),
          maskImage: 'radial-gradient(ellipse 85% 85% at 70% 50%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 70% 50%, black 30%, transparent 85%)',
        }}
        className="absolute inset-0 pointer-events-none z-[1]"
      >
        <img
          src="/images/Gemini_Generated_Image_v8ldi5v8ldi5v8ld.png"
          alt="Siyara Emerald Atmosphere"
          className="w-full h-full object-cover object-right mix-blend-screen opacity-50 animate-atmosphere scale-105"
        />
      </motion.div>

      {/* LAYER 2: Deep Emerald Ambient Glow Sphere Behind Portal */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#063C2D]/60 via-[#19A878]/20 to-transparent blur-3xl rounded-full pointer-events-none z-[2]" />

      {/* LAYER 3: Emerald Energy Wisps (Right-Anchored) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
        style={{
          ...getParallaxStyle(6),
          maskImage: 'radial-gradient(ellipse 75% 75% at 75% 50%, black 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 75% 50%, black 25%, transparent 80%)',
        }}
        className="absolute right-0 top-0 w-full lg:w-[65%] h-full pointer-events-none z-[3]"
      >
        <img
          src="/images/Gemini_Generated_Image_aid1xoaid1xoaid1.png"
          alt="Emerald Energy Wisps"
          className="w-full h-full object-cover object-right mix-blend-screen opacity-45 animate-energy-drift scale-105"
        />
      </motion.div>

      {/* LAYER 4: Champagne Gold Energy Ribbons (Right-Anchored - NO Headline Crossing or Screen Edge Crop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.3 }}
        style={{
          ...getParallaxStyle(10),
          maskImage: 'radial-gradient(ellipse 80% 80% at 65% 50%, black 35%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 65% 50%, black 35%, transparent 85%)',
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[55%] h-[85%] pointer-events-none z-[4]"
      >
        <img
          src="/images/Gemini_Generated_Image_p03y7gp03y7gp03y.png"
          alt="Gold Energy Ribbons"
          className="w-full h-full object-cover object-right mix-blend-screen opacity-55 animate-gold-flow"
        />
      </motion.div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* LEFT COLUMN: Clean Editorial Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(450)}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
                01
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                DIGITAL EXPERIENCES.
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <div className="mb-6">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(580)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                WE BUILD
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(680)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                BRANDS.
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(780)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#E5C378] italic drop-shadow-[0_4px_24px_rgba(212,175,55,0.18)]"
              >
                THAT DOMINATE.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(880)}
              className="mb-8 max-w-md"
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
              variants={fadeUp(980)}
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

          {/* RIGHT COLUMN: PERFECTED SEAMLESS 3D PORTAL OBJECT */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-center lg:justify-end items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleFade(1050)}
              className="relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl flex justify-center items-center"
            >
              
              {/* LAYER 5: Sparse Gold Glints Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.6 }}
                style={{
                  ...getParallaxStyle(14),
                  maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 60%)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 60%)',
                }}
                className="absolute right-[5%] top-[5%] w-[380px] h-[380px] pointer-events-none z-[5]"
              >
                <img
                  src="/images/Gemini_Generated_Image_19sjf619sjf619sj.png"
                  alt="Gold Glints Highlights"
                  className="w-full h-full object-cover mix-blend-screen opacity-45 animate-glint"
                />
              </motion.div>

              {/* Grounding Soft Ambient Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/90 blur-2xl rounded-full z-[6] pointer-events-none" />

              {/* LAYER 6: ISOLATED 3D PORTAL OBJECT (Zero Rectangular Box, Zero Edge Crop) */}
              <div style={getParallaxStyle(5)} className="relative z-[7] w-full flex justify-center">
                <div className="relative animate-portal-float w-full max-w-[580px] sm:max-w-[660px] lg:max-w-[740px] flex justify-center items-center">
                  
                  {/* Portal 3D Image with Precise Soft Feathered Radial Falloff & Screen Compositing */}
                  <img
                    src="/images/Gemini_Generated_Image_i6e37zi6e37zi6e3.png"
                    alt="Siyara 3D Digital Portal Display"
                    className="w-full h-auto object-contain pointer-events-none mix-blend-screen contrast-[1.12] brightness-[1.02] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transform transition-transform duration-700 hover:scale-[1.02]"
                    style={{
                      maskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, black 50%, transparent 92%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, black 50%, transparent 92%)',
                    }}
                  />

                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
