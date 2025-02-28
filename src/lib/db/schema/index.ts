import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// This is just a minimal example schema
// You can replace or expand this with your actual schema later
export const exampleTable = pgTable("example", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
