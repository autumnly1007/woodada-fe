import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // TODO: next-auth 사용 시 주석 해제
  // const token = await getToken({ req });
  // if (!token) {
  //   if (req.nextUrl.pathname.startsWith('/api')) {
  //     return new NextResponse('Authentication Error', { status: 401 });
  //   }
  // const { pathname, search, origin, basePath } = req.nextUrl;
  //   const signInUrl = new URL(`${basePath}/auth/signin`, origin);
  //   signInUrl.searchParams.append('callbackUrl', `${basePath}${pathname}${search}`);
  //   return NextResponse.redirect(signInUrl);
  // }
  // return NextResponse.next();
  // const { pathname, search, origin, basePath } = req.nextUrl;
  // const signInUrl = new URL(`${basePath}/auth/login`, origin);
  // return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ['/', '/api/me'],
};
