import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Review } from '@/types';
import { formatDate } from '@/lib/utils';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={review.author.avatar}
              alt={review.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{review.author.name}</h3>
              <span className="text-lg">{review.author.emoji}</span>
            </div>
            <p className="text-sm text-muted-foreground">{review.author.occupation}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {formatDate(review.date)}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <span className="text-sm font-medium text-primary">
            📍 {review.cityName}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {review.content}
        </p>
        <div className="flex items-center gap-4 mt-4 pt-4 border-t">
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ThumbsUp className="w-4 h-4" />
            <span>{review.helpful}</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>댓글</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
