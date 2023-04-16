import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

type TUser = { userId: string; clientEmail: string };
type TBook = {
  bookId: string;
  customerName: string;
  quantity?: number;
  total_price?: number;
};

export async function GET(request: NextRequest) {
  const user: TUser = JSON.parse(`${request.headers.get("user")}`);

  const result = await db.unsafe(
    `SELECT * FROM orders WHERE user_id = ${user.userId}`
  );
  if (!result.length) {
    return NextResponse.json({ message: "Orders not found" });
  }
  return new NextResponse(JSON.stringify(result));
}

export async function POST(request: NextRequest) {
  try {
    const req: TBook = await request.json();
    const user: TUser = JSON.parse(`${request.headers.get("user")}`);

    if (!req.bookId || !req.customerName)
      return NextResponse.json({ message: "Please enter required parameters" });

    await db.unsafe(
      `INSERT INTO orders (user_id, book_id, customerName, quantity) VALUES (${
        user.userId
      }, ${req.bookId}, '${req.customerName}' ,${
        req.quantity ? req.quantity : 1
      } );`
    );

    return NextResponse.json({ message: "Order placed successfully" });
  } catch (err: any) {
    console.log("err in mid= ", err);
    return NextResponse.json({
      message: "Book not available",
      detail: `${err.message}`,
    });
  }
}
