import { mockEvents } from '@/data';
import EventCard from '@/components/shared/EventCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function UpcomingEvents() {
  const upcomingEvents = mockEvents.slice(0, 6);

  return (
    <section className="section bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📅 이번 주 모임
          </h2>
          <p className="text-lg text-muted-foreground">
            같은 도시의 노마드들과 함께 네트워킹하고 교류해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            전체 이벤트 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
