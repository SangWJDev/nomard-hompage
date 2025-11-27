export interface Review {
  id: string;
  author: {
    name: string;
    avatar: string;
    occupation: string;
    emoji: string;
  };
  cityId: string;
  cityName: string;
  rating: number; // 1-5
  content: string;
  date: string; // ISO date string
  helpful: number;
  images?: string[];
}
