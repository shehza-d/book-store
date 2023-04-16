import postgres from "postgres";

export const db = postgres({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  pass: process.env.PGPASSWORD,

  ssl: "allow",
});
