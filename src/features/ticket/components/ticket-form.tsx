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
import { FieldError } from "@/components/form/field-error";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/action-state";
import { Form } from "@/components/form/form";

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
    EMPTY_ACTION_STATE,
  );

  return (
    <Form action={action} actionState={actionState}>
      {ticket && <Input type="hidden" name="id" defaultValue={ticket.id} />}

      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={ticket?.title}
        required
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={ticket?.content}
        required
      />
      <FieldError actionState={actionState} name="content" />

      <SubmitButton label={ticket ? "Update" : "Create"} />
    </Form>
  );
};
