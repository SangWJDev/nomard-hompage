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
  reviewCount: number;
  likes: number;
  dislikes: number;
  budget: '100만원 미만' | '100~200만원' | '200만원 이상';
  region_category: '전체' | '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도';
  environment: ('자연친화' | '도심선호' | '카페작업' | '코워킹 필수')[];
  best_season: ('봄' | '여름' | '가을' | '겨울')[];
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
