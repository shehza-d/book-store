import { NextRequest, NextResponse } from "next/server";

type TBook = {
  clientName: string;
  clientEmail: string;
};

export async function POST(request: NextRequest) {
  const req: TBook = await request.json();
  if (!req.clientName || !req.clientEmail)
    return NextResponse.json({ message: "Please enter required parameters" });

  // await db.unsafe(
  //   `INSERT INTO books (name, type,available) VALUES ('${req.name}', '${
  //     req.type
  //   }',${
  //     req.available == "true" || req.available == "false" ? req.available : true
  //   });`
  // );

  // return NextResponse.json({ message: "Book added successfully" });
}