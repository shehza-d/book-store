import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

type TParams = {
  params: { orderId: string };
};

export async function GET(request: NextRequest, { params }: TParams) {
  const conn = postgres({ ssl: require });
  const result = await conn.unsafe(
    `SELECT * FROM orders WHERE id = ${params.orderId};`
  );
  if (result.length === 0) {
    return NextResponse.json({ message: "Order not found" });
  }
  return new NextResponse(JSON.stringify(result));
}

export async function PATCH(request: NextRequest, { params }: TParams) {
  const req: { customerName: string } = await request.json();

  if (!req.customerName)
    return NextResponse.json({ message: "Please enter required parameters" });

  const conn = postgres({ ssl: require });
  const result = await conn.unsafe(
    `UPDATE orders SET customerName = '${req.customerName}' WHERE id = ${params.orderId};`
  );

  if (result.length === 0) {
    return NextResponse.json({ message: "Order not found" });
  }
  return new NextResponse(JSON.stringify(result));
}

export async function DELETE(request: NextRequest, { params }: TParams) {
  const conn = postgres({ ssl: require });
  const result = await conn.unsafe(
    `SELECT * FROM orders WHERE id = ${params.orderId};`
  );
  // console.log("backend result", result);
  if (result.length === 0) {
    return NextResponse.json({ message: "Book not found" });
  }
  return new NextResponse(JSON.stringify(result));
}
