import React, { FC } from 'react';
import { IModalProps } from '@/interfaces/modal.interface';
import { useModal } from '@/hooks/useModal';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { Button } from './Button';
import Space from './Space';
import styled from 'styled-components';
import ButtonGroup from './Buttons';

/**
 * 공통 알림창 컴포넌트
 * @param id: 모달 id
 * @param title: 제목
 * @param content: 내용
 * @param Component: 컴포넌트
 * @param messageType: 메시지 타입
 * @param params: 파라미터
 */
const Alert: FC<IModalProps> = ({ id, title, content, Component, messageType, params }) => {
  const { closeModal } = useModal();

  return (
    <>
      <Title>{title}</Title>
      {Component ? <Component {...params} /> : <div>{content}</div>}
      <Space height="20px" />
      <ButtonGroup>
        <Button text={'확인'} onClick={() => closeModal(id)} theme={ButtonTheme.ORANGE} />
      </ButtonGroup>
    </>
  );
};

export default Alert;

const Title = styled.h2`
  padding-bottom: 20px;
`;
