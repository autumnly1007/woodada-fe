'use client';
import { useModal } from '@/hooks/useModal';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { ComponentType, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * 인증이 필요한 페이지에서 사용할 HOC
 * @param Component: 렌더링할 컴포넌트
 */
const withAuth = (Component: ComponentType) => {
  const WithAuth: FC = (props) => {
    const { Alert } = useModal();
    const token = useSelector((state: RootState) => state.auth.token);
    const router = useRouter();

    const handleSession = async () => {
      if (!token) {
        await Alert('알림', '로그인이 필요합니다.');
        router.push('/login');
      }
      // TODO: 추후 구현
      const response = await fetch('/api/session', {
        method: 'GET',
      });
    };

    useEffect(() => {
      // handleSession();
    }, []);

    return <Component {...props} />;
  };
  return WithAuth;
};

export default withAuth;
