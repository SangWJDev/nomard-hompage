import { City } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, MapPin, Leaf, Sun } from 'lucide-react';

interface CityHighlightsProps {
  city: City;
}

export default function CityHighlights({ city }: CityHighlightsProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-muted/30">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">도시 하이라이트</h2>
        <p className="text-muted-foreground">
          {city.name}의 주요 특징과 매력 포인트입니다
        </p>
      </div>

      {/* 주요 특징 카드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {city.highlights.map((highlight, index) => (
          <Card key={index} className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm leading-relaxed">{highlight}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 카테고리 정보 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* 지역 */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">지역</h3>
            </div>
            <Badge variant="secondary" className="text-sm">
              {city.region_category}
            </Badge>
          </CardContent>
        </Card>

        {/* 예산 */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">예산</h3>
            </div>
            <Badge variant="secondary" className="text-sm">
              {city.budget}
            </Badge>
          </CardContent>
        </Card>

        {/* 환경 */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">환경</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {city.environment.map((env) => (
                <Badge key={env} variant="secondary" className="text-xs">
                  {env}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 추천 계절 */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Sun className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">추천 계절</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {city.best_season.map((season) => (
                <Badge key={season} variant="secondary" className="text-xs">
                  {season}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 태그 */}
      {city.tags && city.tags.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold mb-4">관련 태그</h3>
          <div className="flex flex-wrap gap-2">
            {city.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
