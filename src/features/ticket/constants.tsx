import { TicketStatus } from "@/generated/prisma/client";
import { CircleCheck, File, Pencil } from "lucide-react";
import { JSX } from "react";

export const TICKET_ICONS: Record<TicketStatus, JSX.Element> = {
  OPEN: <File />,
  IN_PROGRESS: <Pencil />,
  CLOSED: <CircleCheck />,
};

export const TICKET_STATUS_LABELS: Record<TicketStatus, string> = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  CLOSED: "Closed",
};
