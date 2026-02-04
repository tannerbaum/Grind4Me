import clsx from "clsx";
import { Pencil, SquareArrowOutUpRight, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket } from "@/generated/prisma/client";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";
import { toCurrencyFromCents } from "@/lib/currency";

type Props = {
  ticket: Ticket;
  isDetail?: boolean;
};

export const TicketItem = ({ ticket, isDetail }: Props) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link
        href={`/tickets/${ticket.id}`}
        className="text-blue-500 hover:underline"
        prefetch
      >
        <SquareArrowOutUpRight className="size-4 text-slate-500" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link
        href={`/tickets/${ticket.id}/edit`}
        className="text-blue-500 hover:underline"
        prefetch
      >
        <Pencil className="size-4 text-slate-500" />
      </Link>
    </Button>
  );

  const deleteButton = (
    // A workaround to have a button trigger a server action without making TicketItem here a client component.
    // The alternative would be a hidden input to pass the ticket ID
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <form action={deleteTicket.bind(null, ticket.id, "/tickets") as any}>
      <Button variant="outline" size="icon">
        <Trash className="size-4 text-red-500" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[420px]": !isDetail,
        "max-w-[580px]": isDetail,
      })}
    >
      <Card className="rounded w-full">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="text-2xl">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">{ticket.deadline}</p>
          <p className="text-sm text-muted-foreground">
            {toCurrencyFromCents(ticket.reward)}
          </p>
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-1">
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};
