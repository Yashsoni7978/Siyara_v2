'use client';

import React, { useEffect, useRef } from 'react';

/**
 * High-Performance Hardware-Accelerated Cursor Spotlight
 * Operates purely via direct DOM mutation and requestAnimationFrame lerp.
 * Zero React state updates on mousemove -> 0ms INP impact.
 */
export default function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    // Check if device supports fine hover pointer (disable on touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let rafId = null;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isVisible = false;

    const render = () => {
      // Liquid lerp for smooth motion without main-thread jank
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      el.style.background = `radial-gradient(600px circle at ${currentX.toFixed(1)}px ${currentY.toFixed(1)}px, rgba(24, 169, 130, 0.08), rgba(217, 180, 95, 0.03) 40%, transparent 80%)`;
      
      if (isVisible && el.style.opacity !== '1') {
        el.style.opacity = '1';
      }

      rafId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      el.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block opacity-0"
      aria-hidden="true"
    />
  );
}
