import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJwtToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes (except login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const verifiedToken = await verifyJwtToken(token);

    if (!verifiedToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  // If user is already logged in, redirect away from login page
  if (pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin-token')?.value;
    if (token) {
      const verifiedToken = await verifyJwtToken(token);
      if (verifiedToken) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
