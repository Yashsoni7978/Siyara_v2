import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ServicesHero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ensure video is 100% MUTED with zero volume and no audio track, and plays automatically
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      
      const playVideo = () => {
        video.play().catch((err) => {
          console.warn('Services hero video autoplay prevented:', err);
        });
      };

      playVideo();
      video.addEventListener('canplay', playVideo);
      video.addEventListener('loadeddata', playVideo);

      return () => {
        video.removeEventListener('canplay', playVideo);
        video.removeEventListener('loadeddata', playVideo);
      };
    }
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

  const getParallaxStyle = (multiplier) => {
    if (isMobile || shouldReduceMotion) return {};
    return {
      transform: `translate3d(${mousePos.x * multiplier}px, ${mousePos.y * multiplier}px, 0)`,
      transition: 'transform 0.3s ease-out',
    };
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#070A09] overflow-hidden flex items-center"
    >
      {/* LAYER 01: Obsidian Black Canvas Base */}
      <div className="absolute inset-0 bg-[#070A09] z-0" />

      {/* LAYER 02: Fine Emerald Ambient Glow Sphere Behind Video */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#071E18]/60 via-[#0C6B52]/18 to-transparent blur-3xl rounded-full pointer-events-none z-[1]" />

      {/* LAYER 03: Atmospheric Bridge (Headline -> Video Transition Haze) */}
      <div className="absolute left-[25%] right-[15%] top-1/2 -translate-y-1/2 h-[520px] bg-gradient-to-r from-transparent via-[#071E18]/30 to-[#0C6B52]/12 blur-3xl pointer-events-none z-[2]" />

      {/* LAYER 04: APPROVED SERVICES HERO CINEMATIC VIDEO (Centered in Right Hero Area) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: easeCustom }}
        style={{
          ...getParallaxStyle(2),
          maskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 55%, transparent 95%), linear-gradient(to right, transparent 0%, black 15%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 50%, black 55%, transparent 95%), linear-gradient(to right, transparent 0%, black 15%, black 100%)',
        }}
        className="absolute right-0 lg:right-[3%] xl:right-[5%] top-1/2 -translate-y-1/2 w-full lg:w-[52%] xl:w-[55%] h-[92%] pointer-events-none z-[3] flex items-center justify-center overflow-hidden"
      >
        <video
          ref={videoRef}
          src="/images/siyara_services_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-contain object-center drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)] opacity-100 scale-100 pointer-events-none"
        />
      </motion.div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT COLUMN: 42-45% Width Clean Editorial Messaging */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(350)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-[#D9B45F]/60" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#D9B45F] uppercase">
                SIYARA SERVICES
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(500)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-[#F3EFE3]"
              >
                OUR DIGITAL
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(700)}
                className="font-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[0.96] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] drop-shadow-[0_4px_30px_rgba(217,180,95,0.22)]"
              >
                CAPABILITIES.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(850)}
              className="mb-10 max-w-lg"
            >
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed">
                From strategy and brand to technology, visibility and growth — every capability works as part of one connected digital system.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(950)}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#services-capabilities"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#F3EFE3]/25 hover:border-[#D9B45F]/60 text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 group bg-[#070A09]/40 backdrop-blur-sm"
              >
                <span>EXPLORE OUR SYSTEM</span>
                <ArrowRight className="w-4 h-4 text-[#D9B45F] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEFT: Scroll Indicator Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-8 sm:left-12 z-20 flex flex-col items-center gap-3 hidden sm:flex"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#D9B45F] to-transparent relative">
          <div className="w-1.5 h-1.5 bg-[#D9B45F] rounded-full absolute top-0 -left-[2.5px] animate-ping" />
        </div>
        <span className="text-[9px] font-mono tracking-[0.24em] text-[#9D9B91]/60 uppercase">
          SCROLL
        </span>
      </motion.div>

      {/* HERO BOTTOM CONNECTOR: Thin horizontal gold line with ONE central glowing gold point */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9B45F]/35 to-transparent z-20 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D9B45F] shadow-[0_0_8px_#D9B45F] -translate-y-[0.5px]" />
      </div>
    </section>
  );
}



