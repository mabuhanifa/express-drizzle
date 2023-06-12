import * as dotenv from "dotenv";
import pg from "pg";
dotenv.config();

const pool = new pg.Pool({
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

export default pool;
