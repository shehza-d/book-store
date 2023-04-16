// https://youtu.be/pmAnWOofqJE
// import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    let token: string = "";

    if (req.headers.get("authorization")) {
      token = `${req.headers.get("authorization")?.replace("Bearer ", "")}`;
    }

    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECRET || "1book_shehzad_secret1")
    );

    // console.log("url SSSS", req.nextUrl.host);
    const userAuth = await fetch(`http://${req.nextUrl.host}/api/middleware`, {
      method: "POST",
      body: JSON.stringify({
        userId: verified.payload.userId,
        clientEmail: verified.payload.clientEmail,
      }),
    });
    const userLoggedIn = await userAuth.json();
    if (!userLoggedIn.verified)
      return NextResponse.json({ message: "Not Authorized" });

    const headers = new Headers(req.headers);
    headers.set("user", JSON.stringify(verified.payload));

    return NextResponse.next({
      request: {
        headers,
      },
    });

    // if (req.url.includes("api")) {
    //   // if(req.cookies)
    //   // {token = req.cookies;}
    //   // console.log(
    //   //   "🚀 ~ file: middleware.ts:11 ~ middleware ~ cookies:",
    //   //   // Boolean(req.cookies)
    //   //   req.cookies
    //   // );

    //   console.log("this is server api ");

    //   return NextResponse.next();
    // }
    // below middleware is for client not for APIs
    // console.log("this is browser");

    // if (req.nextUrl.pathname.startsWith('/login')&&!verifiedToken){return}
    // if (!loggedIn) return NextResponse.redirect(new URL("/login", req.url));
  } catch (err) {
    console.log("err in mid= ", err);
    return NextResponse.json({ message: "Unknown error" });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/orders/:path*", "/api/orders/:path*"],
};
