import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

type TParams = {
  params: { bookId: string };
};

export async function GET(request: NextRequest, { params }: TParams) {
  const conn = postgres({ ssl: require });
  const result = await conn.unsafe(
    `SELECT * FROM books WHERE id = ${params.bookId};`
  );
  if (result.length === 0) {
    return NextResponse.json({ message: "Book not found" });
  }
  return new NextResponse(JSON.stringify(result));
}
