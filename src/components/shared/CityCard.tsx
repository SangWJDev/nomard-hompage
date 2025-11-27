import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { City } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { Star, Users } from 'lucide-react';

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative h-48">
        <Image
          src={city.image}
          alt={city.name}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-md">
          {city.emoji}
        </div>
        {city.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-white">인기</Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{city.name}</h3>
            <p className="text-sm text-muted-foreground">{city.nameEn}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {city.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              {formatCurrency(city.costOfLiving.total)}
            </span>
            <span className="text-sm text-muted-foreground">/월</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{city.rating}</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="w-3 h-3" />
              {city.reviewCount}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {city.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
