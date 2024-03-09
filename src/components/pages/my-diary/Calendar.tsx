import { IDate } from '@/interfaces/pages/diary.interface';
import { theme } from '@/styles/theme';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

/**
 * 달력 컴포넌트
 */
const Calendar: FC = () => {
  const daysText = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const monthText = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [dates, setDates] = useState<IDate[]>([]);

  const prevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  useEffect(() => {
    const daysInMonth = currentDate.daysInMonth();
    const startDay = currentDate.startOf('month').day();
    const prevMonthDays = startDay;
    const totalDaysShown = Math.ceil((prevMonthDays + daysInMonth) / 7) * 7;

    const days: IDate[] = Array.from({ length: totalDaysShown }, (_, index) => {
      if (index < prevMonthDays) {
        const day = currentDate.subtract(1, 'month').endOf('month').date() - prevMonthDays + index + 1;
        return { day, type: 'prev' };
      } else if (index < prevMonthDays + daysInMonth) {
        const day = index - prevMonthDays + 1;
        return { day, type: 'current' };
      } else {
        const day = index - (prevMonthDays + daysInMonth) + 1;
        return { day, type: 'next' };
      }
    });

    setDates(days);
  }, [currentDate]);

  return (
    <Container>
      <MonthBox>
        <h2>{`${monthText[currentDate.month()]} ${currentDate.year()}`}</h2>
        <ArrowContainer>
          <button onClick={prevMonth}>
            <Image src={'/static/images/arrow-left.png'} width={69} height={69} alt="prev" />
          </button>
          <button onClick={nextMonth}>
            <Image src={'/static/images/arrow-right.png'} width={69} height={69} alt="next" />
          </button>
        </ArrowContainer>
      </MonthBox>
      <DaysBox>
        {daysText.map((day) => (
          <DayBox key={day}>{day}</DayBox>
        ))}
      </DaysBox>
      <DateBox>
        {dates.map((day, index) => (
          <Date key={index} type={day.type}>
            {day.day}
          </Date>
        ))}
      </DateBox>
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
  min-height: 745px;
  background-color: ${theme.colors.white};
  font-family: 'SCoreDream';
  font-weight: 300;
  color: #676767;
`;

const MonthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  width: 663px;
  height: 69px;
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DaysBox = styled.div`
  width: 100%;
  height: 96px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DayBox = styled.div`
  padding: 30px;
  font-size: 21px;
  line-height: 36px;
  text-align: center;
`;

const DateBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  border: 1.5px solid #dfd9d4;
`;

const Date = styled.div<{ type: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  border: 1.5px solid #dfd9d4;
  cursor: pointer;
  background-color: ${(props) => (props.type === 'current' ? 'white' : '#F6F3F0')};
  color: ${(props) => (props.type === 'current' ? '#676767' : '#A8A8A8')};
`;
