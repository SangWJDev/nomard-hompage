export const COLORS = {
  primary: '#4A90E2',
  success: '#7ED321',
  warning: '#F5A623',
  danger: '#D0021B',
} as const;

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1200,
} as const;

export const KOREAN_REGIONS = {
  seoul: '서울',
  busan: '부산',
  jeju: '제주',
  gyeonggi: '경기',
  gangwon: '강원',
  chungcheong: '충청',
  jeolla: '전라',
  gyeongsang: '경상',
} as const;

export const CITY_TAGS = [
  '해변',
  '산',
  '도시',
  '시골',
  '카페',
  '코워킹',
  '저렴함',
  '고속 인터넷',
  '관광',
  '조용함',
  '활기참',
  '문화',
  '역사',
  '자연',
] as const;

export const EVENT_TYPES = {
  meetup: '밋업',
  workshop: '워크샵',
  networking: '네트워킹',
  social: '소셜',
} as const;
