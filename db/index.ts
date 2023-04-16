import postgres from "postgres";

export const db = postgres({
  host:
    process.env.PGHOST || "ep-dry-mountain-366119.ap-southeast-1.aws.neon.tech",
  database: process.env.PGDATABASE || "neondb",
  user: process.env.PGUSER || "shehza-d",
  pass: process.env.PGPASSWORD || "3xIlhWUwCsZ9",

  ssl: "allow",
});
