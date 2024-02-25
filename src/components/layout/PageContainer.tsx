import { IChildrenProps } from '@/interfaces/common.interface';
import { theme } from '@/styles/theme';
import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';

/**
 * 페이지 컨테이너
 * @param children: 자식 컴포넌트
 */
const PageContainer: FC<IChildrenProps> = ({ children }) => {
  return (
    <Container>
      <Contents>{children}</Contents>
      <Background>
        <PinkBall src={'/static/images/pink-ball.png'} alt="pink-ball" width={687} height={525} />
        <YellowBall src={'/static/images/yellow-ball.png'} alt="yellow-ball" width={671} height={636} />
        <GreenBall src={'/static/images/green-ball.png'} alt="green-ball" width={646} height={226} />
      </Background>
    </Container>
  );
};

export default PageContainer;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

const Contents = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  backdrop-filter: blur(34px);
  box-shadow: ${theme.boxShadow.contents};
  z-index: 10;
  padding: 30px 20px 0;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const PinkBall = styled(Image)`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const YellowBall = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
`;

const GreenBall = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
