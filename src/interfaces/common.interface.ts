import { ReactNode } from 'react';

/**
 * 자식 컴포넌트 props
 */
export interface IChildrenProps {
  children: ReactNode; // 자식 컴포넌트
}

/**
 * map 데이터
 */
export interface IAnyMap {
  [key: string]: any; // 인덱스 시그니처
}

/**
 * api 응답 데이터
 */
export interface IResponse {
  success: boolean; // 상태
  code?: string; // 응답 코드
  message?: string; // 응답 메시지
  data?: any; // 응답 데이터
  error?: IResponseError; // 에러 데이터
}

/**
 * api 응답 에러 데이터
 */
export interface IResponseError {
  code?: string; // 응답 코드
  message?: string; // 응답 메시지
  validations: IErrorValidation[]; // 유효성 에러 데이터
}

/**
 * api 유효성 에러 데이터
 */
export interface IErrorValidation {
  field: string; // 유효성 에러 필드
  message: string; // 에러 메시지
  value: IAnyMap; // 에러 값
}
