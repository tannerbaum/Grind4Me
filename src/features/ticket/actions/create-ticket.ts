"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export const createTicket = async (formData: FormData) => {
  // TODO: add validation later and remove the casting
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.create({
    data: {
      title: data.title,
      content: data.content,
      // status: "OPEN",
    },
  });

  revalidatePath("/tickets");
};
