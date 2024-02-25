import { IResponse } from '@/interfaces/common.interface';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useRef, useState } from 'react';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

/**
 * axios 커스텀 훅
 * @param config: axios 요청 데이터
 * @author 안가을
 */
export const useAxios = () => {
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(new AbortController());
  const cancel = () => controllerRef.current.abort();

  const fetch = async (params: AxiosRequestConfig) => {
    try {
      setLoading(true);
      const result: AxiosResponse<IResponse> = await axios.request({
        ...params,
        baseURL: API_BASE_URL,
        signal: controllerRef.current.signal,
      });
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { cancel, fetch, loading };
};
