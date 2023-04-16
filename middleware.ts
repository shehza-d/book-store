// import { cookies } from "next/headers";

import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  try {
    let token: string =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlBvc3RtYTdAZXhhbXBsZS5jb20iLCJ1c2VySWQiOjI2fQ.Drx2QB4E3s0jQ4RazVjEVVGYbCbVgxxcobptwTxOhbg";

    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECRET || "1book_shehzad_secret1")
    );

    if (req.headers.get("authorization")) {
      token = `${req.headers.get("authorization")?.replace("Bearer ", "")}`;
    }
    console.log("url", req.nextUrl.host);

    const response = await fetch(`http://${req.nextUrl.host}/api/middleware`, {
      method: "POST",
      body: JSON.stringify({
        userId: verified.payload.userId,
        clientEmail: verified.payload.clientEmail,
      }),
    });
    // let a = response.json();
    // console.log("🚀 ~ file: middleware.ts:54 ~ middleware ~ response:", a);

    const loggedIn: Boolean = false;
    if (req.url.includes("api")) {
      // if(req.cookies)
      // {token = req.cookies;}
      // console.log(
      //   "🚀 ~ file: middleware.ts:11 ~ middleware ~ cookies:",
      //   // Boolean(req.cookies)
      //   req.cookies
      // );

      console.log("this is server api ");

      return NextResponse.next();
    }
    // below middleware is for client not for APIs
    console.log("this is browser");

    // if (req.nextUrl.pathname.startsWith('/login')&&!verifiedToken){return}
    if (!loggedIn) return NextResponse.redirect(new URL("/login", req.url));
  } catch (err) {
    console.log("err in mid= ", err);
    return NextResponse.json({ message: "Unknown error" });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/orders/:path*", "/api/orders/:path*"],
};
