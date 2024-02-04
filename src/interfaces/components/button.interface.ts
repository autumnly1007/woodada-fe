import { ButtonTheme } from '@/constants/ui-button.constant';
import { ReactNode } from 'react';

/**
 * 공통 버튼 컴포넌트 Props
 */
export interface IButtonProps {
  type?: 'button' | 'submit'; // 버튼 타입
  text: string; // 텍스트
  onClick?: () => void; // 클릭 이벤트 함수
  disabled?: boolean; // 활성화 여부
  theme?: ButtonTheme; // 테마
  children?: ReactNode; // 자식 컴포넌트
  padding?: string; // 내부 여백
}
