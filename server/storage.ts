import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { feedbackTable, type InsertFeedback, type SelectFeedback } from "@shared/schema";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

export interface IStorage {
  saveFeedback(feedback: InsertFeedback): Promise<SelectFeedback>;
}

export class DatabaseStorage implements IStorage {
  async saveFeedback(feedback: InsertFeedback): Promise<SelectFeedback> {
    const [result] = await db.insert(feedbackTable).values(feedback).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
