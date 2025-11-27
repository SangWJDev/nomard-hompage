import NewsletterForm from '@/components/shared/NewsletterForm';

export default function Newsletter() {
  return (
    <section className="section bg-gray-50">
      <div className="container-narrow text-center">
        <div className="emoji-large mb-6">📬</div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          뉴스레터 구독
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          매주 새로운 도시 정보, 노마드 팁, 이벤트 소식을 받아보세요
        </p>

        <div className="mb-8">
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-semibold mb-1">맞춤 정보</h3>
              <p className="text-sm text-muted-foreground">
                관심 도시 기반 추천
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">이벤트 알림</h3>
              <p className="text-sm text-muted-foreground">
                새로운 모임 소식
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold mb-1">노마드 팁</h3>
              <p className="text-sm text-muted-foreground">
                실용적인 생활 정보
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
