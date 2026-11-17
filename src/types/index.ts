export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  alt: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface BusinessInfo {
  name: string;
  category: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
  };
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  rating: number;
  reviewCount: number;
}
