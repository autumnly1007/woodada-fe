import styled from 'styled-components';

/**
 * 여백 컴포넌트
 */
const Space = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

export default Space;
