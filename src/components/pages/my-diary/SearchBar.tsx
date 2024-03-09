import { theme } from '@/styles/theme';
import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';

/**
 * 일기 검색창 컴포넌트
 */
const SearchBar: FC = () => {
  return (
    <Container>
      <Image src="/static/images/search.png" alt="search" width={24} height={24} />
      <SearchInput type="text" placeholder="검색어를 입력해 주세요." />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 65px;
  width: 340px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 7px;
  box-shadow: inset 0px 4px 10px rgba(205, 205, 205, 0.25);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 17px;
`;
