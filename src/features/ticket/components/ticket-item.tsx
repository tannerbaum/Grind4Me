"use client";

import clsx from "clsx";
import { SquareArrowOutUpRight, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "@/generated/prisma/client";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

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
      >
        <SquareArrowOutUpRight className="size-4 text-slate-500" />
      </Link>
    </Button>
  );

  const handleDeleteTicket = async () => {
    await deleteTicket(ticket.id);
  };

  const deleteButton = (
    <Button variant="outline" size="icon" onClick={handleDeleteTicket}>
      <Trash className="size-4 text-red-500" />
    </Button>
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
      </Card>
      <div className="flex flex-col gap-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};
