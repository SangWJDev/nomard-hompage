export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Not needed for preview
  image: string;
  author: {
    name: string;
    avatar: string;
    emoji: string;
  };
  category: string;
  tags: string[];
  publishedAt: string; // ISO date string
  readTime: number; // in minutes
  views: number;
}
