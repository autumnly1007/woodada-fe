import { NextRequest, NextResponse } from 'next/server';
import { getStoredToken, getToken } from './utils/sesstionUtil';
import { NextApiRequest, NextApiResponse } from 'next';
import { getFirebaseData } from './lib/firebase';

export async function middleware(req: NextApiRequest, res: NextApiResponse) {
  // if (!token) {
  // if (req.nextUrl.pathname.startsWith('/api')) {
  // return new NextResponse('Authentication Error', { status: 401 });
  // }
  // const { pathname, search, origin, basePath } = req.nextUrl;
  // const signInUrl = new URL(`${basePath}/login`, origin);
  // signInUrl.searchParams.append('callbackUrl', `${basePath}${pathname}${search}`);
  // return NextResponse.redirect(signInUrl);
  // }
  // return NextResponse.next();
  // await fetch(`${origin}/api/auth/login`);
  // const signInUrl = new URL(`/api/login`, origin);
  // return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ['/', '/login', '/my-diary'],
};
