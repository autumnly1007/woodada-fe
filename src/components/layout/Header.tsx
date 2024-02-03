'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';
import logo from '@/public/static/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Link href={'/'}>
        <Image src={logo} alt="logo" width={141} height={49} />
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  padding: 16px 30px 16px 40px;
  box-sizing: border-box;
  box-shadow: 0 4px 20px 0 rgba(178, 178, 178, 0.15);
`;
