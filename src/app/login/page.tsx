'use client';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { Button } from '@/components/ui/Button';
import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

/**
 * 로그인 페이지
 */
const Login: FC = () => {
  const router = useRouter();
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  // const;

  /**
   * 로그인
   */
  const handleLogin = () => {
    setIsEmailLogin(true);
  };

  /**
   * 구글 로그인 성공
   * @param code: 코드 데이터
   */
  const handleGoogleLoginSuccess = async (code: any) => {
    // TODO: 백엔드 에러 수정 후 주석 해제
    // const { status } = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ code }),
    // });
    // if (status === 200) {
    router.push('/my-diary');
    // }
  };

  /**
   * 구글 로그인 설정
   */
  const googleLogin = useGoogleLogin({
    scope: 'email profile',
    onSuccess: ({ code }) => handleGoogleLoginSuccess(code),
    onError: (error) => console.error(error),
    flow: 'auth-code',
  });

  return (
    <Container>
      {!isEmailLogin ? (
        <>
          <Image src={'/static/images/logo_big.png'} alt={'logo'} width={330} height={68} />
          <Buttons>
            <Button text={'구글 로그인'} onClick={googleLogin} theme={ButtonTheme.GOOGLE}>
              <Image src={'/static/images/google.png'} width={23} height={23} alt={'google login'} />
            </Button>
            <Button text={'이메일 로그인·회원가입'} onClick={handleLogin} theme={ButtonTheme.ORANGE} />
          </Buttons>
        </>
      ) : (
        <>이메일 로그인</>
      )}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 218px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
