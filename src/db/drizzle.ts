import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Neon PostgreSQL database");
  }
});

export const db = drizzle(pool);
