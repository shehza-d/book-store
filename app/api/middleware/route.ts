import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

type TUser = {
  userId: string;
  clientEmail: string;
};

export async function POST(request: NextRequest) {
  const req: TUser = await request.json();

  const res = await db.unsafe(
    `SELECT * FROM users WHERE id = '${req.userId}' and email = '${req.clientEmail}' ;`
  );
  if (!res.length) return NextResponse.json({ verified: false });

  return NextResponse.json({ verified: true });
}
