import { City } from '@/types';
import { FilterState } from '@/components/shared/FilterPanel';

/**
 * 필터 조건에 따라 도시 목록을 필터링합니다.
 *
 * @param cities - 필터링할 도시 배열
 * @param filters - 필터 조건
 * @returns 필터링된 도시 배열
 *
 * 필터 로직:
 * - 각 필터 카테고리는 AND 로직으로 결합 (모든 조건을 만족해야 함)
 * - 다중 선택 필터(지역, 환경, 계절)는 내부적으로 OR 로직 (하나라도 포함되면 통과)
 */
export function filterCities(cities: City[], filters: FilterState): City[] {
  return cities.filter(city => {
    // 예산 필터 (단일 선택)
    if (filters.budget && city.budget !== filters.budget) {
      return false;
    }

    // 지역 필터 (다중 선택 - OR 로직)
    if (filters.regions.length > 0 && !filters.regions.includes(city.region_category)) {
      return false;
    }

    // 환경 필터 (다중 선택 - OR 로직)
    if (filters.environments.length > 0) {
      const hasMatch = filters.environments.some(env =>
        city.environment.includes(env as typeof city.environment[number])
      );
      if (!hasMatch) return false;
    }

    // 계절 필터 (다중 선택 - OR 로직)
    if (filters.seasons.length > 0) {
      const hasMatch = filters.seasons.some(season =>
        city.best_season.includes(season as typeof city.best_season[number])
      );
      if (!hasMatch) return false;
    }

    return true;
  });
}
