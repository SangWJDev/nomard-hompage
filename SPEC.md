# 한국 노마드 홈페이지 리팩토링 구현 명세서

## 프로젝트 개요
Next.js 14 App Router 기반 한국 노마드 홈페이지를 간소화하고, 평가 시스템을 별점에서 좋아요/싫어요로 변경하며, 새로운 필터 시스템을 도입하는 프로젝트입니다.

---

## 구현 단계 (Phases)

- [x] Phase 1: 페이지 정리 및 네비게이션 단순화
- [x] Phase 2: City 타입 및 Mock 데이터 구조 변경
- [x] Phase 3: CityCard 컴포넌트 리팩토링
- [x] Phase 4: 필터 시스템 업데이트
- [x] Phase 5: FeaturedCities 섹션 및 필터링 로직 구현
- [x] Phase 6: 홈페이지 섹션 정리
- [ ] Phase 7: 통합 테스트 및 UI/UX 개선

---

## Phase 1: 페이지 정리 및 네비게이션 단순화

### 목표
불필요한 페이지를 삭제하고, 네비게이션을 인증 관련 기능만 남도록 단순화합니다.

### 수정/개선 체크리스트
- [x] dashboard 페이지 디렉토리 전체 삭제
- [x] Navigation 컴포넌트에서 메뉴 아이템 배열을 빈 배열로 변경
- [x] 로그인/회원가입 버튼만 유지
- [x] middleware.ts에서 dashboard 관련 보호 경로 제거

### 완료 후 검증 체크리스트
- [x] /dashboard 경로 접근 시 404 에러 발생
- [x] 네비게이션에 "홈", "도시 찾기", "커뮤니티", "가이드" 메뉴 미표시
- [x] 네비게이션에 로그인/회원가입 버튼만 표시
- [x] 홈페이지 정상 렌더링
- [x] TypeScript 컴파일 에러 없음

### 수정 파일 목록
- [x] `src/app/dashboard/page.tsx` - **삭제**
- [x] `src/components/sections/Navigation.tsx` - menuItems 빈 배열로 수정
- [x] `middleware.ts` - dashboard 경로 제거

---

## Phase 2: City 타입 및 Mock 데이터 구조 변경

### 목표
별점(rating) 시스템을 좋아요/싫어요 시스템으로 변경하고, 새로운 필터 속성을 추가합니다.

### 수정/개선 체크리스트
- [x] City 인터페이스에서 `rating` 필드 제거
- [x] City 인터페이스에 다음 필드 추가:
  - [x] `likes: number`
  - [x] `dislikes: number`
  - [x] `budget: '100만원 미만' | '100~200만원' | '200만원 이상'`
  - [x] `region_category: '전체' | '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도'`
  - [x] `environment: ('자연친화' | '도심선호' | '카페작업' | '코워킹 필수')[]`
  - [x] `best_season: ('봄' | '여름' | '가을' | '겨울')[]`
- [x] constants.ts에 필터 옵션 상수 추가
- [x] 6개 상세 도시 데이터에 실제 값 할당
- [x] createTemplateCity 함수에 새 필드 추가
- [x] costOfLiving.total 기준으로 budget 자동 분류
- [x] region 기준으로 region_category 자동 매핑

### 완료 후 검증 체크리스트
- [x] TypeScript 컴파일 에러 없음 (Phase 3에서 해결)
- [x] 모든 49개 도시에 필수 필드 존재
- [x] budget 분류 로직:
  - [x] total < 1,000,000 → '100만원 미만'
  - [x] 1,000,000 ≤ total < 2,000,000 → '100~200만원'
  - [x] total ≥ 2,000,000 → '200만원 이상'
- [x] region_category 매핑:
  - [x] seoul, gyeonggi → '수도권'
  - [x] busan, gyeongsang → '경상도'
  - [x] jeolla → '전라도'
  - [x] gangwon → '강원도'
  - [x] jeju → '제주도'
  - [x] chungcheong → '충청도'

### 수정 파일 목록
- [x] `src/types/city.ts` - City 인터페이스 수정
- [x] `src/lib/constants.ts` - 필터 상수 추가
- [x] `src/data/mock/cities.ts` - 모든 도시 데이터 업데이트

---

## Phase 3: CityCard 컴포넌트 리팩토링

### 목표
별점 표시를 좋아요/싫어요 버튼으로 변경하고, Key-Value 형태로 필터 정보를 표시합니다.

### 수정/개선 체크리스트
- [x] 파일 상단에 `'use client'` 추가
- [x] useState로 좋아요/싫어요 상태 관리
- [x] 별점 표시 코드 제거 (Star 아이콘 제거)
- [x] 좋아요/싫어요 버튼 추가 (ThumbsUp, ThumbsDown)
- [x] 버튼 클릭 핸들러 구현:
  - [x] 좋아요 클릭: liked 토글, disliked 해제, 카운트 증감
  - [x] 싫어요 클릭: disliked 토글, liked 해제, 카운트 증감
