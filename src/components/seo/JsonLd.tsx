import { BUSINESS_INFO } from '@/data/siteData';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: BUSINESS_INFO.name,
    image: 'https://birvaboutique.com/images/hero/hero-necklace.jpg',
    telephone: BUSINESS_INFO.phone,
    url: 'https://birvaboutique.com',
    sameAs: [BUSINESS_INFO.instagramUrl, BUSINESS_INFO.googleMapsUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_INFO.address.line1}, ${BUSINESS_INFO.address.line2}`,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.1189',
      longitude: '73.1118',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: 'Luxury',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
