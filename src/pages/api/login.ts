import { getToken } from '@/utils/sesstionUtil';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await getToken(req, res);
    res.status(200).end();
  } catch (error) {
    console.error('error => ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
