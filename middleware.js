import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Allow the following paths to be accessed without authentication
  const publicPaths = ["/login", "/register", "/", "/api/auth"];

  if (publicPaths.includes(pathname)) {
    return NextResponse.next(); // Allow access to public paths
  }

  // Check if the user is authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Check user role for admin dashboard
  if (pathname.startsWith("/admindashboard") && token.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Allow access to user dashboard
  if (pathname.startsWith("/dashboard") && token.role !== "USER") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next(); // Continue to the requested page
}

// Specify which paths should use this middleware
export const config = {
  matcher: [
    "/dashboard/:path*",       // Protect user dashboard and its subpaths
    "/admindashboard/:path*", // Protect admin dashboard and its subpaths
  ],
};
