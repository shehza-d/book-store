import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: NextRequest) {
  const result = await db.unsafe("SELECT * FROM orders");
  return new NextResponse(JSON.stringify(result));
}

type TBook = {
  bookId: string;
  customerName: string;
};

export async function POST(request: NextRequest) {
  console.log(uuidv4());

  return uuidv4();
  // const req: TBook = await request.json();

  // if (!req.bookId || !req.customerName)
  //   return NextResponse.json({ message: "Please enter required parameters" });

  // await db.unsafe(
  //   `INSERT INTO orders (bookId, customerName) VALUES ('${req.bookId}', '${req.customerName}');`
  // );

  // return NextResponse.json({ message: "Order placed successfully" });
}

// {
//   "test":"dtekfjfjiofjdf",
// "type":"something",
// "available":"fgfgfg"
// }

// export async function PATCH(request: NextRequest) {
//   const result = await db.unsafe(
//     "UPDATE books SET type = 'programming' WHERE id = 3;"
//   );
// }
