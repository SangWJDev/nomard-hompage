import { City } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { Home, Utensils, Bus, Wallet } from 'lucide-react';

interface CostBreakdownProps {
  city: City;
}

export default function CostBreakdown({ city }: CostBreakdownProps) {
  const { costOfLiving } = city;

  const costItems = [
    {
      label: '숙박비',
      amount: costOfLiving.accommodation,
      icon: Home,
      color: 'bg-blue-500',
    },
    {
      label: '식비',
      amount: costOfLiving.food,
      icon: Utensils,
      color: 'bg-green-500',
    },
    {
      label: '교통비',
      amount: costOfLiving.transportation,
      icon: Bus,
      color: 'bg-orange-500',
    },
  ];

  // 각 항목의 비율 계산
  const getPercentage = (amount: number) => {
    return (amount / costOfLiving.total) * 100;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">생활비 분석</h2>
        <p className="text-muted-foreground">
          {city.name}에서의 월평균 생활비 세부 내역입니다
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 세부 항목 카드 */}
        {costItems.map((item) => {
          const Icon = item.icon;
          const percentage = getPercentage(item.amount);

          return (
            <Card key={item.label} className="overflow-hidden hover-lift">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${item.color} bg-opacity-10`}>
                      <Icon className={`w-5 h-5 ${item.color.replace('bg-', 'text-')}`} />
                    </div>
                    {item.label}
                  </CardTitle>
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrency(item.amount)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>전체 생활비 대비</span>
                    <span className="font-semibold">{percentage.toFixed(1)}%</span>
                  </div>
                  {/* 프로그레스 바 */}
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500 ease-out`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* 총액 카드 */}
        <Card className="overflow-hidden hover-lift md:col-span-2 bg-primary text-white">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-lg bg-white/10">
                  <Wallet className="w-6 h-6" />
                </div>
                월 총 생활비
              </CardTitle>
              <span className="text-3xl sm:text-4xl font-bold">
                {formatCurrency(costOfLiving.total)}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white/90 text-sm">
              숙박비, 식비, 교통비를 포함한 {city.name}에서의 평균 월 생활비입니다.
              개인의 생활 패턴에 따라 실제 비용은 달라질 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
