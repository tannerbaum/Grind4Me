import { initialTickets } from "@/data";

const TicketPage = async ({ params }: PageProps<"/tickets/[ticketId]">) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((t) => t.id === ticketId);

  if (!ticket) {
    return (
      <div>
        <h2>Ticket Not Found</h2>
        <p>The ticket with ID {ticketId} does not exist.</p>
      </div>
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
