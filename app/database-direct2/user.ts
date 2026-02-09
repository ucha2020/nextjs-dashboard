// lib/queries/users.ts
import { Revenue } from "../lib/definitions";
import { sql } from "../lib/db";

export async function getUsers() {
  return await sql<Revenue[]>`SELECT * FROM "Post"`;
  //return sql`SELECT * FROM "User"`;
}
