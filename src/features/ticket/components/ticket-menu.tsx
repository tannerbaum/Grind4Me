"use client";

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
import { updateTicketStatus } from "../actions/update-ticket-status";
import { toast } from "sonner";
import { useConfirmDialog } from "@/components/confirm-dialog";
import { deleteTicket } from "../actions/delete-ticket";
import { useParams, usePathname, useSearchParams } from "next/navigation";

type Props = {
  ticket: Ticket;
};

export const TicketMenu = ({ ticket }: Props) => {
  const pathname = usePathname();

  const isOnDetailPage = pathname !== "/tickets";

  const { dialog: deleteDialog, triggerProps: deleteTriggerProps } =
    useConfirmDialog({
      //   A workaround to have a button trigger a server action without making TicketItem here a client component.
      //   The alternative would be a hidden input to pass the ticket ID
      //   eslint-disable-next-line @typescript-eslint/no-explicit-any
      action: deleteTicket.bind(
        null,
        ticket.id,
        isOnDetailPage ? "/tickets" : undefined,
      ),
    });

  const handleUpdateTicketStatus = async (status: string) => {
    const promise = updateTicketStatus(ticket.id, status as Ticket["status"]);

    toast.promise(promise, {
      loading: "Updating...",
    });

    const result = await promise;

    if (result.status === "SUCCESS") {
      toast.success(result.message);
    } else {
      toast.error(result.message || "Failed to update ticket status");
    }
  };

  return (
    <>
      {deleteDialog}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreVertical className="size-4 text-slate-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuRadioGroup
            value={ticket.status}
            onValueChange={handleUpdateTicketStatus}
          >
            {Object.entries(TICKET_STATUS_LABELS).map(([key, label]) => (
              <DropdownMenuRadioItem key={key} value={key}>
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem {...deleteTriggerProps}>
              <div className="flex gap-2 text-red-500">
                <Trash className="size-4 self-end text-red-500" />
                <div>Delete</div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
