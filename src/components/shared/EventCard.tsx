import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Event } from '@/types';
import { formatRelativeTime } from '@/lib/utils';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { EVENT_TYPES } from '@/lib/constants';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const attendeePercentage = (event.attendees / event.maxAttendees) * 100;
  const isFull = attendeePercentage >= 100;
  const isAlmostFull = attendeePercentage >= 80;

  return (
    <Card className="hover-lift">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{event.emoji}</span>
            <div>
              <h3 className="font-bold line-clamp-2 leading-tight">
                {event.title}
              </h3>
              <Badge variant="outline" className="text-xs mt-1">
                {EVENT_TYPES[event.type]}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{formatRelativeTime(event.date)}</span>
            <Clock className="w-4 h-4 text-muted-foreground ml-2" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium text-primary">{event.cityName}</p>
              <p className="text-xs text-muted-foreground">{event.location}</p>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-sm">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">
                {event.attendees} / {event.maxAttendees}명
              </span>
            </div>
            {isFull ? (
              <Badge variant="destructive" className="text-xs">마감</Badge>
            ) : isAlmostFull ? (
              <Badge variant="default" className="text-xs bg-warning">거의 마감</Badge>
            ) : (
              <Badge variant="default" className="text-xs bg-success">참가 가능</Badge>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                isFull ? 'bg-danger' : isAlmostFull ? 'bg-warning' : 'bg-success'
              }`}
              style={{ width: `${Math.min(attendeePercentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image
              src={event.organizer.avatar}
              alt={event.organizer.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            주최: {event.organizer.name}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
