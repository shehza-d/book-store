import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;

  const type = url.get("type");
  const limit = url.get("limit");
  console.log(`🚀 ~ file: route.ts:7 ~ GET ~ type: ${type ? type : ""}`);

  const conn = postgres({ ssl: require });
  const result = await conn.unsafe(
    `SELECT * FROM books  LIMIT ${limit ? limit : 1000};`
  );
  // WHERE (${type ? type : ""})
  // console.log("backend result", result);
  return new NextResponse(JSON.stringify(result));
}

type TBook = {
  name: string;
  type: string;
  available: string;
};
export async function POST(request: NextRequest) {
  const req: TBook = await request.json();
  if (!req.name || !req.type)
    return NextResponse.json({ message: "Please enter required parameters" });

  const conn = postgres({ ssl: require });

  await conn.unsafe(
    `INSERT INTO books (name, type,available) VALUES ('${req.name}', '${
      req.type
    }',${
      req.available == "true" || req.available == "false" ? req.available : true
    });`
  );

  return NextResponse.json({ message: "Book added successfully" });
}

// {
//   "test":"dtekfjfjiofjdf",
// "type":"something",
// "available":"fgfgfg"
// }

// export async function PATCH(request: NextRequest) {
//   const conn = postgres({ ssl: require });
//   const result = await conn.unsafe(
//     "UPDATE books SET type = 'programming' WHERE id = 3;"
//   );
// }
