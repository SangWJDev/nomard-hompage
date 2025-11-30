'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { City } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface CityCardProps {
  city: City;
}

function CityCard({ city }: CityCardProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(city.likes);
  const [dislikeCount, setDislikeCount] = useState(city.dislikes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(prev => prev - 1);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount(prev => prev - 1);
    } else {
      setDisliked(true);
      setDislikeCount(prev => prev + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(prev => prev - 1);
      }
    }
  };

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
          <button
            onClick={handleLike}
            className="flex items-center gap-1 transition-colors hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
            aria-label={liked ? `${city.name} 좋아요 취소` : `${city.name} 좋아요`}
            aria-pressed={liked}
          >
            <ThumbsUp
              className={`w-5 h-5 ${liked ? 'fill-blue-500 text-blue-500' : 'text-gray-400'}`}
            />
            <span className={`text-sm font-medium ${liked ? 'text-blue-500' : 'text-gray-600'}`}>
              {likeCount}
            </span>
          </button>

          <button
            onClick={handleDislike}
            className="flex items-center gap-1 transition-colors hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md p-1"
            aria-label={disliked ? `${city.name} 싫어요 취소` : `${city.name} 싫어요`}
            aria-pressed={disliked}
          >
            <span className={`text-sm font-medium ${disliked ? 'text-red-500' : 'text-gray-600'}`}>
              {dislikeCount}
            </span>
            <ThumbsDown
              className={`w-5 h-5 ${disliked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">예산: </span>
            <span className="font-medium">{city.budget}</span>
          </div>
          <div>
            <span className="text-muted-foreground">지역: </span>
            <span className="font-medium">{city.region_category}</span>
          </div>
          <div>
            <span className="text-muted-foreground">환경: </span>
            <span className="font-medium">{city.environment.join(', ')}</span>
          </div>
          <div>
            <span className="text-muted-foreground">계절: </span>
            <span className="font-medium">{city.best_season.join(', ')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(CityCard);
