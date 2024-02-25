import React, { FC } from 'react';
import { IModalProps } from '@/interfaces/modal.interface';
import { useModal } from '@/hooks/useModal';
import styled from 'styled-components';

/**
 * 공통 모달 컴포넌트
 * @param id: 모달 id
 * @param title: 제목
 * @param content: 내용
 * @param Component: 컴포넌트
 * @param messageType: 메시지 타입
 * @param params: 파라미터
 */
const Modal: FC<IModalProps> = ({ id, title, content, Component, messageType, params }) => {
  const { closeModal } = useModal();

  return (
    <>
      <Title>{title}</Title>
      {Component ? <Component {...params} /> : content}
      <button onClick={() => closeModal(id)}>Close</button>
    </>
  );
};

export default Modal;

const Title = styled.h2`
  padding-bottom: 20px;
`;
