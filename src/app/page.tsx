import Link from "next/link";
import Heading from "@/components/heading";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Heading
        title="Welcome to TicketBounty"
        description="Your place to manage your tickets"
      />
      <div className="flex-1 flex flex-col items-center">
        <Link href="/tickets" className="text-blue-500 hover:underline">
          View Tickets
        </Link>
      </div>
    </div>
  );
}
