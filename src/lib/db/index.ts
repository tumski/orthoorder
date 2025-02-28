import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Initialize Drizzle with the pool
export const db = drizzle(pool);
