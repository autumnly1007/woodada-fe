'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { styled } from 'styled-components';
import logo from '@/public/static/images/logo.png';
import { usePathname, useRouter } from 'next/navigation';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { Button } from '../ui/Button';
import { theme } from '@/styles/theme';

/**
 * 헤더 컴포넌트
 */
const Header: FC = () => {
  const router = useRouter();
  const path = usePathname();

  /**
   * 회원가입 페이지로 이동
   */
  const handleSignup = () => {
    router.push('/signup');
  };

  /**
   * 로그인 페이지로 이동
   */
  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <Container>
      <Link href={'/'}>
        <Image src={logo} alt={'logo'} width={141} height={49} />
      </Link>
      {path === '/' && (
        <Buttons>
          <Button text={'로그인'} onClick={handleLogin} theme={ButtonTheme.TEXT} />
          <Button text={'회원가입'} onClick={handleSignup} theme={ButtonTheme.TEXT} />
        </Buttons>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px 16px 40px;
  box-sizing: border-box;
  box-shadow: ${theme.boxShadow.header};
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  > :first-child {
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 6px;
      right: -5px;
      width: 1px;
      height: 10px;
      background-color: ${theme.colors.gray};
    }
  }
`;
