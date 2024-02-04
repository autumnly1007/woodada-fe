'use client';
import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { IButtonProps } from '@/interfaces/components/\bbutton.interface';
import { theme } from '@/styles/theme';

/**
 * 공통 버튼 컴포넌트
 * @param type: 버튼 타입
 * @param text: 텍스트
 * @param onClick: 클릭 이벤트 함수
 * @param disabled: 활성화 여부
 * @param theme: 테마
 * @param children: 자식 컴포넌트
 * @param padding: 내부 여백
 * @author 안가을
 */
export const Button: FC<IButtonProps> = ({
  type = 'button',
  text,
  onClick,
  disabled = false,
  theme = ButtonTheme.WHITE,
  children,
  padding,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} theme={theme} padding={padding}>
      {children && children}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ theme: string; padding?: string }>`
  width: 350px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  padding: ${(props) => (props.padding ? props.padding : '1px 6px')};
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
          &:hover {
            color: ${theme.colors.black};
          }
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
