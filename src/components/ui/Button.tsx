'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';
import googleLogo from '@/public/static/images/google.png';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { IButtonProps } from '@/interfaces/components/\bbutton.interface';
import { theme } from '@/styles/theme';

/**
 * 공통 버튼 컴포넌트
 * @param text: 텍스트
 * @param onClick: 클릭 이벤트 함수
 * @param disabled: 활성화 여부
 * @param theme: 테마
 * @author 안가을
 */
export const Button: FC<IButtonProps> = ({
  text,
  onClick,
  disabled = false,
  theme = ButtonTheme.WHITE,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} theme={theme}>
      {theme === ButtonTheme.GOOGLE && (
        <Image src={googleLogo} width={23} height={23} alt={'google login'} />
      )}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ theme: string }>`
  width: 350px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  ${(props) => {
    switch (props.theme) {
      case ButtonTheme.WHITE:
        return `
          border-color: ${theme.colors.orange};
          background-color: ${theme.colors.white}; 
          color: ${theme.colors.orange};
          &:hover {
            border-color: ${theme.colors.orange};
            background-color: ${theme.colors.orange}; 
            color: ${theme.colors.white};
          }
        `;
      case ButtonTheme.ORANGE:
        return `
          border-color: ${theme.colors.darkOrange};
          background-color: ${theme.colors.darkOrange}; 
          color: ${theme.colors.white};
          &:hover {
            border-color: ${theme.colors.orange};
            background-color: ${theme.colors.white}; 
            color: ${theme.colors.orange};
          }
          `;
      case ButtonTheme.TEXT:
        return `
          border: none;
          background-color: transparent; 
          color: ${theme.colors.gray};
          width: fit-content;
          height: fit-content;
          font-weight: 400;
        `;
      case ButtonTheme.GOOGLE:
        return `
          border-color: ${theme.colors.lightGray};
          border-width: 1px;
          background-color: ${theme.colors.white}; 
          color: ${theme.colors.text};
          &:hover {
            border-width: 2px;
            border-color: ${theme.colors.orange};
          }
        `;
    }
  }}
`;
