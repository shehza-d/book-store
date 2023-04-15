import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const loggedIn: Boolean = false;
  if (request.url.includes("api")) {
    return NextResponse.next();
  }
  if (!loggedIn) return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/orders/:path*", "/api/orders/:path*"],
};
