import React from 'react';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import StyledComponents from '@/lib/StyledComponents';
import QueryProvider from '@/lib/QueryProvider';
import ReduxProvider from '@/lib/ReduxProvider';
import ReactCookiesProvider from '@/lib/CookiesProvider';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'woodada',
    template: 'woodada | %s',
  },
  description: '우리들의 다정한 다이어리',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <QueryProvider>
          <ReduxProvider>
            <ReactCookiesProvider>
              <StyledComponents>
                <Header />
                <Main>{children}</Main>
                <div id="portal" />
              </StyledComponents>
            </ReactCookiesProvider>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
