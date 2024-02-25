'use client';
import PageContainer from '@/components/layout/PageContainer';
import React from 'react';
import withAuth from '../hoc/withAuth';
import SearchBar from '@/components/pages/my-diary/SearchBar';
import Calendar from '@/components/pages/my-diary/Calendar';
import styled from 'styled-components';
import Diary from '@/components/pages/my-diary/Diary';

/**
 * 나의 다이어리 페이지
 */
const MyDiary = () => {
  return (
    <PageContainer>
      <SearchBar />
      <DiaryWrapper>
        <Calendar />
        <Diary />
      </DiaryWrapper>
    </PageContainer>
  );
};

export default withAuth(MyDiary);

const DiaryWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
