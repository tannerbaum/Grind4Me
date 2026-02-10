"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateTicket } from "../actions/update-ticket";
import { Ticket } from "@/generated/prisma/client";
import { createTicket } from "../actions/create-ticket";
import { useActionState } from "react";
import { FieldError } from "@/components/form/field-error";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/action-state";
import { Form } from "@/components/form/form";
import { fromCents } from "@/lib/currency";
import { DatePicker } from "@/components/date-picker";
import { SubmitButton } from "@/components/form/submit-button";

type Props = {
  ticket?: Ticket;
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
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
        required
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
        required
      />
      <FieldError actionState={actionState} name="content" />

      <div className="flex flex-row gap-2 mb-2">
        <div className="flex-1 flex flex-col gap-2">
          <Label htmlFor="deadline">Deadline</Label>
          <DatePicker
            // key used to reset internal state when the form submits
            key={actionState.timestamp}
            id="deadline"
            name="deadline"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
          />
          <FieldError actionState={actionState} name="deadline" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Label htmlFor="reward">Reward</Label>
          <Input
            type="number"
            step="0.01"
            id="reward"
            name="reward"
            defaultValue={
              (actionState.payload?.get("reward") as string) ??
              (ticket?.reward ? fromCents(ticket?.reward) : "")
            }
            required
          />
          <FieldError actionState={actionState} name="reward" />
        </div>
      </div>

      <SubmitButton label={ticket ? "Update" : "Create"} />
    </Form>
  );
};
