import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateTicket } from "../actions/update-ticket";
import { Ticket } from "@/generated/prisma/client";

type Props = {
  ticket: Ticket;
};

export const TicketUpdateForm = ({ ticket }: Props) => {
  return (
    <form action={updateTicket} className="flex flex-col gap-2">
      <Input type="hidden" name="id" defaultValue={ticket.id} />

      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={ticket.title}
        required
      />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={ticket.content}
        required
      />

      <Button type="submit">Update</Button>
    </form>
  );
};
