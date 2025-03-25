import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const isAuthPage = [
    '/portfolioadmin',
    '/portfolioadmin/register',
    '/portfolioadmin/forgot-password',
    '/portfolioadmin/reset-password',
  ].includes(request.nextUrl.pathname);
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/portfolioadmin/') && !isAuthPage; // Protect everything except login & register

  // If logged in and visiting login or register page, redirect to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/portfolioadmin/dashboard', request.url));
  }

  // If not logged in and visiting any protected route (except /portfolioadmin/register), redirect to login page
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/portfolioadmin', request.url));
  }

  // Allow access to /portfolioadmin/register even if not logged in
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/portfolioadmin/:path*'],
};
