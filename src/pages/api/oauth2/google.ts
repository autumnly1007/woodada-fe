import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  try {
    const googleResponse = await fetch(
      'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code',
      { method: 'GET' },
    );

    const googleData = await googleResponse.json();
    console.log(googleData);
    res.status(200).json(googleData);
  } catch (error) {
    console.error('Error fetching data from Google:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
