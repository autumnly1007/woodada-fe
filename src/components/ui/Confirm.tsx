import React, { FC } from 'react';
import { IModalProps } from '@/interfaces/modal.interface';
import { useModal } from '@/hooks/useModal';
import { Button } from './Button';
import { ButtonTheme } from '@/constants/ui-button.constant';
import ButtonGroup from './Buttons';
import styled from 'styled-components';
import Space from './Space';

/**
 * 공통 컨펌창 컴포넌트
 * @param id: 모달 id
 * @param title: 제목
 * @param content: 내용
 * @param Component: 컴포넌트
 * @param messageType: 메시지 타입
 * @param params: 파라미터
 */
const Confirm: FC<IModalProps> = ({ id, title, content, Component, messageType, params }) => {
  const { closeModal } = useModal();

  /**
   * 확인 버튼 클릭
   */
  const handleConfirm = () => {
    closeModal(id, true);
  };

  /**
   * 취소 버튼 클릭
   */
  const handleCancel = () => {
    closeModal(id, false);
  };

  return (
    <>
      <Title>{title}</Title>
      {Component ? <Component {...params} /> : <div>{content}</div>}
      <Space height={'20px'} />
      <ButtonGroup>
        <Button text={'취소'} onClick={handleCancel} theme={ButtonTheme.WHITE} />
        <Button text={'확인'} onClick={handleConfirm} theme={ButtonTheme.ORANGE} />
      </ButtonGroup>
    </>
  );
};

export default Confirm;

const Title = styled.h2`
  padding-bottom: 20px;
`;
