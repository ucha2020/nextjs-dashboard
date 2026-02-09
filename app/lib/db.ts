import postgres from "postgres";

const globalForPostgres = global as unknown as {
  sql?: ReturnType<typeof postgres>;
};
export const sql_remote =
  globalForPostgres.sql ??
  postgres(process.env.DATABASE_URL!, {
    ssl: "require",
  });

export const sql =
  globalForPostgres.sql ??
  postgres(process.env.DATABASE_URL!, {
    ssl: false, // ✅ LOCAL DB → no SSL
    max: 5, // fine for local
    idle_timeout: 30,
    connect_timeout: 10,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPostgres.sql = sql;
}

/*export const sql =
  globalForPostgres.sql ??
  postgres(process.env.DATABASE_URL!, {
    ssl: "require",

    // VERY IMPORTANT for Next.js
    max: 1, // limit connections
    idle_timeout: 20,
    connect_timeout: 10,
    prepare: false, // required for some serverless DBs
  });

if (process.env.NODE_ENV !== "production") {
  globalForPostgres.sql = sql;
}
  */
