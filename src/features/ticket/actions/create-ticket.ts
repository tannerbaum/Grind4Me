"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import z from "zod";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/action-state";
import { setCookie } from "@/actions/cookies";
import { COOKIE_KEYS } from "@/lib/constants";

const createTicketSchema = z.object({
  title: z.string().min(1).max(120),
  content: z.string().min(1).max(1024),
});

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
    });

    await prisma.ticket.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath("/tickets");
  await setCookie(COOKIE_KEYS.TOAST, "Ticket created successfully");
  return toActionState("SUCCESS", "Ticket created successfully");
};
