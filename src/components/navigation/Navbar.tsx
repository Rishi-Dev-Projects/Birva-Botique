'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';
import Logo from '@/components/brand/Logo';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/siteData';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit-us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F8F5EF]/92 backdrop-blur-md border-b border-[#B59660]/20 shadow-[0_4px_24px_rgba(48,37,31,0.04)] py-3'
          : 'bg-[#F8F5EF] border-b border-[#EAE0D2]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo & Monogram */}
          <div className="shrink-0">
            <Logo variant="dark" />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.24em] font-sans font-medium text-[#30251F]/80 hover:text-[#B59660] transition-colors py-2 px-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#B59660] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Actions (Instagram + WhatsApp CTA) */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-[#30251F] hover:text-[#B59660] hover:bg-[#EAE0D2]/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B59660]"
              aria-label="Birva Boutique Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" strokeWidth={1.5} />
            </a>

            {/* Luxury Island CTA Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#30251F] text-[#FCFAF6] hover:bg-[#211A16] border border-[#B59660]/30 shadow-[0_4px_16px_rgba(48,37,31,0.1)] transition-all duration-300 active:scale-[0.98]"
            >
              <span className="text-xs tracking-[0.16em] uppercase font-sans font-medium">
                Enquire
              </span>
              <span className="w-7 h-7 rounded-full bg-[#B59660] flex items-center justify-center text-[#FCFAF6] group-hover:bg-[#CDB384] transition-colors">
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.75} />
              </span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#30251F] text-[#B59660] hover:text-[#FCFAF6] transition-colors"
              aria-label="Direct WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#30251F] hover:bg-[#EAE0D2]/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B59660]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#30251F]" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6 text-[#30251F]" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Sliding Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed inset-0 top-[65px] z-50 bg-[#F8F5EF]/98 backdrop-blur-xl border-t border-[#B59660]/20 flex flex-col justify-between px-6 py-8 overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#817568] font-sans font-medium block border-b border-[#EAE0D2] pb-2">
                Navigation Menu
              </span>

              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-2xl text-[#30251F] hover:text-[#B59660] transition-colors flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B59660] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Mobile Bottom Info & CTAs */}
            <div className="space-y-4 pt-8 border-t border-[#EAE0D2]">
              <div className="space-y-2 text-xs text-[#817568]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#B59660] shrink-0 mt-0.5" />
                  <span>Sunrise Complex, 4, M.G. Road, Bardoli, Gujarat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B59660] shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#30251F]">
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#B59660]/30 text-xs font-medium tracking-wider uppercase text-[#30251F] bg-[#FCFAF6]"
                >
                  <InstagramIcon className="w-4 h-4 text-[#B59660]" />
                  <span>Instagram</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#30251F] text-[#FCFAF6] text-xs font-medium tracking-wider uppercase"
                >
                  <MessageCircle className="w-4 h-4 text-[#B59660]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
