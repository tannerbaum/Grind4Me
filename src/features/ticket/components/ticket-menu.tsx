import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ticket } from "@/generated/prisma/client";
import { MoreVertical, Trash } from "lucide-react";
import { TICKET_STATUS_LABELS } from "../constants";

type Props = {
  ticket: Ticket;
};

export const TicketMenu = ({ ticket }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreVertical className="size-4 text-slate-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" className="w-56">
        <DropdownMenuRadioGroup value={ticket.status}>
          {Object.entries(TICKET_STATUS_LABELS).map(([key, label]) => (
            <DropdownMenuRadioItem key={key} value={key}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Trash className="size-4 text-red-500" />
            <span className="text-red-500">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
