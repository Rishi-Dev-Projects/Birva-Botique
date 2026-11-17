import { BusinessInfo, CollectionItem, GalleryItem } from '@/types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Birva Boutique',
  category: 'Jewellery Boutique',
  tagline: 'Elegance That Speaks Without Words',
  address: {
    line1: 'Sunrise Complex, 4, Mahatma Gandhi Road',
    line2: 'Opposite Green Apple Hospital',
    landmark: 'Ramnagar',
    city: 'Bardoli',
    state: 'Gujarat',
    pincode: '394601',
    country: 'India',
    formatted: 'Sunrise Complex, 4, Mahatma Gandhi Road, Opposite Green Apple Hospital, Ramnagar, Bardoli, Gujarat 394601, India',
  },
  phone: '+919016584831',
  displayPhone: '+91 90165 84831',
  whatsappNumber: '919016584831',
  instagramHandle: '@birva.boutique',
  instagramUrl: 'https://www.instagram.com/birva.boutique/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Birva+Boutique+Sunrise+Complex+Mahatma+Gandhi+Road+Bardoli+Gujarat+394601',
  rating: 5.0,
  reviewCount: 2,
};

export const getWhatsAppUrl = (customText?: string): string => {
  const defaultText = `Hello Birva Boutique! I discovered your website and would love to know more about your jewellery collections.`;
  const message = customText || defaultText;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getCollectionWhatsAppUrl = (collectionTitle: string): string => {
  const message = `Hello Birva Boutique! I am interested in your "${collectionTitle}" collection shown on your website. Could you please share more details and availability?`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'necklace-sets',
    title: 'Necklace Sets',
    category: 'Proposed Curation',
    description: 'Bespoke choker and tiered haar compositions designed with timeless Indian motifs, intricate gold filigree, and harmonious gemstone settings.',
    image: '/images/hero/hero-necklace.jpg',
    alt: 'Handcrafted luxury gold necklace set on display bust',
    highlights: ['Artisan Filigree', 'Warm Antique Patina', 'Heirloom Compositions'],
  },
  {
    id: 'bridal-occasion',
    title: 'Bridal & Occasion Wear',
    category: 'Proposed Curation',
    description: 'Grand wedding ensembles featuring opulent layered neckpieces, delicate maang tikkas, and regal accents celebrating auspicious moments.',
    image: '/images/collections/bridal-rani-haar.jpg',
    alt: 'Opulent Indian bridal high jewellery collection',
    highlights: ['Multi-Tier Compositions', 'Royal Heritage Styling', 'Bespoke Coordination'],
  },
  {
    id: 'traditional-jewellery',
    title: 'Traditional Jewellery',
    category: 'Proposed Curation',
    description: 'Classic handcrafted designs honoring regional heritage techniques, cultural motifs, and authentic festive splendor.',
    image: '/images/collections/traditional-choker.jpg',
    alt: 'Intricate traditional Indian gold jewellery laid on raw silk',
    highlights: ['Cultural Motifs', 'Pure Craft Traditions', 'Festive Grandeur'],
  },
  {
    id: 'earrings-collection',
    title: 'Earrings & Jhumkas',
    category: 'Proposed Curation',
    description: 'From cascading chandbalis to sculptural heritage jhumkas, each piece balances graceful movement with refined delicacy.',
    image: '/images/collections/earrings-jhumkas.jpg',
    alt: 'Bespoke handcrafted gold chandbali jhumkas with seed pearls',
    highlights: ['Cascading Pearls', 'Balanced Weight & Comfort', 'Intricate Drop Work'],
  },
  {
    id: 'statement-pieces',
    title: 'Statement Pieces',
    category: 'Proposed Curation',
    description: 'Distinctive hand cuffs, engraved kadas, and sculptural cocktail rings tailored to elevate both contemporary and traditional ensembles.',
    image: '/images/collections/statement-cuff.jpg',
    alt: 'Handcrafted antique gold statement cuff kada and ring',
    highlights: ['Architectural Forms', 'Embossed Floral Detailing', 'Versatile Elegance'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Bridal Heritage Ensemble',
    tag: 'Bridal',
    image: '/images/gallery/gallery-bridal.jpg',
    alt: 'Opulent bridal necklace ensemble with layered gems',
    aspect: 'tall',
  },
  {
    id: 'gal-2',
    title: 'Artisan Workshop & Polki Setting',
    tag: 'Craftsmanship',
    image: '/images/gallery/gallery-craft.jpg',
    alt: 'Master artisan goldsmith hand-setting gemstone with vintage brass tweezers',
    aspect: 'wide',
  },
  {
    id: 'gal-3',
    title: 'Ornate Chandbali Jhumkas',
    tag: 'Earrings',
    image: '/images/gallery/gallery-earrings.jpg',
    alt: 'Macro photograph of gold jhumkas with pearl accents',
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'Editorial Fabric Flat-Lay',
    tag: 'Editorial',
    image: '/images/gallery/gallery-flatlay.jpg',
    alt: 'Top-down flatlay of gold bangles, pendant and earrings on draped ivory linen',
    aspect: 'wide',
  },
  {
    id: 'gal-5',
    title: 'Boutique Salon Concept',
    tag: 'Boutique',
    image: '/images/gallery/gallery-interior.jpg',
    alt: 'Conceptual luxury Indian jewellery boutique salon interior',
    aspect: 'wide',
  },
  {
    id: 'gal-6',
    title: 'Carved Floral Kada & Ring',
    tag: 'Statement',
    image: '/images/gallery/gallery-statement.jpg',
    alt: 'Handcrafted gold kada cuff and cocktail ring on charcoal plinth',
    aspect: 'square',
  },
  {
    id: 'gal-7',
    title: 'Traditional Temple Filigree Choker',
    tag: 'Traditional',
    image: '/images/gallery/gallery-traditional.jpg',
    alt: 'Intricate traditional 22k gold choker on silk fabric',
    aspect: 'tall',
  },
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: 'ig-1',
    title: 'Heirloom Necklaces',
    image: '/images/hero/hero-necklace.jpg',
    caption: 'Intricate artistry designed to transcend generations. Discover our curated curations at our Bardoli boutique.',
  },
  {
    id: 'ig-2',
    title: 'Bridal Grandeur',
    image: '/images/collections/bridal-rani-haar.jpg',
    caption: 'For ceremonies that live forever in memory. Curated with grace for the modern celebration.',
  },
  {
    id: 'ig-3',
    title: 'Artisanal Grace',
    image: '/images/collections/earrings-jhumkas.jpg',
    caption: 'Subtle movement, timeless geometry. Delicate chandbalis crafted with love and devotion.',
  },
  {
    id: 'ig-4',
    title: 'Curated Flat-Lays',
    image: '/images/editorial/jewellery-flatlay.jpg',
    caption: 'Textural harmony of gold, ivory silk, and botanical touches. Follow @birva.boutique.',
  },
];
