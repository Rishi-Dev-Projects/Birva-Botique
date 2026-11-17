'use client';

import { useState, useEffect } from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';
import Logo from '@/components/brand/Logo';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/siteData';

const FOOTER_NAV = [
  { label: 'Home', href: '#hero' },
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit-us' },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#211A16] text-[#FCFAF6] border-t border-[#B59660]/20 pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-[#30251F]/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" showSubtitle={true} />
            <p className="text-sm text-[#EAE0D2]/80 font-sans leading-relaxed max-w-md">
              A boutique jewellery destination in Bardoli, Gujarat. Dedicated to personal expression,
              timeless Indian craftsmanship, and refined luxury jewellery for all occasions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#30251F] border border-[#B59660]/30 hover:border-[#B59660] hover:bg-[#B59660] flex items-center justify-center text-[#FCFAF6] transition-colors"
                aria-label="Birva Boutique Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#30251F] border border-[#B59660]/30 hover:border-[#B59660] hover:bg-[#B59660] flex items-center justify-center text-[#FCFAF6] transition-colors"
                aria-label="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-[#30251F] border border-[#B59660]/30 hover:border-[#B59660] hover:bg-[#B59660] flex items-center justify-center text-[#FCFAF6] transition-colors"
                aria-label={`Call ${BUSINESS_INFO.displayPhone}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CDB384] font-sans font-semibold block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.18em] text-[#EAE0D2]/80 hover:text-[#CDB384] transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CDB384] font-sans font-semibold block">
              Boutique Location
            </span>
            <div className="space-y-3 text-xs text-[#EAE0D2]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B59660] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Sunrise Complex, 4, Mahatma Gandhi Road,<br />
                  Opposite Green Apple Hospital, Ramnagar,<br />
                  Bardoli, Gujarat 394601, India.
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#B59660] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-[#FCFAF6] transition-colors font-medium text-sm text-[#FCFAF6]"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#CDB384] hover:text-[#FCFAF6] font-medium transition-colors"
                >
                  <span>Open in Google Maps Directions</span>
                  &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-[#30251F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#817568]">
          <p>
            &copy; {currentYear} Birva Boutique. All rights reserved. Bardoli, Gujarat.
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-[#CDB384] hover:text-[#FCFAF6] transition-colors text-[11px] uppercase tracking-widest font-sans font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
