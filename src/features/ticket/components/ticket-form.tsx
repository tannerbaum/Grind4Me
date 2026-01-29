"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateTicket } from "../actions/update-ticket";
import { Ticket } from "@/generated/prisma/client";
import { createTicket } from "../actions/create-ticket";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

type Props = {
  ticket?: Ticket;
};

// useFormStatus needs to be used in a child of a form
const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending && <LoaderCircle className="size-4 mr-2 animate-spin" />}
      {label}
    </Button>
  );
};

export const TicketForm = ({ ticket }: Props) => {
  const [actionState, action] = useActionState(
    ticket ? updateTicket : createTicket,
    { message: "" },
  );

  return (
    <form action={action} className="flex flex-col gap-2">
      {ticket && <Input type="hidden" name="id" defaultValue={ticket.id} />}

      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={ticket?.title}
        required
      />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={ticket?.content}
        required
      />

      <SubmitButton label={ticket ? "Update" : "Create"} />

      {actionState.message}
    </form>
  );
};
