import FilterPanel from '@/components/shared/FilterPanel';
import { Button } from '@/components/ui/button';

export default function CityFinder() {
  return (
    <section className="section bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎯 당신에게 딱 맞는 도시 찾기
          </h2>
          <p className="text-lg text-muted-foreground">
            원하는 조건을 선택하면 최적의 도시를 추천해드립니다
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <FilterPanel />

          <div className="mt-8 text-center">
            <Button size="lg" className="px-12">
              🔍 나에게 맞는 도시 찾기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
