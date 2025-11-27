import { mockReviews } from '@/data';
import ReviewCard from '@/components/shared/ReviewCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function UserReviews() {
  const featuredReviews = mockReviews.slice(0, 6);

  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💬 실제 노마드들의 생생한 후기
          </h2>
          <p className="text-lg text-muted-foreground">
            한국에서 노마드 생활을 하고 있는 분들의 진짜 이야기
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            후기 더보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
