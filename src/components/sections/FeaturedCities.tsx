import { getTopRatedCities } from '@/data';
import CityCard from '@/components/shared/CityCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCities() {
  const cities = getTopRatedCities(10);

  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔥 지금 인기있는 도시 TOP 10
          </h2>
          <p className="text-lg text-muted-foreground">
            다른 노마드들이 가장 많이 선택한 도시들을 확인해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            전체 도시 보기 (49개)
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
