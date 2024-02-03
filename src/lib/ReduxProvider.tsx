'use client';
import React, { FC } from 'react';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { IChildrenProps } from '@/interfaces/common.interface';

/**
 * 리덕스
 * @param children: 자식 컴포넌트
 */
const ReduxProvider: FC<IChildrenProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
