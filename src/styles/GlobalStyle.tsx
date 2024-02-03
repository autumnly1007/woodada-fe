import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  html,
  body {
    max-width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
