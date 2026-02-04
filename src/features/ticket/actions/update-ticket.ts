"use server";

import { setCookie } from "@/actions/cookies";
import { COOKIE_KEYS } from "@/lib/constants";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/action-state";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { updateTicketSchema } from "./schemas";
import { toCents } from "@/lib/currency";

export const updateTicket = async (
  _actionState: ActionState,
  formData: FormData,
) => {
  try {
    const data = updateTicketSchema.parse({
      id: formData.get("id"),
      title: formData.get("title"),
      content: formData.get("content"),
      deadline: formData.get("deadline"),
      reward: formData.get("reward"),
    });

    await prisma.ticket.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        content: data.content,
        deadline: data.deadline,
        reward: toCents(data.reward),
      },
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  await setCookie(COOKIE_KEYS.TOAST, "Ticket updated successfully");
  revalidatePath("/tickets");
  redirect("/tickets");

  return toActionState("SUCCESS", "Ticket updated successfully");
};
