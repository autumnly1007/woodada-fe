import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { useAxios } from './useAxios';

/**
 * useQuery 커스텀 hook
 * @param key: 쿼리 키
 * @param axiosOptions: axios 옵션 데이터
 * @author 안가을
 */
const useCustomQuery = (key: string, axiosOptions: AxiosRequestConfig) => {
  const { fetch } = useAxios();
  const queryOptions = {
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(axiosOptions);
      return response;
    },
  };
  return useQuery(queryOptions);
};

export default useCustomQuery;
