/**
 * 로컬 스토리지 유틸리티
 * 도시 좋아요/싫어요 상태를 브라우저에 저장하고 불러옵니다.
 */

const STORAGE_KEY = 'city-preferences';

export interface CityPreference {
  liked: boolean;
  disliked: boolean;
}

interface CityPreferencesStorage {
  [cityId: string]: CityPreference;
}

/**
 * 특정 도시의 좋아요/싫어요 상태를 가져옵니다.
 */
export function getCityPreference(cityId: string): CityPreference | null {
  // SSR 환경에서 window 객체 체크
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const preferences: CityPreferencesStorage = JSON.parse(stored);
    return preferences[cityId] || null;
  } catch (error) {
    console.error('Failed to get city preference:', error);
    return null;
  }
}

/**
 * 특정 도시의 좋아요/싫어요 상태를 저장합니다.
 */
export function setCityPreference(
  cityId: string,
  liked: boolean,
  disliked: boolean
): void {
  // SSR 환경에서 window 객체 체크
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const preferences: CityPreferencesStorage = stored ? JSON.parse(stored) : {};

    preferences[cityId] = { liked, disliked };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Failed to set city preference:', error);
  }
}

/**
 * 특정 도시의 좋아요/싫어요 상태를 삭제합니다.
 */
export function clearCityPreference(cityId: string): void {
  // SSR 환경에서 window 객체 체크
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return;
    }

    const preferences: CityPreferencesStorage = JSON.parse(stored);
    delete preferences[cityId];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Failed to clear city preference:', error);
  }
}

/**
 * 모든 도시의 좋아요/싫어요 상태를 삭제합니다.
 */
export function clearAllCityPreferences(): void {
  // SSR 환경에서 window 객체 체크
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear all city preferences:', error);
  }
}
