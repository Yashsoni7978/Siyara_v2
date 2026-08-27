'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4 md:hidden">
      {/* Phone */}
      <a
        href="tel:9587269209"
        className="flex items-center justify-center w-12 h-12 bg-[#071E18] text-[#D9B45F] rounded-full shadow-[0_4px_20px_rgba(7,10,9,0.5)] border border-[#D9B45F]/30 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(217,180,95,0.25)] transition-all duration-300"
        aria-label="Call 9587269209"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:info@siyaradigital.com"
        className="flex items-center justify-center w-12 h-12 bg-[#071E18] text-[#D9B45F] rounded-full shadow-[0_4px_20px_rgba(7,10,9,0.5)] border border-[#D9B45F]/30 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(217,180,95,0.25)] transition-all duration-300"
        aria-label="Email info@siyaradigital.com"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
}
