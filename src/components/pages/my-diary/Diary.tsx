import React from 'react';
import styled from 'styled-components';
import EmptyBox from './EmptyBox';

/**
 * 일기 컴포넌트
 */
const Diary = () => {
  return (
    <Container>
      <EmptyBox />
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
