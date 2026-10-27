'use client';

import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 md:hidden">
      {/* WhatsApp Floating Trigger */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#071E18] text-[#D9B45F] rounded-full shadow-[0_4px_20px_rgba(7,10,9,0.7)] border border-[#D9B45F]/40 active:scale-95 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
