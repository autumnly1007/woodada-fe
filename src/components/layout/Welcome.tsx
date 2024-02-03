'use client';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/static/images/logo_big.png';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

/**
 * 시작하기 페이지
 */
const Welcome = () => {
  const router = useRouter();

  /**
   * 시작하기 버튼 클릭 시 로그인 페이지로 이동
   */
  const handleStart = () => {
    router.push('/login');
  };

  return (
    <Container>
      <Image src={logo} alt="logo" width={442} height={88} />
      <Button text="시작하기" onClick={handleStart} theme={'white'} />
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
