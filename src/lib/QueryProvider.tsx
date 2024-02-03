'use client';
import React from 'react';
import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { IChildrenProps } from '@/interfaces/common.interface';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

/**
 * 리액트 쿼리
 * @param children: 자식 컴포넌트
 */
const QueryProvider: FC<IChildrenProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
