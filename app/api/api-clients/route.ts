import { db } from "@/db";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

// import { cookies } from "next/headers";

type TBook = {
  clientName: string;
  clientEmail: string;
};

export async function POST(request: NextRequest) {
  try {
    const req: TBook = await request.json();
    if (!req.clientName || !req.clientEmail)
      return NextResponse.json({ message: "Please enter required parameters" });

    // const cookieStore = cookies();
    // const token = cookieStore.get("token");

    const res = await db.unsafe(
      `INSERT INTO users (name, email) VALUES ('${
        req.clientName
      }', '${req.clientEmail.toLowerCase()}') RETURNING id;`
    );
    const userId = res.map((i) => i.id).shift();

    const token = await new SignJWT({ clientEmail: req.clientEmail, userId })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .sign(
        new TextEncoder().encode(process.env.SECRET || "1book_shehzad_secret1")
      );

    return new NextResponse(
      JSON.stringify({
        message: "User created successfully!",
        accessToken: token,
      }),
      {
        status: 200,
        headers: { "Set-Cookie": `token=${token}` },
      }
    );
  } catch (err: any) {
    console.log("err==>", err);
    return NextResponse.json({ message: `${err?.message}` });
  }
}
