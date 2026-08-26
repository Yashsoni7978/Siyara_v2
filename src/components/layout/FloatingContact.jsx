'use client';

import React from 'react';
import { Mail } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4 md:hidden">
      {/* Email */}
      <a
        href="mailto:hello@siyara.dev"
        className="flex items-center justify-center w-12 h-12 bg-[#071E18] text-[#D9B45F] rounded-full shadow-[0_4px_20px_rgba(7,10,9,0.5)] border border-[#D9B45F]/30 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(217,180,95,0.25)] transition-all duration-300"
        aria-label="Email Us"
      >
        <Mail className="w-5 h-5" />
      </a>
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] transition-all duration-300"
        aria-label="WhatsApp Us"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.185 1.6 6.002L.15 24l6.103-1.6c1.767.95 3.766 1.45 5.778 1.45 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.968c-1.843 0-3.654-.495-5.241-1.436l-.375-.223-4.526 1.186 1.206-4.412-.245-.39A10.02 10.02 0 011.968 12.03c0-5.547 4.515-10.062 10.063-10.062 5.547 0 10.062 4.515 10.062 10.062s-4.515 10.062-10.062 10.062zM17.55 14.5c-.302-.15-1.785-.882-2.062-.983-.277-.101-.479-.151-.68.151s-.78 1.008-.957 1.21c-.176.202-.353.227-.655.076-1.632-.821-2.9-1.921-3.95-3.328-.273-.365.176-.328.761-1.503.1-.2.05-.378-.025-.529-.076-.151-.68-1.638-.932-2.243-.245-.588-.495-.508-.68-.517-.176-.008-.378-.008-.579-.008s-.529.076-.806.378c-.277.302-1.058 1.033-1.058 2.52 0 1.487 1.083 2.924 1.234 3.126.151.202 2.13 3.25 5.16 4.523 1.93.81 2.69 1.003 3.633.957.943-.046 2.65-.968 3.023-1.895.378-.93.378-1.714.264-1.895-.114-.176-.416-.277-.718-.428z" />
        </svg>
      </a>
    </div>
  );
}
