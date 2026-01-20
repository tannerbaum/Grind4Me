import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type Props = {
  ticket: Ticket;
};

export const TicketItem = ({ ticket }: Props) => {
  const detailButton = (
    <Button variant="outline" asChild>
      <Link
        href={`/tickets/${ticket.id}`}
        className="text-blue-500 hover:underline"
      >
        <SquareArrowOutUpRight className="size-4" />
      </Link>
    </Button>
  );

  return (
    <div className="w-full max-w-[420px] flex gap-1">
      <Card className="rounded">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="text-2xl">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3">{ticket.content}</p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-1">{detailButton}</div>
    </div>
  );
};
