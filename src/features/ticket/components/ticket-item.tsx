import clsx from "clsx";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type Props = {
  ticket: Ticket;
  isDetail?: boolean;
};

export const TicketItem = ({ ticket, isDetail }: Props) => {
  const detailButton = (
    <Button variant="outline" asChild>
      <Link
        href={`/tickets/${ticket.id}`}
        className="text-blue-500 hover:underline"
      >
        <SquareArrowOutUpRight className="size-4 text-slate-500" />
      </Link>
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
      {!isDetail && <div className="flex flex-col gap-1">{detailButton}</div>}
    </div>
  );
};
