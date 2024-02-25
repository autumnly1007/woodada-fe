import React from 'react';
import { Metadata } from 'next';
import StyledComponents from '@/lib/StyledComponents';
import QueryProvider from '@/lib/QueryProvider';
import ReduxProvider from '@/lib/ReduxProvider';
import ReactCookiesProvider from '@/lib/CookiesProvider';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import { IChildrenProps } from '@/interfaces/common.interface';

/**
 * 메타 데이터
 */
export const metadata: Metadata = {
  title: {
    default: 'woodada',
    template: 'woodada | %s',
  },
  description: '우리들의 다정한 다이어리',
};

/**
 * 루트 레이아웃
 * @param children: 자식 컴포넌트
 */
export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang={'en'}>
      <body>
        <QueryProvider>
          <ReduxProvider>
            <ReactCookiesProvider>
              <StyledComponents>
                <Header />
                <Main>{children}</Main>
              </StyledComponents>
            </ReactCookiesProvider>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
