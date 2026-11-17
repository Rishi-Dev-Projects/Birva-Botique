import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';

export default function AnnouncementBar() {
  return (
    <aside aria-label="Boutique announcement" className="w-full bg-[#211A16] text-[#FCFAF6] border-b border-[#B59660]/20 text-[11px] sm:text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[#CDB384]/90 font-sans tracking-wide">
          <MapPin className="w-3.5 h-3.5 text-[#B59660] shrink-0" strokeWidth={1.5} />
          <span className="hidden sm:inline">Bardoli, Gujarat &mdash;</span>
          <span className="tracking-widest uppercase text-[10px] text-[#FCFAF6]/90">
            Discover timeless elegance at Birva Boutique
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#CDB384]/90">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-[#FCFAF6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B59660]"
            aria-label={`Call boutique at ${BUSINESS_INFO.displayPhone}`}
          >
            <Phone className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
            <span className="font-sans font-medium">{BUSINESS_INFO.displayPhone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
