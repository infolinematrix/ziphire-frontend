import { NextRequest, NextResponse } from 'next/server';

// This middleware will run for all paths under /dashboard, /settings, and /profile
// It checks if the user is logged in by looking for a cookie named 'access_token'
// If the user is not logged in and tries to access a protected route, they will be redirected to the login page
// If the user is logged in, they can access the protected routes
// The matcher configuration specifies which paths the middleware should apply to
// You can adjust the protectedRoutes array to include any other paths you want to protect
// The middleware logs the path being accessed for debugging purposes
// Make sure to set the 'access_token' cookie when the user logs in successfully  

export function middleware(req: NextRequest) {

  console.log("🔥 MMiddleware executed for path:", req.nextUrl.pathname);
  const token = req.cookies.get('access_token')?.value;
  // const isLoggedIn = !!token;

  // const protectedRoutes = ['/dashboard', '/settings', '/profile', '/candidate'];

  // const isProtected = protectedRoutes.some((path) =>
  //   req.nextUrl.pathname.startsWith(path)
  // );

  // if (isProtected && !isLoggedIn) {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }
  
  
  return NextResponse.next();
}
// export const config = {
//   matcher: ['/dashboard/:path*', '/settings/:path*', '/profile/:path*', '/candidate/:path*', '/auth/sign-in/:path*'],
// };
  
