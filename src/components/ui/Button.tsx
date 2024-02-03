import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  theme?: string;
}

export default function Button({ text, onClick, disabled = false, theme = '' }: IButtonProps) {
  return (
    <StyledButton onClick={() => onClick()} disabled={disabled} theme={theme}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ theme: string }>`
  width: 350px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  ${(props) => {
    switch (props.theme) {
      case 'white':
        return `
          border-color: #FF9048;
          background-color: #ffffff; 
          color: #FF9048;
          &:hover {
            border-color: #FF9048;
            background-color: #FF9048; 
            color: #ffffff;
          }
        `;
      case 'orange':
        return `
          border-color: #FF9048;
          background-color: #FF9048; 
          color: #ffffff;
          &:hover {
            border-color: #FF9048;
            background-color: #ffffff; 
            color: #FF9048;
          }
          `;
      case 'google':
        return `
          border-color: #FFFFFF;
          background-color: #00ff00; 
          color: #3C3C3C;
        `;
      case 'text':
        return `
          border: none;
          background-color: transparent; 
          color: #A99F9F;
          width: fit-content;
          height: fit-content;
        `;
      default:
        return `
          background-color: #cccccc; 
          color: #000000;
        `;
    }
  }}
`;
