import { City } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Wifi, Briefcase, Coffee } from 'lucide-react';

interface CityStatsProps {
  city: City;
}

export default function CityStats({ city }: CityStatsProps) {
  const stats = [
    {
      label: '인구',
      value: city.population.toLocaleString('ko-KR'),
      unit: '명',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: '인터넷 속도',
      value: city.internetSpeed.toLocaleString('ko-KR'),
      unit: 'Mbps',
      icon: Wifi,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: '코워킹 스페이스',
      value: city.coworkingSpaces.toLocaleString('ko-KR'),
      unit: '개',
      icon: Briefcase,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'WiFi 카페',
      value: city.cafesWithWifi.toLocaleString('ko-KR'),
      unit: '개',
      icon: Coffee,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">도시 통계</h2>
        <p className="text-muted-foreground">
          {city.name}의 주요 통계 정보입니다
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.label} className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.unit}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 리뷰 정보 */}
      {city.reviewCount > 0 && (
        <Card className="mt-6 hover-lift">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">사용자 리뷰</h3>
                <p className="text-sm text-muted-foreground">
                  실제 노마드들의 생생한 후기
                </p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">
                  {city.reviewCount.toLocaleString('ko-KR')}
                </span>
                <p className="text-sm text-muted-foreground">개의 리뷰</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
