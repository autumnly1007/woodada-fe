import { theme } from '@/styles/theme';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

/**
 * 달력 컴포넌트
 */
const Calendar = () => {
  return (
    <Container>
      <MonthBox>
        <h2>May 2024</h2>
        <ArrowContainer>
          <button>
            <Image src={'/static/images/arrow-left.png'} width={69} height={69} alt="prev" />
          </button>
          <button>
            <Image src={'/static/images/arrow-right.png'} width={69} height={69} alt="next" />
          </button>
        </ArrowContainer>
      </MonthBox>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 24px;
  width: 753px;
  height: 745px;
  background-color: ${theme.colors.white};
`;

const MonthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  font-weight: 300;
  font-family: 'SCoreDream';
  color: #676767;
  width: 663px;
  height: 69px;
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 10px;
`;
