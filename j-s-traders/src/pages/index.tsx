import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import BestSellers from '../components/BestSellers';
import PromoBanners from '../components/PromoBanners';
import BentoCategories from '../components/BentoCategories';
import CategoryTabsShowcase from '../components/CategoryTabsShowcase';
import ProductGridSection from '../components/ProductGridSection';
import SocialFeed from '../components/SocialFeed';
import FinalCta from '../components/FinalCta';

const HomePage = () => {
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
    </>
  );
};

export default HomePage;
