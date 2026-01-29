"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const updateTicketSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1).max(120),
  content: z.string().min(1).max(1024),
});

export const updateTicket = async (
  _actionState: { message: string; payload?: FormData },
  formData: FormData,
) => {
  try {
    const data = updateTicketSchema.parse({
      id: formData.get("id"),
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.ticket.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        content: data.content,
      },
    });
  } catch (error) {
    return { message: "Something went wrong", payload: formData };
  }

  revalidatePath("/tickets");
  redirect("/tickets");

  return { message: "Ticket updated successfully" };
};
