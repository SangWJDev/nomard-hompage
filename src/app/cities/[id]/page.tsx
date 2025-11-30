import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockCities, getCityById } from '@/data/mock/cities';
import CityDetailHero from '@/components/sections/CityDetailHero';
import CostBreakdown from '@/components/sections/CostBreakdown';
import CityHighlights from '@/components/sections/CityHighlights';
import CityStats from '@/components/sections/CityStats';
import RelatedCities from '@/components/sections/RelatedCities';

interface CityPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 정적 페이지 생성을 위한 경로 목록
export async function generateStaticParams() {
  return mockCities.map((city) => ({
    id: city.id,
  }));
}

// SEO 메타데이터 생성
export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { id } = await params;
  const city = getCityById(id);

  if (!city) {
    return {
      title: '도시를 찾을 수 없습니다',
    };
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return {
    title: `${city.name} (${city.nameEn}) - Korean Nomad`,
    description: `${city.description} 월 평균 생활비: ${formatCurrency(
      city.costOfLiving.total
    )}. ${city.highlights.slice(0, 2).join(', ')}`,
    keywords: [
      city.name,
      city.nameEn,
      '디지털 노마드',
      '한국',
      '원격근무',
      '생활비',
      ...city.tags,
    ],
    openGraph: {
      title: `${city.name} - Korean Nomad`,
      description: city.description,
      type: 'website',
      images: [
        {
          url: city.image,
          width: 1200,
          height: 630,
          alt: city.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} - Korean Nomad`,
      description: city.description,
      images: [city.image],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { id } = await params;
  const city = getCityById(id);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero 섹션 */}
      <CityDetailHero city={city} />

      {/* 생활비 분석 섹션 */}
      <CostBreakdown city={city} />

      {/* 도시 하이라이트 섹션 */}
      <CityHighlights city={city} />

      {/* 도시 통계 섹션 */}
      <CityStats city={city} />

      {/* 관련 도시 추천 섹션 */}
      <RelatedCities city={city} />
    </main>
  );
}
