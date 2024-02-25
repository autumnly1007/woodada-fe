import { ElementType } from 'react';
import { IAnyMap } from './common.interface';
import { MessageType, ModalType } from '@/constants/ui-modal.constant';

/**
 * 공통 모달 오픈 시 파라미터
 */
export interface IModal {
  title: string; // 제목
  content?: string; // 내용
  Component?: ElementType; // 컴포넌트
  messageType?: MessageType; // 메시지 타입
  params?: IAnyMap; // 파라미터
}

/**
 * 공통 모달 컴포넌트 props
 */
export interface IModalProps extends IModal {
  id: string; // 모달 id
  type: ModalType; // 모달 타입
  resolve: (value: boolean) => void; // Promise resolve
}

/**
 * 모달 상태
 */
export interface IModalState {
  modals: IModalProps[]; // 모달 상태
}
