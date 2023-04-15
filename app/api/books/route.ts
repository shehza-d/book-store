import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
  const conn = postgres({ ssl: require });
  const result = await conn.unsafe("SELECT * FROM books");
  console.log("backend result", result);
  return new NextResponse(JSON.stringify(result));
}

export async function POST(request: NextRequest) {
  const conn = postgres({ ssl: require });
  const result = await conn.unsafe(
    "CREATE TABLE Books(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,typee TEXT,available TEXT)"
  );
  console.log("backend result", result);

  // const req = await request.json();
  // if (req.name) {
  //   return NextResponse.json({
  //     To: "Zia",
  //     Message: `All well here ${req.name}`,
  //     RequestType: "POST",
  //   });
  // } else {
  //   return new NextResponse("Please include your name in the POST request");
  // }
}

export async function PUT(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Zia",
      Message: "This is a updated greeting",
      RequestType: "PUT",
    });
  } else {
    return new NextResponse("Please include your name in the PUT request");
  }
}

export async function DELETE(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Zia",
      Message: "I have deleted the greetings",
      RequestType: "DELETE",
    });
  } else {
    return new NextResponse("Please include your name in the DELETE request");
  }
}
