'use client';

import React, { useEffect, useRef } from 'react';

/**
 * GPU-Accelerated Cursor Spotlight with Idle Suspension
 * - Fixed 600px radial disk positioned via transform3d (compositor thread)
 * - Suspends RAF loop when cursor is stationary (0% CPU/GPU overhead when idle or scrolling)
 * - Zero paint invalidation on scroll
 * - Respects prefers-reduced-motion and coarse pointer (touch) devices
 */
export default function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Disable on coarse pointer devices (touchscreens/mobile)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    // Disable if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const el = spotlightRef.current;
    if (!el) return;

    let rafId = null;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isRunning = false;
    let isVisible = false;

    const render = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      // Smooth liquid lerp
      currentX += dx * 0.18;
      currentY += dy * 0.18;

      // Hardware-accelerated compositor transform (centered: 600px / 2 = 300px)
      el.style.transform = `translate3d(${(currentX - 300).toFixed(1)}px, ${(currentY - 300).toFixed(1)}px, 0)`;

      // Auto-sleep: Only keep scheduling RAF while cursor is interpolating
      if (Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15) {
        rafId = requestAnimationFrame(render);
      } else {
        isRunning = false;
        rafId = null;
      }
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        el.style.opacity = '1';
      }

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      el.style.opacity = '0';
      targetX = -1000;
      targetY = -1000;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        isRunning = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-30 hidden md:block opacity-0 transition-opacity duration-300 will-change-transform"
      style={{
        background: 'radial-gradient(circle at center, rgba(24, 169, 130, 0.08) 0%, rgba(217, 180, 95, 0.03) 40%, transparent 70%)',
        transform: 'translate3d(-1000px, -1000px, 0)',
      }}
      aria-hidden="true"
    />
  );
}
