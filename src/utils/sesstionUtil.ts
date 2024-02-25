import { getFirebaseData, setFirebaseData } from '@/lib/firebase';
import { NextApiRequest, NextApiResponse } from 'next';
import CryptoJS from 'crypto-js';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || '';

/**
 * 토큰 발급
 */
const issueToken = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.code) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/login/google?code=${req.body.code}`).then((res) =>
        res.json(),
      );
      if (response && response.accessToken) {
        // 토큰 데이터 암호화
        const cookieKey = CryptoJS.AES.encrypt(JSON.stringify(response.accessToken), SECRET_KEY)
          .toString()
          .replaceAll('/', ''); // 파이어베이스 경로 인식 막기
        console.log('cookieKey => ', cookieKey);

        // 쿠키에 토큰 키 저장
        res.setHeader('Set-Cookie', `TOKEN_KEY=${cookieKey}; Max-Age=3600; Path=/`);

        // 파이어베이스에 토큰 데이터 저장
        setFirebaseData(cookieKey, response.accessToken);
      } else {
        console.log(response);
        console.log(response.accessToken);
        console.error('fail issue access token');
      }
    } catch (error) {
      console.error('error => ', error);
    }
  } else {
    console.error('google login code not found');
  }
};

/**
 * firebase 에 저장되어 있는 토큰 가져오기
 */
const getStoredToken = (req: NextApiRequest) => {
  if (req.headers.cookie) {
    const cookies = req.headers.cookie.toString();
    // 쿠키에 저장된 토큰 키 가져오기
    const tokenKeyMatch = cookies.match(/TOKEN_KEY=([^;]+)/);
    if (tokenKeyMatch) {
      const tokenKey = tokenKeyMatch[1];
      // 파이어베이스에서 토큰 데이터 가져오기
      const token = getFirebaseData(tokenKey);
      if (token) {
        return token;
      } else {
        console.error('token not found in firebase');
      }
    } else {
      console.error('TOKEN_KEY not found in cookies');
    }
  } else {
    console.error('cookie not found in headers');
  }
};

/**
 * 토큰 반환
 */
const getToken = async (req: NextApiRequest, res: NextApiResponse) => {
  // code 가 있을 경우 토큰 발급 (로그인)
  if (req.body.code) {
    await issueToken(req, res);
    // 저장되어 있는 토큰 가져오기
  } else {
    getStoredToken(req);
  }
};

export { getToken, getStoredToken };
