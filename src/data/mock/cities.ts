import { City } from '@/types';

// Helper function to auto-classify budget based on total cost
const getBudgetCategory = (total: number): City['budget'] => {
  if (total < 1000000) return '100만원 미만';
  if (total < 2000000) return '100~200만원';
  return '200만원 이상';
};

// Helper function to auto-map region to region_category
const getRegionCategory = (region: City['region']): City['region_category'] => {
  const regionMap: Record<City['region'], City['region_category']> = {
    seoul: '수도권',
    gyeonggi: '수도권',
    busan: '경상도',
    gyeongsang: '경상도',
    jeolla: '전라도',
    gangwon: '강원도',
    jeju: '제주도',
    chungcheong: '충청도',
  };
  return regionMap[region];
};

// 6 Detailed Cities
const detailedCities: City[] = [
  {
    id: 'seoul-gangnam',
    name: '강남',
    nameEn: 'Gangnam',
    region: 'seoul',
    description: '서울의 비즈니스 중심지로 현대적인 코워킹 스페이스와 24시간 카페가 많습니다. 빠른 인터넷과 편리한 대중교통으로 디지털 노마드에게 최적의 환경을 제공합니다.',
    image: 'https://source.unsplash.com/800x600/?seoul,gangnam,city',
    emoji: '🏙️',
    costOfLiving: {
      accommodation: 1200000,
      food: 600000,
      transportation: 100000,
      total: 1900000,
    },
    highlights: [
      '24시간 카페와 코워킹 스페이스 풍부',
      '지하철 2호선 접근성 우수',
      '다양한 국제 레스토랑',
      '빠른 기가 인터넷',
      '활기찬 비즈니스 문화',
    ],
    reviewCount: 234,
    likes: 189,
    dislikes: 45,
    budget: getBudgetCategory(1900000),
    region_category: getRegionCategory('seoul'),
    environment: ['도심선호', '카페작업', '코워킹 필수'],
    best_season: ['봄', '가을'],
    population: 561052,
    internetSpeed: 1000,
    coworkingSpaces: 45,
    cafesWithWifi: 320,
    tags: ['도시', '코워킹', '고속 인터넷', '활기참', '카페'],
    featured: true,
  },
  {
    id: 'busan-haeundae',
    name: '해운대',
    nameEn: 'Haeundae',
    region: 'busan',
    description: '아름다운 해변과 온화한 기후를 자랑하는 부산의 대표적인 관광지입니다. 바다를 보며 일할 수 있는 카페들이 많고, 서울보다 저렴한 생활비로 여유로운 노마드 라이프를 즐길 수 있습니다.',
    image: 'https://source.unsplash.com/800x600/?busan,beach,korea',
    emoji: '🏖️',
    costOfLiving: {
      accommodation: 800000,
      food: 500000,
      transportation: 80000,
      total: 1380000,
    },
    highlights: [
      '해변가 오션뷰 카페',
      '서울 대비 30% 저렴한 생활비',
      '온화한 기후',
      '신선한 해산물',
      '여유로운 분위기',
    ],
    reviewCount: 189,
    likes: 156,
    dislikes: 33,
    budget: getBudgetCategory(1380000),
    region_category: getRegionCategory('busan'),
    environment: ['자연친화', '카페작업'],
    best_season: ['봄', '여름', '가을'],
    population: 423000,
    internetSpeed: 500,
    coworkingSpaces: 18,
    cafesWithWifi: 150,
    tags: ['해변', '저렴함', '자연', '관광', '조용함'],
    featured: true,
  },
  {
    id: 'jeju-city',
    name: '제주시',
    nameEn: 'Jeju City',
    region: 'jeju',
    description: '한국의 대표적인 섬 도시로 아름다운 자연환경과 쾌적한 날씨를 자랑합니다. 원격근무하기 좋은 카페와 워케이션 스팟이 많아 디지털 노마드들의 로망의 장소입니다.',
    image: 'https://source.unsplash.com/800x600/?jeju,island,nature',
    emoji: '🏝️',
    costOfLiving: {
      accommodation: 900000,
      food: 550000,
      transportation: 150000,
      total: 1600000,
    },
    highlights: [
      '아름다운 자연환경',
      '쾌적한 날씨',
      '워케이션 명소',
      '신선한 로컬 푸드',
      '평화로운 분위기',
    ],
    reviewCount: 312,
    likes: 278,
    dislikes: 34,
    budget: getBudgetCategory(1600000),
    region_category: getRegionCategory('jeju'),
    environment: ['자연친화', '카페작업'],
    best_season: ['봄', '여름', '가을'],
    population: 435413,
    internetSpeed: 500,
    coworkingSpaces: 12,
    cafesWithWifi: 85,
    tags: ['해변', '자연', '관광', '조용함', '문화'],
    featured: true,
  },
  {
    id: 'jeonju',
    name: '전주',
    nameEn: 'Jeonju',
    region: 'jeolla',
    description: '한국의 전통 문화를 느낄 수 있는 역사적인 도시입니다. 전주 한옥마을과 맛있는 음식으로 유명하며, 저렴한 생활비로 한국 문화를 체험하며 일할 수 있는 최적의 장소입니다.',
    image: 'https://source.unsplash.com/800x600/?korea,temple,traditional',
    emoji: '🏛️',
    costOfLiving: {
      accommodation: 600000,
      food: 450000,
      transportation: 70000,
      total: 1120000,
    },
    highlights: [
      '전통 한옥마을',
      '저렴한 생활비',
      '전주 비빔밥 등 유명 음식',
      '문화 체험 기회 많음',
      '차분한 분위기',
    ],
    reviewCount: 98,
    likes: 67,
    dislikes: 31,
    budget: getBudgetCategory(1120000),
    region_category: getRegionCategory('jeolla'),
    environment: ['도심선호', '카페작업'],
    best_season: ['봄', '가을'],
    population: 658172,
    internetSpeed: 500,
    coworkingSpaces: 8,
    cafesWithWifi: 95,
    tags: ['저렴함', '문화', '역사', '조용함', '도시'],
    featured: false,
  },
  {
    id: 'gangneung',
    name: '강릉',
    nameEn: 'Gangneung',
    region: 'gangwon',
    description: '산과 바다를 동시에 즐길 수 있는 강원도의 대표 도시입니다. 커피 도시로 유명하며, 안목해변 카페거리에서 바다를 보며 작업하기 좋습니다. 자연 속에서 평화롭게 일하고 싶은 노마드에게 추천합니다.',
    image: 'https://source.unsplash.com/800x600/?mountain,sea,korea',
    emoji: '⛰️',
    costOfLiving: {
      accommodation: 700000,
      food: 480000,
      transportation: 90000,
      total: 1270000,
    },
    highlights: [
      '커피 도시 - 안목해변 카페거리',
      '산과 바다 동시 접근',
      '신선한 해산물과 로컬 푸드',
      '평화로운 자연환경',
      '적당한 생활비',
    ],
    reviewCount: 145,
    likes: 112,
    dislikes: 33,
    budget: getBudgetCategory(1270000),
    region_category: getRegionCategory('gangwon'),
    environment: ['자연친화', '카페작업'],
    best_season: ['봄', '여름', '가을'],
    population: 213658,
    internetSpeed: 500,
    coworkingSpaces: 6,
    cafesWithWifi: 78,
    tags: ['해변', '산', '카페', '자연', '조용함'],
    featured: false,
  },
  {
    id: 'seoul-hongdae',
    name: '홍대',
    nameEn: 'Hongdae',
    region: 'seoul',
    description: '젊은 예술가와 창작자들이 모이는 서울의 문화 중심지입니다. 다양한 카페와 코워킹 스페이스, 활기찬 나이트라이프를 즐길 수 있으며, 창의적인 에너지가 넘치는 곳입니다.',
    image: 'https://source.unsplash.com/800x600/?seoul,night,urban',
    emoji: '🎨',
    costOfLiving: {
      accommodation: 1000000,
      food: 550000,
      transportation: 100000,
      total: 1650000,
    },
    highlights: [
      '창의적이고 예술적인 분위기',
      '다양한 독립 카페',
      '활기찬 나이트라이프',
      '지하철 2호선 접근성',
      '젊은 커뮤니티',
    ],
    reviewCount: 187,
    likes: 145,
    dislikes: 42,
    budget: getBudgetCategory(1650000),
    region_category: getRegionCategory('seoul'),
    environment: ['도심선호', '카페작업', '코워킹 필수'],
    best_season: ['봄', '가을'],
    population: 385000,
    internetSpeed: 1000,
    coworkingSpaces: 32,
    cafesWithWifi: 245,
    tags: ['도시', '활기참', '카페', '문화', '코워킹'],
    featured: false,
  },
];

