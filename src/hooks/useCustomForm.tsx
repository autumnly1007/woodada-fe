import { useForm, SubmitHandler } from 'react-hook-form';
import { z, ZodError } from 'zod';

interface UseCustomFormOptions<T> {
  validationSchema: z.ZodObject<any, any, any>;
  onSubmitSuccess?: () => void;
  onSubmitError?: (errors: Record<string, string>) => void;
}

/**
 * 폼 커스텀 hook
 * @param validationSchema: zod 유효성 검사 스키마
 * @param onSubmitSuccess: 유효성 검증 성공 시 실행 함수
 * @param onSubmitError: 유효성 검증 실패 시 실행 함수
 * @author 안가을
 */
const useCustomForm = <T extends Record<string, any>>({
  validationSchema,
  onSubmitSuccess,
  onSubmitError,
}: UseCustomFormOptions<T>) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<T>();

  /**
   * Zod 유효성 검사 함수
   * @param data: 폼 데이터
   */
  const zodValidation = async (data: any) => {
    try {
      // Zod 스키마를 사용하여 데이터 유효성 검사
      await validationSchema.parseAsync(data);
      return null; // 유효성 검사를 통과한 경우 null 반환
    } catch (error) {
      // ZodError가 발생한 경우 오류 메시지 반환
      if (error instanceof ZodError) {
        return error.errors.reduce(
          (acc, validationError) => ({
            ...acc,
            [validationError.path[0]]: validationError.message,
          }),
          {},
        );
      }
      // 다른 예외 경우, 에러 객체 전체를 반환
      return error;
    }
  };

  /**
   * 폼 제출 시 실행 함수
   */
  const onSubmit: SubmitHandler<T> = async (data) => {
    const validationErrors: any = await zodValidation(data);
    if (validationErrors) {
      // 유효성 검사 오류가 있는 경우 각 필드에 오류 설정
      Object.keys(validationErrors).forEach((fieldName: any) => {
        setError(fieldName, {
          type: 'manual',
          message: validationErrors[fieldName],
        });
      });
      // 에러 처리 콜백이 제공된 경우 실행
      onSubmitError?.(validationErrors);
    } else {
      // 유효성 검사를 통과한 경우 서버로 데이터를 전송하거나 필요한 작업 수행
      console.log('Form data is valid:', data);
      // 성공 처리 콜백이 제공된 경우 실행
      onSubmitSuccess?.();
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useCustomForm;
