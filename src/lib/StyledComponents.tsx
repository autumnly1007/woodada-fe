'use client';
import React, { FC, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyle';
import { IChildrenProps } from '@/interfaces/common.interface';
import { theme } from '@/styles/theme';

/**
 * 스타일드 컴포넌트
 * @param children: 자식 컴포넌트
 */
const StyledComponents: FC<IChildrenProps> = ({ children }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default StyledComponents;
