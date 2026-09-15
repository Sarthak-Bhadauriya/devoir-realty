import HeroSection from '@/components/sections/home/HeroSection';
import FeaturedProperties from '@/components/sections/home/FeaturedProperties';
import AboutSection from '@/components/sections/home/AboutSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import CTABanner from '@/components/sections/home/CTABanner';
import ChannelPartnersSection from '@/components/sections/home/ChannelPartnersSection';
import DeveloperMarquee from '@/components/sections/home/DeveloperMarquee';
import StatsSection from '@/components/sections/home/StatsSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import AmenitiesSection from '@/components/sections/home/AmenitiesSection';

import { getProperties } from '@/lib/json-db';
import { featuredProperties as staticFeatured } from '@/data/properties';

export default async function HomePage() {
  const allProperties = getProperties();
  const dbFeatured = allProperties.filter((p: any) => p.featured);
  
  const featured = dbFeatured.length > 0 ? dbFeatured : staticFeatured;

  return (
    <>
      <HeroSection />
      <DeveloperMarquee />
      <FeaturedProperties properties={featured as any} />
      <AboutSection />
      <AmenitiesSection />
      <ServicesSection />
      <StatsSection />
      <ChannelPartnersSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