- [x] 버튼 색상 조건부 렌더링 (liked: 파란색, disliked: 빨간색)
- [x] tags 표시 제거
- [x] 필터 정보 Key-Value 형태로 표시:
  - [x] 예산
  - [x] 지역
  - [x] 환경
  - [x] 최고 계절
- [x] "자세히 보기" 버튼 제거

### 완료 후 검증 체크리스트
- [x] 카드에 별점 미표시
- [x] 좋아요/싫어요 버튼 표시 (아이콘 + 숫자)
- [x] 좋아요 클릭 시:
  - [x] 아이콘 파란색 변경
  - [x] 숫자 1 증가
  - [x] 싫어요 활성화 시 비활성화 및 숫자 1 감소
- [x] 싫어요 클릭 시:
  - [x] 아이콘 빨간색 변경
  - [x] 숫자 1 증가
  - [x] 좋아요 활성화 시 비활성화 및 숫자 1 감소
- [x] 같은 버튼 재클릭 시 비활성화 및 숫자 1 감소
- [x] 필터 정보 4개가 Key-Value로 표시
- [x] 카드 레이아웃 깔끔하게 정리

### 수정 파일 목록
- [x] `src/components/shared/CityCard.tsx` - 전면 수정

---

## Phase 4: 필터 시스템 업데이트

### 목표
새로운 필터 옵션을 FilterPanel에 추가하고, 필터링 로직을 구현합니다.

### 수정/개선 체크리스트
- [x] constants.ts에 새 필터 상수 추가
- [x] FilterPanel 컴포넌트 전면 수정:
  - [x] CITY_TAGS 사용 제거
  - [x] 4개 필터 섹션 추가 (예산, 지역, 환경, 계절)
- [x] 상태 관리 업데이트:
  - [x] selectedBudget (단일 선택)
  - [x] selectedRegions (다중 선택)
  - [x] selectedEnvironments (다중 선택)
  - [x] selectedSeasons (다중 선택)
- [x] 예산 필터: 단일 선택 Badge
- [x] 지역/환경/계절 필터: 다중 선택 Badge
- [x] "초기화" 버튼으로 모든 필터 리셋
- [x] onFilterChange props로 필터 상태 전달

### 완료 후 검증 체크리스트
- [x] 4개 필터 카테고리 명확히 구분
- [x] 예산 필터 하나만 선택 가능
- [x] 지역/환경/계절 필터 여러 개 선택 가능
- [x] 선택된 필터 시각적 강조 (variant="default")
- [x] 비선택 필터 outline 스타일
- [x] "초기화" 버튼 클릭 시 모든 필터 리셋
- [x] 필터 선택 시 부모 컴포넌트로 전달

### 수정 파일 목록
- [x] `src/lib/constants.ts` - 필터 상수 추가
- [x] `src/components/shared/FilterPanel.tsx` - 전면 수정

---

## Phase 5: FeaturedCities 섹션 및 필터링 로직 구현

### 목표
"TOP 추천 도시"를 "도시 리스트"로 변경하고, 좋아요 순으로 정렬하며, 필터링 기능을 연동합니다.

### 수정/개선 체크리스트
- [x] FeaturedCities 컴포넌트를 클라이언트 컴포넌트로 변경
- [x] 섹션 제목 변경: "도시 리스트"
- [x] 설명 문구 변경: "좋아요가 많은 순서대로 정렬"
- [x] cities.ts에 좋아요 순 정렬 함수 추가:
  ```typescript
  export const getCitiesByLikes = (limit?: number): City[] => {
    const sorted = [...mockCities].sort((a, b) => b.likes - a.likes);
    return limit ? sorted.slice(0, limit) : sorted;
  };
  ```
- [x] 데이터 가져오기: `getCitiesByLikes()` 사용 (전체 49개)
- [x] "전체 도시 보기" 버튼 제거
- [x] CityFinder와 필터 연동
- [x] 필터링 로직 구현

### 완료 후 검증 체크리스트
- [x] 섹션 제목 "도시 리스트"로 변경
- [x] 도시가 좋아요 내림차순 정렬
- [x] 49개 도시 모두 표시
- [x] "자세히 보기" 버튼 제거 확인
- [x] 필터 선택 시 해당 조건 도시만 표시

### 수정 파일 목록
- [x] `src/data/mock/cities.ts` - 정렬 함수 추가
- [x] `src/data/index.ts` - export 추가
- [x] `src/components/sections/FeaturedCities.tsx` - 제목, 데이터 소스 수정
- [x] `src/lib/filters.ts` - 필터링 로직 추가 (신규 파일)
- [ ] `src/components/sections/CityFinder.tsx` - 필터 연동 (Phase 6에서 처리)

---

## Phase 6: 홈페이지 섹션 정리

