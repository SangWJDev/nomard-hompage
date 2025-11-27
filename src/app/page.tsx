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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        {/* Organic decorative elements */}
        <div className="fixed top-20 right-0 w-64 h-64 bg-primary/5 organic-blob blur-3xl -z-10" />
        <div className="fixed bottom-40 left-0 w-80 h-80 bg-accent/5 organic-blob blur-3xl -z-10" />

        <HeroSection />
        <div className="bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
          <SocialProof />
        </div>
        <FeaturedCities />
        <div className="nature-gradient">
          <CityFinder />
        </div>
        <UserReviews />
        <div className="bg-gradient-to-b from-transparent via-accent/20 to-transparent">
          <UpcomingEvents />
        </div>
        <StatsDashboard />
        <BlogPreview />
        <div className="nature-gradient">
          <Newsletter />
        </div>
        <Partners />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
