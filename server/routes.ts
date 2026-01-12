import type { Express } from "express";
import { type Server } from "http";
import { feedbackSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/feedback", async (req, res) => {
    try {
      const result = feedbackSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "Invalid feedback data", 
          details: result.error.flatten() 
        });
      }

      await storage.saveFeedback(result.data);
      
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error saving feedback:", error);
      return res.status(500).json({ error: "Failed to save feedback" });
    }
  });

  return httpServer;
}
