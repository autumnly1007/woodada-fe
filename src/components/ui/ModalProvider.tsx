import { IChildrenProps } from '@/interfaces/common.interface';
import { IModalProps, IModalState } from '@/interfaces/modal.interface';
import React, { createContext, useReducer, FC } from 'react';

/**
 * 모달 액션 타입
 */
export type ModalAction =
  | { type: 'OPEN_MODAL'; payload: IModalProps } // 모달 오픈
  | { type: 'CLOSE_MODAL'; payload: { id: string; decision: boolean } }; // 모달 닫기

/**
 * 모달 상태 초기값
 */
const initialState: IModalState = { modals: [] };

/**
 * 모달 컨텍스트 / 디스패치
 */
export const ModalContext = createContext<IModalState | undefined>(undefined);
export const ModalDispatch = createContext<React.Dispatch<ModalAction> | undefined>(undefined);

/**
 * 모달 리듀서
 * @param state: 모달 상태
 * @param action: 모달 액션
 */
function modalReducer(state: IModalState, action: ModalAction): IModalState {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, modals: [...state.modals, action.payload] };
    case 'CLOSE_MODAL': {
      const { id, decision } = action.payload;
      const modalIndex = state.modals.findIndex((modal) => modal.id === id);
      if (modalIndex > -1) {
        state.modals[modalIndex].resolve(decision);
      }
      return { ...state, modals: state.modals.filter((modal) => modal.id !== id) };
    }
    default:
      return state;
  }
}

/**
 * 모달 프로바이더
 * @param children: 자식 컴포넌트
 */
export const ModalProvider: FC<IChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={state}>
      <ModalDispatch.Provider value={dispatch}>{children}</ModalDispatch.Provider>
    </ModalContext.Provider>
  );
};
