import { CircleCheck, File, Pencil } from "lucide-react";
import Link from "next/link";
import Heading from "@/components/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";

const TICKET_ICONS = {
  OPEN: <File />,
  IN_PROGRESS: <Pencil />,
  DONE: <CircleCheck />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Heading title="Tickets" description="All your tickets at one place" />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px] rounded">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="text-2xl">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{ticket.content}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/tickets/${ticket.id}`}
                className="text-blue-500 hover:underline"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
