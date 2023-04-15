import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { book: string } }
) {
  return NextResponse.json({
    From: `${params.book}`,
    Message: "Greetings from Pakistan",
    RequestType: "GET",
  });
}
