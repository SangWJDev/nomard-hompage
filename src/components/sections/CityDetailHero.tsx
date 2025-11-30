'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { City } from '@/types';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { getCityPreference, setCityPreference } from '@/lib/localStorage';
import { formatCurrency } from '@/lib/utils';

interface CityDetailHeroProps {
  city: City;
}

export default function CityDetailHero({ city }: CityDetailHeroProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(city.likes);
  const [dislikeCount, setDislikeCount] = useState(city.dislikes);

  // 로컬 스토리지에서 좋아요/싫어요 상태 로드
  useEffect(() => {
    const preference = getCityPreference(city.id);
    if (preference) {
      setLiked(preference.liked);
      setDisliked(preference.disliked);

      // 카운트 조정 (로컬 상태와 저장된 상태 차이만큼)
      if (preference.liked) {
        setLikeCount(prev => prev + 1);
      }
      if (preference.disliked) {
        setDislikeCount(prev => prev + 1);
      }
    }
  }, [city.id]);

  const handleLike = () => {
    const newLiked = !liked;
    const newDisliked = newLiked ? false : disliked;

    setLiked(newLiked);
    if (newLiked) {
      setLikeCount(prev => prev + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(prev => prev - 1);
      }
    } else {
      setLikeCount(prev => prev - 1);
    }

    // 로컬 스토리지에 저장
    setCityPreference(city.id, newLiked, newDisliked);
  };

  const handleDislike = () => {
    const newDisliked = !disliked;
    const newLiked = newDisliked ? false : liked;

    setDisliked(newDisliked);
    if (newDisliked) {
      setDislikeCount(prev => prev + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(prev => prev - 1);
      }
    } else {
      setDislikeCount(prev => prev - 1);
    }

    // 로컬 스토리지에 저장
    setCityPreference(city.id, newLiked, newDisliked);
  };

  return (
    <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src={city.image}
        alt={city.name}
        fill
        priority
        className="object-cover"
      />

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      {/* 콘텐츠 */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            {/* 왼쪽: 도시 정보 */}
            <div className="flex-1 min-w-[300px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl shadow-lg">
                  {city.emoji}
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {city.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90">
                    {city.nameEn}
                  </p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed">
                {city.description}
              </p>
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {formatCurrency(city.costOfLiving.total)}
                  </span>
                  <span className="text-sm sm:text-base text-white/90">/월</span>
                </div>
              </div>
            </div>

            {/* 오른쪽: 좋아요/싫어요 */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleLike}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={liked ? `${city.name} 좋아요 취소` : `${city.name} 좋아요`}
                aria-pressed={liked}
              >
                <ThumbsUp
                  className={`w-6 h-6 ${
                    liked ? 'fill-blue-400 text-blue-400' : 'text-white'
                  }`}
                />
                <span
                  className={`text-lg font-bold ${
                    liked ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {likeCount}
                </span>
              </button>

              <button
                onClick={handleDislike}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={disliked ? `${city.name} 싫어요 취소` : `${city.name} 싫어요`}
                aria-pressed={disliked}
              >
                <ThumbsDown
                  className={`w-6 h-6 ${
                    disliked ? 'fill-red-400 text-red-400' : 'text-white'
                  }`}
                />
                <span
                  className={`text-lg font-bold ${
                    disliked ? 'text-red-400' : 'text-white'
                  }`}
                >
                  {dislikeCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
