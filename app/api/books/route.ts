import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;

  const type = url.get("type");
  const limit = url.get("limit");

  const result = await db.unsafe(
    `SELECT * FROM books ${type ? `WHERE type='${type}'` : ""} LIMIT ${
      limit ? limit : 1000
    };`
  );

  return new NextResponse(JSON.stringify(result));
}

type TBook = {
  name: string;
  type: string;
  available: string;
};
export async function POST(request: NextRequest) {
  const req: TBook = await request.json();
  if (!req.name || !req.type)
    return NextResponse.json({ message: "Please enter required parameters" });

  await db.unsafe(
    `INSERT INTO books (name, type,available) VALUES ('${req.name}', '${
      req.type
    }',${
      req.available == "true" || req.available == "false" ? req.available : true
    });`
  );

  return NextResponse.json({ message: "Book added successfully" });
}
