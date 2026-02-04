import bcrypt from "bcrypt";
import postgres from "postgres";
import "dotenv/config";
import { invoices, customers, revenue, users } from "../lib/placeholder-data";

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });
/*async function drop() {
  const status = await sql`DROP  TABLE EXTENSION `;
}*/

export async function GET() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    return Response.json({ message: "Database communicated to successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
