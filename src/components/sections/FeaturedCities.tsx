'use client';

import { useState, useMemo } from 'react';
import { getCitiesByLikes } from '@/data';
import { filterCities } from '@/lib/filters';
import FilterPanel, { FilterState } from '@/components/shared/FilterPanel';
import CityCard from '@/components/shared/CityCard';

export default function FeaturedCities() {
  const [filters, setFilters] = useState<FilterState>({
    budget: null,
    regions: [],
    environments: [],
    seasons: [],
  });

  const allCities = useMemo(() => getCitiesByLikes(), []);
  const filteredCities = useMemo(() => filterCities(allCities, filters), [allCities, filters]);

  return (
    <section className="section">
      <div className="container-wide">
        {/* 제목 변경 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            도시 리스트
          </h2>
          <p className="text-lg text-muted-foreground">
            좋아요가 많은 순서대로 정렬
          </p>
        </div>

        {/* 필터 패널 통합 */}
        <div className="mb-12 bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
          <FilterPanel onFilterChange={setFilters} />
        </div>

        {/* 필터링된 도시 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                조건에 맞는 도시가 없습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
