import { getToken } from '@/utils/sesstionUtil';
import { NextApiRequest, NextApiResponse } from 'next';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // 저장된 토큰 가져오기
    const token = getToken(req, res);

    // TODO: 사용자 정보 조회
    const response = await fetch(`${API_BASE_URL}/api/v1/member/me`, {
      // headers: {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json'
      // }
    }).then((res) => res.json());
    console.log('response => ', response);
    res.status(200).end();
  } catch (error) {
    console.error('error => ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
