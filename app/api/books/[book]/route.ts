import { NextRequest, NextResponse } from "next/server";

type TParams = {
  params: { book: string };
};

export async function GET(request: NextRequest, { params }: TParams) {
  return NextResponse.json({
    From: `${params.book}`,
    Message: "Greetings from Pakistan",
    RequestType: "GET",
  });
}
