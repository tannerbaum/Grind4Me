"use server";

import { Route } from "next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { setCookie } from "@/actions/cookies";
import { COOKIE_KEYS } from "@/lib/constants";
import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/action-state";

export const deleteTicket = async (ticketId: string, redirectPath?: Route) => {
  try {
    await prisma.ticket.delete({
      where: { id: ticketId },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  if (redirectPath) {
    revalidatePath(redirectPath);
    await setCookie(COOKIE_KEYS.TOAST, "Ticket deleted successfully");
    return redirect(redirectPath);
  }

  return toActionState("SUCCESS", "Ticket deleted succesfully");
};
