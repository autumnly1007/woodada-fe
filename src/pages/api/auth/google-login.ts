import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  try {
    // res.status(200).json(googleData);
  } catch (error) {
    console.error('Error fetching data from Google:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
