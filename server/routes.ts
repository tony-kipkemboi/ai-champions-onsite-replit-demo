import type { Express } from "express";
import { createServer, type Server } from "http";
import { feedbackSchema } from "@shared/schema";
import fs from "fs";
import path from "path";

const CSV_FILE = "feedback.csv";

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function ensureCSVExists() {
  if (!fs.existsSync(CSV_FILE)) {
    fs.writeFileSync(CSV_FILE, "timestamp,name,department,message\n");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/feedback", (req, res) => {
    try {
      const result = feedbackSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "Invalid feedback data", 
          details: result.error.flatten() 
        });
      }

      const { name, department, message } = result.data;
      const timestamp = new Date().toISOString();
      
      ensureCSVExists();
      
      const csvLine = [
        escapeCSV(timestamp),
        escapeCSV(name),
        escapeCSV(department),
        escapeCSV(message)
      ].join(",") + "\n";
      
      fs.appendFileSync(CSV_FILE, csvLine);
      
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error saving feedback:", error);
      return res.status(500).json({ error: "Failed to save feedback" });
    }
  });

  return httpServer;
}
