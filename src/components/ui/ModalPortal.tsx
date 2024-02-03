import { IChildrenProps } from '@/interfaces/common.interface';
import { FC } from 'react';
import reactDom from 'react-dom';

/**
 * 모달 포탈 반환 컴포넌트
 * @param children: 자식 컴포넌트
 */
export const ModalPortal: FC<IChildrenProps> = ({ children }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const node = document.getElementById('portal') as Element;
  return reactDom.createPortal(children, node);
};
