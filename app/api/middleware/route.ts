// https://youtu.be/pmAnWOofqJE
// import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken";

import { db } from "@/db";
import { NextRequest } from "next/server";

type TUser = {
  userId: string;
  clientEmail: string;
};

const SECRET = process.env.SECRET || "1book_shehzad_secret1";

export async function POST(request: NextRequest) {
  const req: TUser = await request.json();

  const res = await db.unsafe(
    `SELECT * FROM users WHERE id='${req.userId}' and email='${req.clientEmail}';`
  );
  console.log(" vertifing userrrr", res);
}
