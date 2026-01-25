import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button variant="outline" asChild>
          <Link href="/tickets">Back to Tickets</Link>
        </Button>
      }
    />
  );
}
