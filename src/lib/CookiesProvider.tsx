'use client';
import { IChildrenProps } from '@/interfaces/common.interface';
import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';

/**
 * 리액트 쿠키
 * @param children: 자식 컴포넌트
 */
const ReactCookiesProvider: FC<IChildrenProps> = ({ children }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default ReactCookiesProvider;
