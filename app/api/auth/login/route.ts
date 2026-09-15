import { NextResponse } from 'next/server';
import { signJwtToken } from '@/lib/auth';

function shouldUseSecureCookie(request: Request) {
  const forwardedProtocol = request.headers.get('x-forwarded-proto');
  return forwardedProtocol === 'https' || new URL(request.url).protocol === 'https:';
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const { username, password } = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>;

    if (typeof username !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ success: false, error: 'Username and password are required.' }, { status: 400 });
    }

    const validUsername = process.env.ADMIN_USERNAME || 'admin';
    const validPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (username.trim() === validUsername && password === validPassword) {
      const token = await signJwtToken({ username });
      
      const response = NextResponse.json({ success: true }, { status: 200 });
      response.cookies.set({
        name: 'admin-token',
        value: token,
        httpOnly: true,
        path: '/',
        // A Secure cookie is rejected by browsers on an http preview or local IP.
        // Use it whenever the actual request reached the app over HTTPS.
        secure: shouldUseSecureCookie(req),
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
      });
      
      return response;
    }

    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Admin login error:', error);
    const message = error instanceof Error && error.message.includes('JWT_SECRET')
      ? 'Admin authentication is not configured. Please set JWT_SECRET on the server.'
      : 'Unable to sign in. Please try again.';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
