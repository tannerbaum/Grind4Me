"use server";

import { Route } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const deleteTicket = async (ticketId: string, redirectPath: Route) => {
  await prisma.ticket.delete({
    where: { id: ticketId },
  });

  await revalidatePath(redirectPath);
  return redirect(redirectPath);
};
