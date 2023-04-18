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
  try {
    const req: { customerName: string } = await request.json();
    const user: TUser = JSON.parse(`${request.headers.get("user")}`);

    if (!req.customerName)
      return NextResponse.json({ message: "Please enter required parameters" });

    const result = await db.unsafe(
      `UPDATE orders SET customerName = '${req.customerName}' WHERE id = ${params.orderId};`
    );
    // INSERT INTO orders (user_id, book_id, quantity) VALUES (1, 2, 3);

    if (!result.length) {
      return NextResponse.json({ message: "Order not found" });
    }

    return NextResponse.json({ message: "Order updated successfully" });
  } catch (err: any) {
    console.log("err in order/:id patch= ", err);
    return NextResponse.json({
      message: "Book not available",
      detail: `${err.message}`,
    });
  }
}

export async function DELETE(request: NextRequest, { params }: TParams) {
  try {
    const user: TUser = JSON.parse(`${request.headers.get("user")}`);

    const result = await db.unsafe(
      `DELETE FROM orders WHERE user_id = ${user.userId} and id = ${params.orderId} RETURNING *;`
    );
    if (!result.length) {
      return NextResponse.json({ message: "Order not found" });
    }

    return NextResponse.json({ message: "Order deleted successfully" });
  } catch (err: any) {
    console.log("err in order/:id delete= ", err);
    return NextResponse.json({
      message: "Unknown Error",
      detail: `${err.message}`,
    });
  }
}
