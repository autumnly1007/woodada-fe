import React, { FC, useState } from 'react';
import styled from 'styled-components';
import EmptyBox from './EmptyBox';
import { DiaryType } from '@/constants/pages/diary.constant';
import WriteBox from './WriteBox';

/**
 * 일기 컴포넌트
 */
const Diary: FC = () => {
  const [type, setType] = useState<DiaryType>(DiaryType.EMPTY);

  /**
   * 다이어리 출력 타입 변경 함수
   * @param type: 타입
   */
  const handleChangeType = (type: DiaryType) => {
    setType(type);
  };

  return (
    <Container>
      {type === DiaryType.EMPTY && <EmptyBox onChangeType={handleChangeType} />}
      {type === DiaryType.WRITE && <WriteBox />}
    </Container>
  );
};

export default Diary;

const Container = styled.div`
  width: 597px;
  height: 746px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
