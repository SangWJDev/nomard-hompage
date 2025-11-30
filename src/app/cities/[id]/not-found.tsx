import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 이모지 */}
        <div className="text-8xl mb-6">🗺️</div>

        {/* 타이틀 */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          도시를 찾을 수 없습니다
        </h1>

        {/* 설명 */}
        <p className="text-lg text-muted-foreground mb-8">
          요청하신 도시 정보가 존재하지 않습니다.
          <br />
          URL을 확인하시거나 다른 도시를 탐색해보세요.
        </p>

        {/* 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Home className="w-5 h-5" />
              홈으로 돌아가기
            </Button>
          </Link>
          <Link href="/#cities">
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Search className="w-5 h-5" />
              도시 둘러보기
            </Button>
          </Link>
        </div>

        {/* 추가 도움말 */}
        <div className="mt-12 p-6 bg-muted/50 rounded-xl">
          <h2 className="font-semibold mb-3">인기 도시를 찾고 계신가요?</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/cities/seoul-gangnam">
              <Button variant="ghost" size="sm">
                강남
              </Button>
            </Link>
            <Link href="/cities/jeju-city">
              <Button variant="ghost" size="sm">
                제주시
              </Button>
            </Link>
            <Link href="/cities/busan-haeundae">
              <Button variant="ghost" size="sm">
                해운대
              </Button>
            </Link>
            <Link href="/cities/jeonju">
              <Button variant="ghost" size="sm">
                전주
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
