import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type TBook = {
  clientName: string;
  clientEmail: string;
};

export async function POST(request: NextRequest) {
  const req: TBook = await request.json();
  if (!req.clientName || !req.clientEmail)
    return NextResponse.json({ message: "Please enter required parameters" });

  // const cookieStore = cookies();
  // const token = cookieStore.get("token");

  // await db.unsafe(
  //   `INSERT INTO books (name, type,available) VALUES ('${req.name}', '${
  //     req.type
  //   }',${
  //     req.available == "true" || req.available == "false" ? req.available : true
  //   });`
  // );

  // return new Response("Hello, Next.js!", {
  //   status: 200,
  //   headers: { "Set-Cookie": `token=${token}` },
  // });
  // return NextResponse.json({ message: "Book added successfully" });
}
