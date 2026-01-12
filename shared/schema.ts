import { z } from "zod";

export const departments = [
  "Engineering",
  "Marketing", 
  "Sales",
  "HR",
  "Operations",
  "Finance",
  "Other"
] as const;

export const feedbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  department: z.enum(departments, { required_error: "Please select a department" }),
  message: z.string().min(1, "Feedback message is required"),
});

export type Feedback = z.infer<typeof feedbackSchema>;
export type Department = typeof departments[number];
