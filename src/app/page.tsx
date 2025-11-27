import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import SocialProof from '@/components/sections/SocialProof';
import FeaturedCities from '@/components/sections/FeaturedCities';
import CityFinder from '@/components/sections/CityFinder';
import UserReviews from '@/components/sections/UserReviews';
import UpcomingEvents from '@/components/sections/UpcomingEvents';
import StatsDashboard from '@/components/sections/StatsDashboard';
import BlogPreview from '@/components/sections/BlogPreview';
import Newsletter from '@/components/sections/Newsletter';
import Partners from '@/components/sections/Partners';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturedCities />
        <CityFinder />
        <UserReviews />
        <UpcomingEvents />
        <StatsDashboard />
        <BlogPreview />
        <Newsletter />
        <Partners />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
