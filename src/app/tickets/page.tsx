import Link from "next/link";
import { initialTickets } from "@/data";

const TICKET_ICONS = {
  OPEN: "🟢",
  DONE: "✅",
};

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h3 className="text-xl font-bold">{ticket.title}</h3>
          <p>{ticket.content}</p>
          <p>
            Status: {TICKET_ICONS[ticket.status]} {ticket.status}
          </p>
          <Link
            href={`/tickets/${ticket.id}`}
            className="text-blue-500 hover:underline"
          >
            View Ticket
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
