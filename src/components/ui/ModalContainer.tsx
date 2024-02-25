import React, { FC, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Alert from './Alert';
import Confirm from './Confirm';
import { ModalType } from '@/constants/ui-modal.constant';
import Modal from './Modal';
import styled from 'styled-components';
import { ModalContext } from './ModalProvider';

/**
 * 모달 컨테이너 컴포넌트
 */
const ModalContainer: FC = () => {
  const modalState = useContext(ModalContext);
  const [modalPortal, setModalPortal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portal = document.getElementById('modal-portal');
    setModalPortal(portal);
  }, []);

  if (!modalState || !modalPortal) return null;

  return (
    <>
      {/* 모달 상태를 가져와서 react portal 을 생성하여 모달 출력 */}
      {modalState.modals.map((modal, index) => {
        const ModalComponent =
          modal.type === ModalType.MODAL ? Alert : modal.type === ModalType.CONFIRM ? Confirm : Modal;
        return createPortal(
          <>
            {/* 마지막 최상단 모달에만 오버레이 출력 */}
            {index === modalState.modals.length - 1 && <ModalOverlay />}
            <ModalWrapper>
              <ModalComponent key={modal.id} {...modal} />
            </ModalWrapper>
          </>,
          modalPortal,
        );
      })}
    </>
  );
};

export default ModalContainer;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 350px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1010;
`;
