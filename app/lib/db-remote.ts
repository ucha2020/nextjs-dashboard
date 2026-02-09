import postgres from "postgres";
import { config } from "dotenv";
config();

const globalForPostgres = global as unknown as {
  sql_remote: ReturnType<typeof postgres>;
};

export const sql_remote =
  globalForPostgres.sql_remote ??
  postgres(process.env.DATABASE_URL!, {
    ssl: "require",
  });

if (process.env.NODE_ENV !== "production") {
  globalForPostgres.sql_remote = sql_remote;
}
