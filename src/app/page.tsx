import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedCities from '@/components/sections/FeaturedCities';
import CityFinder from '@/components/sections/CityFinder';
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
        <FeaturedCities />
        <div className="nature-gradient">
          <CityFinder />
        </div>
      </main>
      <Footer />
    </div>
  );
}
