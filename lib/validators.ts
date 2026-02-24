import { z } from "zod";

export const submissionSchema = z.object({
  full_name: z.string().min(2).max(80),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal("")),
  ticket_type: z.enum(["1-Day Pass", "3-Day Pass", "VIP"]),
  qty: z.coerce.number().int().min(1).max(10),
  notes: z.string().max(500).optional().or(z.literal("")),
});

export type SubmissionInput = z.infer<typeof submissionSchema>;
