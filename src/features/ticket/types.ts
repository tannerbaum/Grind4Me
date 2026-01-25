export type TicketStatus = "OPEN" | "IN_PROGRESS" | "CLOSED";

export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};
