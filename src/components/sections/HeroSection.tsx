import SearchBar from '@/components/shared/SearchBar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden nature-gradient">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 organic-blob blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 organic-blob blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-success/10 organic-blob blur-3xl" />
        <Image
          src="https://source.unsplash.com/1920x1080/?nature,forest,green,peaceful"
          alt="Natural landscape"
          fill
          priority
          className="object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center py-24">
        <div className="emoji-large mb-8 animate-fade-in-down">🌿</div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
          자연과 함께하는
          <br />
          <span className="text-primary">디지털 노마드 라이프</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-muted-foreground">
          한국의 아름다운 자연 속에서 일하고, 쉬고, 성장하세요
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <Badge variant="secondary" className="cursor-pointer hover-lift rounded-full px-5 py-2.5 text-base nature-shadow">
            🌲 숲속 휴양
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift rounded-full px-5 py-2.5 text-base nature-shadow">
            🌊 해변 워케이션
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift rounded-full px-5 py-2.5 text-base nature-shadow">
            🏔️ 산속 리트릿
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift rounded-full px-5 py-2.5 text-base nature-shadow">
            🌾 전원 생활
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover-lift rounded-full px-5 py-2.5 text-base nature-shadow">
            🍃 자연 친화
          </Badge>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <Button size="lg" className="text-lg px-10 py-6 rounded-2xl forest-gradient hover:opacity-90 transition-opacity nature-shadow-lg">
            🌿 자연 속 공간 찾기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 rounded-2xl border-2 border-primary bg-background/80 backdrop-blur-sm hover:bg-primary/10 nature-shadow"
          >
            🌱 커뮤니티 참여하기
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 justify-center text-base">
          <div className="flex items-center gap-3 bg-background/60 backdrop-blur-sm px-6 py-3 rounded-full nature-shadow">
            <span className="text-3xl">🌳</span>
            <span className="text-foreground">현재 <strong className="text-primary">2,341명</strong> 자연 속 활동중</span>
          </div>
          <div className="flex items-center gap-3 bg-background/60 backdrop-blur-sm px-6 py-3 rounded-full nature-shadow">
            <span className="text-3xl">💚</span>
            <span className="text-foreground"><strong className="text-primary">5,678개</strong> 진심 리뷰</span>
          </div>
          <div className="flex items-center gap-3 bg-background/60 backdrop-blur-sm px-6 py-3 rounded-full nature-shadow">
            <span className="text-3xl">🌸</span>
            <span className="text-foreground"><strong className="text-primary">28개</strong> 이번 달 자연 모임</span>
          </div>
        </div>
      </div>
    </section>
  );
}
