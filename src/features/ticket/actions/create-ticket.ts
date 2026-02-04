"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/action-state";
import { setCookie } from "@/actions/cookies";
import { COOKIE_KEYS } from "@/lib/constants";
import { createTicketSchema } from "./schemas";
import { toCents } from "@/lib/currency";

// There are libraries to try to take some of the boilerplate out of server actions. Might be worht a look:
// https://next-safe-action.dev/
export const createTicket = async (
  _actionState: ActionState,
  formData: FormData,
) => {
  try {
    const data = createTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
      deadline: formData.get("deadline"),
      reward: formData.get("reward"),
    });

    await prisma.ticket.create({
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

  revalidatePath("/tickets");
  await setCookie(COOKIE_KEYS.TOAST, "Ticket created successfully");
  return toActionState("SUCCESS", "Ticket created successfully");
};
