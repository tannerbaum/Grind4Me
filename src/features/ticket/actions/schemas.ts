import z from "zod";

export const createTicketSchema = z.object({
  title: z.string().min(1).max(120),
  content: z.string().min(1).max(1024),
  deadline: z.iso.date("Is required"),
  reward: z.coerce.number().positive(),
});

export const updateTicketSchema = createTicketSchema.extend({
  id: z.string().min(1),
});
