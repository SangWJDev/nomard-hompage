export interface Event {
  id: string;
  title: string;
  description: string;
  emoji: string;
  cityId: string;
  cityName: string;
  date: string; // ISO date string
  time: string; // "19:00"
  location: string;
  attendees: number;
  maxAttendees: number;
  type: 'meetup' | 'workshop' | 'networking' | 'social';
  image?: string;
  organizer: {
    name: string;
    avatar: string;
  };
}
