import 'styled-components';

interface Theme {
  colors: {
    orange: string;
    darkOrange: string;
    lightGray: string;
    gray: string;
    blue: string;
    white: string;
    black: string;
    text: string;
    background: string;
  };
  boxShadow: {
    header: string;
    contents: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
