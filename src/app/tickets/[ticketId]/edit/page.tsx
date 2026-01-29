import { StandardCard } from "@/components/standard-card";
import { TicketForm } from "@/features/ticket/components/ticket-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    return notFound();
  }

  return (
    <div className="flex flex-1 items-center self-center animate-fade-from-top w-full max-w-[420px]">
      <StandardCard
        title="Edit Ticket"
        description="Update an existing ticket"
        content={<TicketForm ticket={ticket} />}
      />
    </div>
  );
};

export default TicketEditPage;
