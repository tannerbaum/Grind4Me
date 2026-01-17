import { Kanban } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 flex justify-between py-2.5 px-5 border-b bg-white">
      <div>
        <Button variant="ghost" className="gap-1" asChild>
          <Link href="/" className="flex-row">
            <Kanban className="self-end" />
            <h1>TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div>
        {/* Interesting convienence provided by ShadCN to using asChild above */}
        <Link
          href="/tickets"
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export default Header;
