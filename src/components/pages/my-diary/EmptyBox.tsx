import { Button } from '@/components/ui/Button';
import { ButtonTheme } from '@/constants/ui-button.constant';
import React from 'react';
import styled from 'styled-components';

/**
 * 작성된 일기가 없을 경우 렌더링할 컴포넌트
 */
const EmptyBox = () => {
  return (
    <>
      <EmptyText>
        <p>아직 작성된 일기가 없습니다</p>
        <p>새롭게 일기를 작성해 주세요!</p>
      </EmptyText>
      <Button text="일기 쓰러가기" theme={ButtonTheme.WHITE} />
    </>
  );
};

export default EmptyBox;

const EmptyText = styled.div`
  font-family: 'SCoreDream';
  color: #676767;
  line-height: 25px;
`;
