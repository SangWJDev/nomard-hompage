import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="section bg-gradient-to-r from-primary to-primary-600 text-white">
      <div className="container-narrow text-center">
        <div className="emoji-large mb-6">🚀</div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          지금 바로 시작하세요!
        </h2>

        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          한국노마드와 함께 전국 어디서든 자유롭게 일하고 살아보세요.
          <br />
          2,341명의 노마드가 이미 시작했습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            🔍 도시 찾아보기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
          >
            👥 회원가입하기
          </Button>
        </div>

        <p className="text-sm opacity-75">
          또는 SNS 계정으로 시작하기
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Button variant="outline" size="sm" className="bg-white/10 border-white text-white hover:bg-white/20">
            카카오
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white text-white hover:bg-white/20">
            네이버
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white text-white hover:bg-white/20">
            구글
          </Button>
        </div>
      </div>
    </section>
  );
}
