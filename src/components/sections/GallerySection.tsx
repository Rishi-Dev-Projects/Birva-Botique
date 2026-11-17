'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/siteData';
import { GalleryItem } from '@/types';
import { getWhatsAppUrl } from '@/data/siteData';

const CATEGORIES = ['All', 'Bridal', 'Traditional', 'Earrings', 'Craftsmanship', 'Boutique'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.tag.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#FCFAF6] border-t border-[#EAE0D2]/70 relative">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.26em] font-sans font-medium text-[#817568] bg-[#F8F5EF] border border-[#B59660]/30">
            <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
            Visual Archive
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#30251F] tracking-tight">
            The Editorial Gallery
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B59660] mx-auto" />
          <p className="text-sm sm:text-base text-[#817568] font-sans">
            A window into the artisanal artistry, textural elegance, and bespoke designs created for
            our patrons at Birva Boutique.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B59660] ${
                  isActive
                    ? 'bg-[#30251F] text-[#FCFAF6] shadow-xs'
                    : 'bg-[#F8F5EF] text-[#817568] hover:text-[#30251F] border border-[#EAE0D2]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Staggered Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="p-2 rounded-[2rem] bg-gradient-to-b from-[#B59660]/20 to-[#EAE0D2]/30 border border-[#B59660]/25 shadow-xs transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                  <div className={`relative rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#211A16] ${
                    item.aspect === 'tall'
                      ? 'aspect-[3/4]'
                      : item.aspect === 'wide'
                      ? 'aspect-[16/10]'
                      : 'aspect-[4/3]'
                  }`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient & Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-sans font-semibold bg-[#FCFAF6]/90 text-[#30251F] backdrop-blur-xs">
                        {item.tag}
                      </span>
                    </div>

                    {/* Expand Icon Button */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FCFAF6]/80 text-[#30251F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#30251F]" />
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-5 left-5 right-5 text-[#FCFAF6]">
                      <h3 className="font-serif text-lg font-medium tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#EAE0D2]/80 font-sans mt-0.5 line-clamp-1">
                        Tap to inspect craftsmanship
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Notice regarding conceptual boutique interior */}
        <p className="text-center text-xs text-[#817568]/80 font-sans max-w-xl mx-auto italic">
          Images reflect our curated design directions and conceptual styling. Real inventory is available for direct preview at our Bardoli showroom.
        </p>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#17120F]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#211A16] rounded-3xl border border-[#B59660]/30 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#30251F]/80 text-[#FCFAF6] hover:bg-[#B59660] flex items-center justify-center transition-colors focus-visible:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full max-h-[65vh] bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Bottom Metadata & WhatsApp CTA */}
              <div className="p-6 bg-[#211A16] border-t border-[#B59660]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B59660] font-sans font-semibold">
                    {selectedImage.tag} &bull; Birva Boutique Curation
                  </span>
                  <h3 className="font-serif text-2xl text-[#FCFAF6] font-medium mt-1">
                    {selectedImage.title}
                  </h3>
                </div>

                <a
                  href={getWhatsAppUrl(`Hello Birva Boutique! I am viewing "${selectedImage.title}" in your online gallery and would love to enquire about similar pieces.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B59660] text-[#FCFAF6] hover:bg-[#CDB384] text-xs uppercase tracking-wider font-sans font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
