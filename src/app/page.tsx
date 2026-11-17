import AnnouncementBar from '@/components/navigation/AnnouncementBar';
import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import BrandIntroSection from '@/components/sections/BrandIntroSection';
import CollectionsSection from '@/components/sections/CollectionsSection';
import FeaturedEditorialSection from '@/components/sections/FeaturedEditorialSection';
import OurStorySection from '@/components/sections/OurStorySection';
import GallerySection from '@/components/sections/GallerySection';
import InstagramSection from '@/components/sections/InstagramSection';
import VisitBoutiqueSection from '@/components/sections/VisitBoutiqueSection';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-[#F8F5EF] text-[#30251F]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <BrandIntroSection />
        <CollectionsSection />
        <FeaturedEditorialSection />
        <OurStorySection />
        <GallerySection />
        <InstagramSection />
        <VisitBoutiqueSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
