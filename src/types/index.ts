export type { City, CityRegion, CityFilter } from './city';
export type { Review } from './review';
export type { BlogPost } from './blog';
export type { Event } from './event';

export interface PressLogo {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
  description: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  emoji: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}
