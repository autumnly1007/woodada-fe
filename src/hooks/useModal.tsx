import { ModalContext, ModalDispatch } from '@/components/ui/ModalProvider';
import { MessageType, ModalType } from '@/constants/ui-modal.constant';
import { IAnyMap } from '@/interfaces/common.interface';
import { IModal, IModalProps } from '@/interfaces/modal.interface';
import { ElementType, useContext } from 'react';
import { v4 as uuid } from 'uuid';

/**
 * 공통 모달 커스텀 훅
 */
export const useModal = () => {
  const state = useContext(ModalContext);
  const dispatch = useContext(ModalDispatch);

  if (state === undefined || dispatch === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  /**
   * 모달 오픈
   * @param content: 모달 컨텐츠
   * @param params: 모달 파라미터
   */
  const openModal = (props: IModal & { type: ModalType }): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      const payload: IModalProps = { ...props, id: uuid(), resolve };
      dispatch({
        type: 'OPEN_MODAL',
        payload,
      });
    });
  };

  /**
   * 모달 닫기
   * @param id: 모달 id
   * @param decision: 컨펌창 반환값
   */
  const closeModal = (id: string, decision: boolean = true) => {
    dispatch({ type: 'CLOSE_MODAL', payload: { id, decision } });
  };

  /**
   * 모달창
   * @param title: 제목
   * @param content: 내용
   * @param Component: 컴포넌트
   * @param messageType: 메시지 타입
   * @param params: 파라미터
   */
  const Modal = (
    title: string,
    content?: string,
    Component?: ElementType,
    messageType: MessageType = MessageType.DEFAULT,
    params?: IAnyMap,
  ): Promise<boolean> => {
    return openModal({ title, content, Component, messageType, params, type: ModalType.MODAL });
  };

  /**
   * 알림창
   * @param title: 제목
   * @param content: 내용
   * @param messageType: 메시지 타입
   * @param params: 파라미터
   */
  const Alert = (
    title: string,
    content?: string,
    Component?: ElementType,
    messageType: MessageType = MessageType.ERROR,
    params?: IAnyMap,
  ): Promise<boolean> => {
    return openModal({ title, content, messageType, params, type: ModalType.ALERT });
  };

  /**
   * 컨펌창
   * @param title: 제목
   * @param content: 내용
   * @param Component: 컴포넌트
   * @param messageType: 메시지 타입
   * @param params: 파라미터
   */
  const Confirm = (
    title: string,
    content?: string,
    Component?: ElementType,
    messageType: MessageType = MessageType.ERROR,
    params?: IAnyMap,
  ): Promise<boolean> => {
    return openModal({ title, content, Component, messageType, params, type: ModalType.CONFIRM });
  };

  return { Modal, Alert, Confirm, closeModal };
};
