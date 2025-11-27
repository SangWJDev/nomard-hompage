import SearchBar from '@/components/shared/SearchBar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://source.unsplash.com/1920x1080/?seoul,skyline,night"
          alt="Seoul skyline"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-white py-20">
        <div className="emoji-large mb-6">🌏</div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          한국 어디서나
          <br />
          일하고 싶은 곳에서
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          디지털 노마드를 위한 최고의 도시를 찾아보세요
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Badge variant="secondary" className="cursor-pointer hover-lift">
            💰 저렴
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift">
            🌊 바다
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift">
            🏔️ 산
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift">
            ☕ 카페
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift">
            🚄 서울 근교
          </Badge>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8">
            🔍 도시 찾기 시작하기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
          >
            👥 커뮤니티 가입
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            <span>현재 <strong>2,341명</strong> 활동중</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span><strong>5,678개</strong> 리뷰</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <span><strong>28개</strong> 이번 달 모임</span>
          </div>
        </div>
      </div>
    </section>
  );
}
