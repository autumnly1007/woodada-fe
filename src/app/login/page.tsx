'use client';
import React, { FC } from 'react';
import styled from 'styled-components';
import logo from '@/public/static/images/logo_big.png';
import Image from 'next/image';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { theme } from '@/styles/theme';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

/**
 * 로그인 페이지
 */
const Login: FC = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    //const response = await fetch('/api/oauth2/google');
    const response = await fetch(
      'https://accounts.google.com/o/oauth2/auth?client_id=769747151656-i84bhc07vino6im6qn44q8au8qg9pq3j.apps.googleusercontent.com&redirect_uri=http://ec2-3-38-243-167.ap-northeast-2.compute.amazonaws.com/api/v1/oauth2/google&scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code',
      { method: 'GET' },
    );
    console.log(response);
  };
  /**
   * 로그인
   */
  const handleLogin = () => {};

  const handleGoogleLoginSuccess = (res: any) => {
    console.log(res); // 로그인한 사용자 정보 조회
    router.push('/google'); // /google 페이지로 이동
    alert('성공');
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.log(error);
    alert('실패');
  };

  return (
    <Container>
      <Image src={logo} alt={'logo'} width={330} height={68} />
      <Buttons>
        {/* <GoogleOAuthProvider clientId="769747151656-i84bhc07vino6im6qn44q8au8qg9pq3j.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(res) => {
              console.log(res);
            }}
            onError={() => {
              console.log('실패');
            }}
          />
        </GoogleOAuthProvider> */}
        <Button text="구글 로그인" onClick={handleGoogleLogin} />
        <Button text={'이메일 로그인·회원가입'} onClick={handleLogin} theme={ButtonTheme.ORANGE} />
      </Buttons>
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

const GoogleLoginButton = styled(GoogleLogin)`
  width: 350px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px !important;
  border-radius: 5px !important;
  cursor: pointer;
  font-size: 17px !important;
  font-weight: 500 !important;
  border-color: ${theme.colors.lightGray} !important;
  background-color: ${theme.colors.white} !important;
  color: ${theme.colors.text} !important;
  box-shadow: none !important;
  > div {
    margin: 0 !important;
  }
  &:hover {
    border-width: 2px !important;
    border-color: ${theme.colors.orange} !important;
  }
`;
