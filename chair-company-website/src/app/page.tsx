import type { Metadata } from 'next';
import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import BestSellers from '../components/BestSellers';
import PromoBanners from '../components/PromoBanners';
import BentoCategories from '../components/BentoCategories';
import CategoryTabsShowcase from '../components/CategoryTabsShowcase';
import ProductGridSection from '../components/ProductGridSection';
import SocialFeed from '../components/SocialFeed';
import FinalCta from '../components/FinalCta';

export const metadata: Metadata = {
  title: 'Luxury Ergonomic Chairs in Kathmandu | J.S Traders',
  description:
    'Shop executive and ergonomic office chairs with verified reviews, smart filters, and fast Kathmandu delivery.',
  openGraph: {
    title: 'Luxury Ergonomic Chairs in Kathmandu | J.S Traders',
    description:
      'Premium office seating crafted for posture, comfort, and executive aesthetics.',
    type: 'website',
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'J.S Traders Chair Factory',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      telephone: '+977-9800000000',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kathmandu',
        addressCountry: 'NP',
      },
      areaServed: 'Kathmandu Valley',
      url: 'https://example.com',
    },
    {
      '@type': 'Product',
      name: 'Executive Pro X1',
      category: 'Ergonomic Office Chair',
      brand: {
        '@type': 'Brand',
        name: 'J.S Traders',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '128',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'NPR',
        price: '48900',
        availability: 'https://schema.org/InStock',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <BestSellers />
      <PromoBanners />
      <BentoCategories />
      <CategoryTabsShowcase />
      <ProductGridSection />
      <SocialFeed />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}