import { mockBlogs } from '@/data';
import BlogCard from '@/components/shared/BlogCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  const latestBlogs = mockBlogs.slice(0, 3);

  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📝 노마드 가이드
          </h2>
          <p className="text-lg text-muted-foreground">
            한국에서 노마드 생활을 시작하는데 도움이 되는 가이드
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            블로그 전체보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