### 목표
요구사항에 맞게 홈페이지에서 불필요한 섹션을 제거하고 심플하게 만듭니다.

### 수정/개선 체크리스트
- [x] page.tsx에서 유지할 섹션:
  - [x] Navigation
  - [x] HeroSection
  - [x] FeaturedCities (도시 리스트)
  - [x] CityFinder (필터)
  - [x] Footer
- [x] page.tsx에서 제거할 섹션:
  - [x] SocialProof
  - [x] UserReviews
  - [x] UpcomingEvents
  - [x] StatsDashboard
  - [x] BlogPreview
  - [x] Newsletter
  - [x] Partners
  - [x] CTASection
- [x] import 문에서 제거된 섹션 삭제
- [x] JSX에서 제거된 섹션 렌더링 코드 삭제

### 완료 후 검증 체크리스트
- [x] 홈페이지 깔끔하게 정리
- [x] 제거된 섹션들 미표시
- [x] 남은 섹션들 정상 렌더링
- [x] 페이지 스크롤 자연스러움
- [x] 페이지 로딩 속도 개선

### 수정 파일 목록
- [x] `src/app/page.tsx` - 섹션 제거

---

## Phase 7: 통합 테스트 및 UI/UX 개선

### 목표
모든 변경사항을 통합하고, 최종 테스트 및 개선을 수행합니다.

### 수정/개선 체크리스트
- [x] TypeScript 컴파일: `npm run build`
- [x] 로컬 서버 실행: `npm run dev`
- [x] 기능 테스트:
  - [x] 좋아요/싫어요 버튼 동작
  - [x] 필터 선택 시 도시 목록 필터링
  - [x] 네비게이션 메뉴 정리
  - [x] 로그인/회원가입 페이지 정상 작동
  - [x] Dashboard 페이지 404
- [x] 반응형 디자인:
  - [x] 모바일 (< 768px)
  - [x] 태블릿 (768px ~ 1200px)
  - [x] 데스크톱 (> 1200px)
- [x] 접근성 개선:
  - [x] 버튼 aria-label
  - [x] 키보드 네비게이션
  - [x] 색상 대비
- [x] 성능 최적화:
  - [x] 이미지 lazy loading
  - [x] CityCard React.memo 적용
  - [x] 불필요한 re-render 방지
- [x] 스타일 정리

### 완료 후 검증 체크리스트
- [x] `npm run build` 성공
- [x] 모든 페이지 에러 없이 렌더링
- [x] 좋아요/싫어요 기능 작동
- [x] 필터 기능 정상 작동
- [x] 모바일 UI 정상
- [x] 성능 지표 양호
- [x] 접근성 이슈 없음
- [x] 사용자 경험 자연스러움

### 수정 파일 목록
- [ ] 모든 이전 Phase 파일 재검토
- [ ] 추가 스타일링/로직 수정
- [ ] README.md 업데이트 (선택적)

---

## 주요 기술 결정사항

### 1. 좋아요/싫어요 상태 관리
- [ ] **방법**: 클라이언트 컴포넌트 useState
- [ ] **저장**: 로컬 상태 (추후 Supabase 연동 가능)
- [ ] **로직**: 상호 배타적, 재클릭 시 비활성화

### 2. 필터링 로직
- [ ] **위치**: CityFinder 또는 FeaturedCities
- [ ] **방법**: 클라이언트 사이드 필터링
- [ ] **구현**: Array.filter() 사용

### 3. 데이터 구조
- [ ] **위치**: `/src/data/mock/cities.ts`
- [ ] **자동화**: budget, region_category 자동 생성
- [ ] **수동**: environment, best_season 수동 설정

### 4. 컴포넌트 구조
- [ ] **CityCard**: 클라이언트 컴포넌트
- [ ] **FilterPanel**: 클라이언트 컴포넌트
- [ ] **FeaturedCities**: 클라이언트 컴포넌트
- [ ] **Navigation**: 클라이언트 컴포넌트 유지

---

## Critical Files

- [ ] `src/types/city.ts` - 모든 City 타입 정의 (Phase 2)
- [ ] `src/data/mock/cities.ts` - 49개 도시 데이터 (Phase 2, 5)
- [ ] `src/components/shared/CityCard.tsx` - 카드 UI (Phase 3)
- [ ] `src/components/shared/FilterPanel.tsx` - 필터 UI (Phase 4)
- [ ] `src/components/sections/FeaturedCities.tsx` - 도시 리스트 (Phase 5)

---

## 구현 원칙

- [ ] 데이터베이스 사용하지 않음 (Mock 데이터만 사용)
- [ ] 각 Phase는 독립적으로 실행 가능
- [ ] TypeScript 타입 안정성 유지
- [ ] 기존 UI/UX 패턴 준수
- [ ] 반응형 디자인 유지
- [ ] 접근성 표준 준수
