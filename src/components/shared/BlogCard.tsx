import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { Clock, Eye } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-white">{post.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-3">
        <h3 className="text-lg font-bold line-clamp-2 leading-tight">
          {post.title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium flex items-center gap-1">
                {post.author.name}
                <span>{post.author.emoji}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}분</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{post.views.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
