"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import z from "zod";

const createTicketSchema = z.object({
  title: z.string().min(1).max(120),
  content: z.string().min(1).max(1024),
});

export const createTicket = async (
  _actionState: { message: string; payload?: FormData },
  formData: FormData,
) => {
  try {
    const data = createTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.ticket.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });
  } catch (error) {
    return { message: "Something went wrong", payload: formData };
  }

  revalidatePath("/tickets");
  return { message: "Ticket created successfully" };
};
