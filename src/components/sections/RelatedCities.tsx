import Link from 'next/link';
import { City } from '@/types';
import { mockCities } from '@/data/mock/cities';
import CityCard from '@/components/shared/CityCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface RelatedCitiesProps {
  city: City;
}

export default function RelatedCities({ city }: RelatedCitiesProps) {
  // 추천 도시 로직:
  // 1. 같은 지역의 도시 우선
  // 2. 생활비 ±20% 범위 내 도시
  // 3. 좋아요 순으로 정렬
  // 4. 현재 도시 제외
  // 5. 최대 4개

  const getRelatedCities = (): City[] => {
    const costRange = city.costOfLiving.total * 0.2; // ±20%
    const minCost = city.costOfLiving.total - costRange;
    const maxCost = city.costOfLiving.total + costRange;

    return mockCities
      .filter((c) => {
        // 현재 도시 제외
        if (c.id === city.id) return false;

        // 같은 지역이거나
        const sameRegion = c.region === city.region;

        // 비슷한 생활비 범위
        const similarCost =
          c.costOfLiving.total >= minCost && c.costOfLiving.total <= maxCost;

        return sameRegion || similarCost;
      })
      .sort((a, b) => {
        // 같은 지역을 우선 순위로
        const aIsRegion = a.region === city.region ? 1 : 0;
        const bIsRegion = b.region === city.region ? 1 : 0;

        if (aIsRegion !== bIsRegion) {
          return bIsRegion - aIsRegion;
        }

        // 좋아요 수로 정렬
        return b.likes - a.likes;
      })
      .slice(0, 4);
  };

  const relatedCities = getRelatedCities();

  if (relatedCities.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-muted/30">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">추천 도시</h2>
          <p className="text-muted-foreground">
            {city.name}와 비슷한 다른 도시들을 둘러보세요
          </p>
        </div>
        <Link href="/#cities">
          <Button variant="outline" className="gap-2">
            더 많은 도시 보기
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {relatedCities.map((relatedCity) => (
          <CityCard key={relatedCity.id} city={relatedCity} />
        ))}
      </div>
    </section>
  );
}
