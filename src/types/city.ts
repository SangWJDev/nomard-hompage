export interface City {
  id: string;
  name: string;
  nameEn: string;
  region: 'seoul' | 'busan' | 'jeju' | 'gyeonggi' | 'gangwon' | 'chungcheong' | 'jeolla' | 'gyeongsang';
  description: string;
  image: string;
  emoji: string;
  costOfLiving: {
    accommodation: number; // Monthly in KRW
    food: number; // Monthly in KRW
    transportation: number; // Monthly in KRW
    total: number; // Monthly in KRW
  };
  highlights: string[];
  rating: number; // 1-5
  reviewCount: number;
  population: number;
  internetSpeed: number; // Mbps
  coworkingSpaces: number;
  cafesWithWifi: number;
  tags: string[];
  featured: boolean;
}

export type CityRegion = City['region'];

export interface CityFilter {
  region?: CityRegion[];
  maxBudget?: number;
  minInternetSpeed?: number;
  tags?: string[];
  searchQuery?: string;
}
