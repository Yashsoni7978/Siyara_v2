'use client';

import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4 md:hidden">
      {/* WhatsApp */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#071E18] text-[#D9B45F] rounded-full shadow-[0_4px_20px_rgba(7,10,9,0.5)] border border-[#D9B45F]/30 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(217,180,95,0.25)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Email */}
      <a
        href={`mailto:${siteConfig.email}`}
        className="flex items-center justify-center w-12 h-12 bg-[#071E18] text-[#D9B45F] rounded-full shadow-[0_4px_20px_rgba(7,10,9,0.5)] border border-[#D9B45F]/30 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(217,180,95,0.25)] transition-all duration-300"
        aria-label={`Email ${siteConfig.email}`}
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
}
