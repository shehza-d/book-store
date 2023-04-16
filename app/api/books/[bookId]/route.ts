import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

type TParams = {
  params: { bookId: string };
};

export async function GET(request: NextRequest, { params }: TParams) {
  const result = await db.unsafe(
    `SELECT * FROM books WHERE id = ${params.bookId};`
  );
  if (result.length === 0) {
    return NextResponse.json({ message: "Book not found" });
  }
  return new NextResponse(JSON.stringify(result));
}
