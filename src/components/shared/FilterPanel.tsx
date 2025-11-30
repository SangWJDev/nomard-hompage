'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BUDGET_OPTIONS,
  REGION_CATEGORIES,
  ENVIRONMENT_OPTIONS,
  SEASON_OPTIONS,
} from '@/lib/constants';

export interface FilterState {
  budget: string | null;
  regions: string[];
  environments: string[];
  seasons: string[];
}

interface FilterPanelProps {
  onFilterChange?: (filters: FilterState) => void;
}

export default function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedEnvironments, setSelectedEnvironments] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);

  // 필터 상태가 변경될 때마다 부모 컴포넌트에 전달
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        budget: selectedBudget,
        regions: selectedRegions,
        environments: selectedEnvironments,
        seasons: selectedSeasons,
      });
    }
  }, [selectedBudget, selectedRegions, selectedEnvironments, selectedSeasons, onFilterChange]);

  // 예산 필터: 단일 선택
  const toggleBudget = (budget: string) => {
    setSelectedBudget((prev) => (prev === budget ? null : budget));
  };

  // 지역 필터: 다중 선택
  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  // 환경 필터: 다중 선택
  const toggleEnvironment = (environment: string) => {
    setSelectedEnvironments((prev) =>
      prev.includes(environment)
        ? prev.filter((e) => e !== environment)
        : [...prev, environment]
    );
  };

  // 계절 필터: 다중 선택
  const toggleSeason = (season: string) => {
    setSelectedSeasons((prev) =>
      prev.includes(season) ? prev.filter((s) => s !== season) : [...prev, season]
    );
  };

  // 모든 필터 초기화
  const clearFilters = () => {
    setSelectedBudget(null);
    setSelectedRegions([]);
    setSelectedEnvironments([]);
    setSelectedSeasons([]);
  };

  const hasActiveFilters =
    selectedBudget !== null ||
    selectedRegions.length > 0 ||
    selectedEnvironments.length > 0 ||
    selectedSeasons.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">필터</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            초기화
          </Button>
        )}
      </div>

      {/* 예산 필터 */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">예산</h4>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((budget) => (
            <Badge
              key={budget}
              variant={selectedBudget === budget ? 'default' : 'outline'}
              className="cursor-pointer hover-lift px-4 py-2 text-sm"
              onClick={() => toggleBudget(budget)}
            >
              {budget}
            </Badge>
          ))}
        </div>
      </div>

      {/* 지역 필터 */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">지역</h4>
        <div className="flex flex-wrap gap-2">
          {REGION_CATEGORIES.map((region) => (
            <Badge
              key={region}
              variant={selectedRegions.includes(region) ? 'default' : 'outline'}
              className="cursor-pointer hover-lift px-4 py-2 text-sm"
              onClick={() => toggleRegion(region)}
            >
              {region}
            </Badge>
          ))}
        </div>
      </div>

      {/* 환경 필터 */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">환경</h4>
        <div className="flex flex-wrap gap-2">
          {ENVIRONMENT_OPTIONS.map((environment) => (
            <Badge
              key={environment}
              variant={selectedEnvironments.includes(environment) ? 'default' : 'outline'}
              className="cursor-pointer hover-lift px-4 py-2 text-sm"
              onClick={() => toggleEnvironment(environment)}
            >
              {environment}
            </Badge>
          ))}
        </div>
      </div>

      {/* 계절 필터 */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">최고 계절</h4>
        <div className="flex flex-wrap gap-2">
          {SEASON_OPTIONS.map((season) => (
            <Badge
              key={season}
              variant={selectedSeasons.includes(season) ? 'default' : 'outline'}
              className="cursor-pointer hover-lift px-4 py-2 text-sm"
              onClick={() => toggleSeason(season)}
            >
              {season}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