// Helper function to generate deterministic values from string id
const hashCode = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// Template function for remaining cities
const createTemplateCity = (
  id: string,
  name: string,
  nameEn: string,
  region: City['region'],
  emoji: string
): City => {
  const total = 1230000;
  const hash = hashCode(id);

  return {
    id,
    name,
    nameEn,
    region,
    description: `${name}은(는) ${region === 'seoul' ? '서울' : region === 'busan' ? '부산' : region === 'jeju' ? '제주' : region === 'gyeonggi' ? '경기' : region === 'gangwon' ? '강원' : region === 'chungcheong' ? '충청' : region === 'jeolla' ? '전라' : '경상'}의 중요한 도시입니다. 디지털 노마드를 위한 기본 인프라를 갖추고 있습니다.`,
    image: `https://source.unsplash.com/800x600/?korea,city&sig=${id}`,
    emoji,
    costOfLiving: {
      accommodation: 700000,
      food: 450000,
      transportation: 80000,
      total,
    },
    highlights: ['기본 인프라 완비', '적절한 생활비', '고속 인터넷 지원'],
    reviewCount: (hash % 20) + 10,
    likes: (hash % 50) + 20,
    dislikes: (hash % 15) + 5,
    budget: getBudgetCategory(total),
    region_category: getRegionCategory(region),
    environment: ['도심선호', '카페작업'],
    best_season: ['봄', '가을'],
    population: (hash % 500000) + 100000,
    internetSpeed: 500,
    coworkingSpaces: (hash % 5) + 3,
    cafesWithWifi: (hash % 50) + 30,
    tags: ['도시', '고속 인터넷'],
    featured: false,
  };
};

