import { Stat } from '@/types';

export const mockStats: Stat[] = [
  {
    id: 'stat-1',
    label: '활성 회원',
    value: '2,341',
    emoji: '👥',
    change: '+12%',
    trend: 'up',
  },
  {
    id: 'stat-2',
    label: '등록된 도시',
    value: '49',
    emoji: '🏙️',
  },
  {
    id: 'stat-3',
    label: '이달의 이벤트',
    value: '28',
    emoji: '📅',
    change: '+8',
    trend: 'up',
  },
  {
    id: 'stat-4',
    label: '코워킹 스페이스',
    value: '156',
    emoji: '💼',
  },
];
