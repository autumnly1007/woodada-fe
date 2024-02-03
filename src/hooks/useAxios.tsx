import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useEffect, useRef, useState } from 'react';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
axios.defaults.baseURL = API_BASE_URL;

/**
 * axios 커스텀 훅
 * @param axiosParams: axios 요청 데이터
 * @author 안가을
 */
export const useAxios = <T, D = any>(axiosParams: AxiosRequestConfig<D>) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | unknown>();
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(new AbortController());
  const cancelRequest = () => controllerRef.current.abort();

  const fetchData = async (params: AxiosRequestConfig<D>) => {
    try {
      const result = await axios.request<T>({
        ...params,
        signal: controllerRef.current.signal,
      });
      setResponse(result.data);
    } catch (err: AxiosError | unknown) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams]);

  return { cancelRequest, response, error, loading };
};
