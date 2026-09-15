import { NextResponse } from 'next/server';

function shouldUseSecureCookie(request: Request) {
  const forwardedProtocol = request.headers.get('x-forwarded-proto');
  return forwardedProtocol === 'https' || new URL(request.url).protocol === 'https:';
}

export async function POST(request: Request) {
  const response = NextResponse.json({ success: true }, { status: 200 });
  
  response.cookies.set({
    name: 'admin-token',
    value: '',
    httpOnly: true,
    path: '/',
    secure: shouldUseSecureCookie(request),
    sameSite: 'lax',
    expires: new Date(0), // Expire immediately
  });

  return response;
}
