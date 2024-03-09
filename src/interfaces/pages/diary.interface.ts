import { DiaryType } from '@/constants/pages/diary.constant';

/**
 * EmptyBox 컴포넌트 props
 */
export interface IEmptyBoxProps {
  onChangeType: (type: DiaryType) => void; // 다이어리 출력 타입 변경 함수
}

/**
 * 달력의 날짜
 */
export interface IDate {
  day: number; // 일
  type: 'prev' | 'current' | 'next'; // 일 타입
}
