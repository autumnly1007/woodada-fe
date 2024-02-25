/**
 * access token 발급
 * @param code: 구글 로그인 반환 코드
 */
const getAccessToken = (code: string) => ({
  url: `/api/v1/login/google?code=${code}`,
  post: 'GET',
});

export const authService = { getAccessToken };
