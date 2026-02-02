"use server";

import { Route } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { setCookie } from "@/actions/cookies";
import { COOKIE_KEYS } from "@/lib/constants";

export const deleteTicket = async (ticketId: string, redirectPath: Route) => {
  await prisma.ticket.delete({
    where: { id: ticketId },
  });

  revalidatePath(redirectPath);
  await setCookie(COOKIE_KEYS.TOAST, "Ticket deleted successfully");
  return redirect(redirectPath);
};
