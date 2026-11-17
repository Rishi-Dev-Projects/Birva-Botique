'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/siteData';

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Subtle Luxury Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FCFAF6] border border-[#B59660]/30 shadow-lg text-xs text-[#30251F] font-sans">
          <span>Enquire on WhatsApp</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-[#817568] hover:text-[#30251F] p-0.5 rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Chat directly on WhatsApp with Birva Boutique"
      >
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white" strokeWidth={1.75} />
      </a>
    </div>
  );
}
