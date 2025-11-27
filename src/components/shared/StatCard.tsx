import { Card, CardContent } from '@/components/ui/card';
import { Stat } from '@/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <Card className="hover-lift text-center">
      <CardContent className="pt-6 pb-6">
        <div className="text-4xl mb-3">{stat.emoji}</div>
        <div className="text-3xl font-bold mb-2">{stat.value}</div>
        <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
        {stat.change && (
          <div
            className={`flex items-center justify-center gap-1 text-xs font-medium ${
              stat.trend === 'up'
                ? 'text-success'
                : stat.trend === 'down'
                ? 'text-danger'
                : 'text-muted-foreground'
            }`}
          >
            {stat.trend === 'up' && <TrendingUp className="w-3 h-3" />}
            {stat.trend === 'down' && <TrendingDown className="w-3 h-3" />}
            <span>{stat.change}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
