import { db } from "@/db";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

type TUser = { userId: string; clientEmail: string };
type TParams = {
  params: { orderId: string };
};

export async function GET(request: NextRequest, { params }: TParams) {
  const user: TUser = JSON.parse(`${request.headers.get("user")}`);
  // const token = request.cookies.get("token");

  const result = await db.unsafe(
    `SELECT * FROM orders WHERE user_id = ${user.userId} and id = ${params.orderId};`
  );
  if (!result.length) {
    return NextResponse.json({ message: "Order not found" });
  }
  return new NextResponse(JSON.stringify(result));
}

export async function PATCH(request: NextRequest, { params }: TParams) {
  const req: { customerName: string } = await request.json();

  if (!req.customerName)
    return NextResponse.json({ message: "Please enter required parameters" });

  const result = await db.unsafe(
    `UPDATE orders SET customerName = '${req.customerName}' WHERE id = ${params.orderId};`
  );

  if (result.length === 0) {
    return NextResponse.json({ message: "Order not found" });
  }
  return new NextResponse(JSON.stringify(result));
}

export async function DELETE(request: NextRequest, { params }: TParams) {
  const result = await db.unsafe(
    `SELECT * FROM orders WHERE id = ${params.orderId};`
  );
  // console.log("backend result", result);
  if (result.length === 0) {
    return NextResponse.json({ message: "Book not found" });
  }
  return new NextResponse(JSON.stringify(result));
}
