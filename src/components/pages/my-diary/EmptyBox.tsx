import { Button } from '@/components/ui/Button';
import { DiaryType } from '@/constants/pages/diary.constant';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { IEmptyBoxProps } from '@/interfaces/pages/diary.interface';
import React, { FC } from 'react';
import styled from 'styled-components';

/**
 * 작성된 일기가 없을 경우 렌더링할 컴포넌트
 * @param onChangeType: 다이어리 출력 타입 변경 함수
 */
const EmptyBox: FC<IEmptyBoxProps> = ({ onChangeType }) => {
  return (
    <>
      <EmptyText>
        <p>아직 작성된 일기가 없습니다</p>
        <p>새롭게 일기를 작성해 주세요!</p>
      </EmptyText>
      <Button text="일기 쓰러가기" theme={ButtonTheme.WHITE} onClick={() => onChangeType(DiaryType.WRITE)} />
    </>
  );
};

export default EmptyBox;

const EmptyText = styled.div`
  font-family: 'SCoreDream';
  color: #676767;
  line-height: 25px;
`;
