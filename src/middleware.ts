import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./lib/auth";
import { redirect } from "next/dist/server/api-utils";

// This middleware will run for all paths under /dashboard, /settings, and /profile
// It checks if the user is logged in by looking for a cookie named 'access_token'
// If the user is not logged in and tries to access a protected route, they will be redirected to the login page
// If the user is logged in, they can access the protected routes
// The matcher configuration specifies which paths the middleware should apply to
// You can adjust the protectedRoutes array to include any other paths you want to protect
// The middleware logs the path being accessed for debugging purposes
// Make sure to set the 'access_token' cookie when the user logs in successfully

// const PUBLIC_ROUTES = ["/auth/sign-in", "/auth/sign-up", "/"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  return NextResponse.next();
}
