import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";

const TicketPage = async ({ params }: PageProps<"/tickets/[ticketId]">) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((t) => t.id === ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button variant="outline" asChild>
            <Link href="/tickets">Back to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
