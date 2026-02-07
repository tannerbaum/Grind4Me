"use server";

import {
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/action-state";
import { TicketStatus } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
  try {
    await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath("/tickets");
  return toActionState("SUCCESS", "Ticket status updated");
};