// 43 Template Cities
const templateCities: City[] = [
  // Seoul (additional areas)
  createTemplateCity('seoul-itaewon', '이태원', 'Itaewon', 'seoul', '🌍'),
  createTemplateCity('seoul-mapo', '마포', 'Mapo', 'seoul', '🏙️'),
  createTemplateCity('seoul-songpa', '송파', 'Songpa', 'seoul', '🏢'),
  createTemplateCity('seoul-yeouido', '여의도', 'Yeouido', 'seoul', '🏦'),

  // Busan (additional areas)
  createTemplateCity('busan-gwangalli', '광안리', 'Gwangalli', 'busan', '🌊'),
  createTemplateCity('busan-seomyeon', '서면', 'Seomyeon', 'busan', '🏙️'),

  // Gyeonggi
  createTemplateCity('suwon', '수원', 'Suwon', 'gyeonggi', '🏰'),
  createTemplateCity('seongnam', '성남', 'Seongnam', 'gyeonggi', '🏙️'),
  createTemplateCity('bundang', '분당', 'Bundang', 'gyeonggi', '🌳'),
  createTemplateCity('ilsan', '일산', 'Ilsan', 'gyeonggi', '🌲'),
  createTemplateCity('paju', '파주', 'Paju', 'gyeonggi', '📚'),
  createTemplateCity('goyang', '고양', 'Goyang', 'gyeonggi', '🏞️'),
  createTemplateCity('yongin', '용인', 'Yongin', 'gyeonggi', '🎢'),

  // Incheon
  createTemplateCity('incheon-songdo', '송도', 'Songdo', 'gyeonggi', '🏙️'),
  createTemplateCity('incheon-chinatown', '차이나타운', 'Chinatown', 'gyeonggi', '🏮'),

  // Gangwon
  createTemplateCity('sokcho', '속초', 'Sokcho', 'gangwon', '🏔️'),
  createTemplateCity('chuncheon', '춘천', 'Chuncheon', 'gangwon', '🌊'),
  createTemplateCity('pyeongchang', '평창', 'Pyeongchang', 'gangwon', '⛷️'),

  // Jeju (additional)
  createTemplateCity('jeju-seogwipo', '서귀포', 'Seogwipo', 'jeju', '🌺'),

  // Daegu
  createTemplateCity('daegu-junggu', '대구 중구', 'Daegu Jung-gu', 'gyeongsang', '🏛️'),
  createTemplateCity('daegu-suseong', '대구 수성구', 'Daegu Suseong', 'gyeongsang', '💼'),

  // Daejeon
  createTemplateCity('daejeon-dunsan', '대전 둔산', 'Daejeon Dunsan', 'chungcheong', '🏙️'),
  createTemplateCity('daejeon-yuseong', '대전 유성', 'Daejeon Yuseong', 'chungcheong', '🔬'),

  // Gwangju
  createTemplateCity('gwangju-sangmu', '광주 상무', 'Gwangju Sangmu', 'jeolla', '🏙️'),
  createTemplateCity('gwangju-chungjang', '광주 충장', 'Gwangju Chungjang', 'jeolla', '🛍️'),

  // Chungcheong
  createTemplateCity('cheongju', '청주', 'Cheongju', 'chungcheong', '🏙️'),
  createTemplateCity('cheonan', '천안', 'Cheonan', 'chungcheong', '🚄'),
  createTemplateCity('gongju', '공주', 'Gongju', 'chungcheong', '🏰'),
  createTemplateCity('sejong', '세종', 'Sejong', 'chungcheong', '🏛️'),

  // Jeolla
  createTemplateCity('yeosu', '여수', 'Yeosu', 'jeolla', '🌊'),
  createTemplateCity('mokpo', '목포', 'Mokpo', 'jeolla', '⚓'),
  createTemplateCity('gunsan', '군산', 'Gunsan', 'jeolla', '🏝️'),

  // Gyeongsang
  createTemplateCity('gyeongju', '경주', 'Gyeongju', 'gyeongsang', '🏯'),
  createTemplateCity('pohang', '포항', 'Pohang', 'gyeongsang', '🏭'),
  createTemplateCity('ulsan', '울산', 'Ulsan', 'gyeongsang', '🏭'),
  createTemplateCity('changwon', '창원', 'Changwon', 'gyeongsang', '🏙️'),
  createTemplateCity('jinju', '진주', 'Jinju', 'gyeongsang', '🏯'),
  createTemplateCity('tongyeong', '통영', 'Tongyeong', 'gyeongsang', '🚢'),
  createTemplateCity('andong', '안동', 'Andong', 'gyeongsang', '🏘️'),

  // Additional cities
  createTemplateCity('wonju', '원주', 'Wonju', 'gangwon', '🏙️'),
  createTemplateCity('asan', '아산', 'Asan', 'chungcheong', '♨️'),
  createTemplateCity('iksan', '익산', 'Iksan', 'jeolla', '🌾'),
  createTemplateCity('gimhae', '김해', 'Gimhae', 'gyeongsang', '✈️'),
];

// Combine all cities
export const mockCities: City[] = [...detailedCities, ...templateCities];

// Helper functions
export const getFeaturedCities = (): City[] => {
  return mockCities.filter(city => city.featured).slice(0, 10);
};

export const getCityById = (id: string): City | undefined => {
  return mockCities.find(city => city.id === id);
};

export const getCitiesByRegion = (region: string): City[] => {
  return mockCities.filter(city => city.region === region);
};

export const getTopRatedCities = (limit: number = 10): City[] => {
  return [...mockCities]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit);
};

export const getCitiesByLikes = (limit?: number): City[] => {
  const sorted = [...mockCities].sort((a, b) => b.likes - a.likes);
  return limit ? sorted.slice(0, limit) : sorted;
};
