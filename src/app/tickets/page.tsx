import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Heading from "@/components/heading";
import { Placeholder } from "@/components/placeholder";
import { Spinner } from "@/components/spinner";
import { StandardCard } from "@/components/standard-card";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketForm } from "@/features/ticket/components/ticket-form";
import { RedirectToast } from "@/components/redirect-toast";

const TicketsPage = () => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-8">
        <Heading title="Tickets" description="All your tickets at one place" />

        <div className="flex-1 flex flex-col self-center items-center gap-4 w-full max-w-[420px]">
          <StandardCard
            title="Create Ticket"
            description="What does your character need help with today?"
            content={<TicketForm />}
          />

          <ErrorBoundary
            fallback={<Placeholder label="Something went wrong!" />}
          >
            <Suspense fallback={<Spinner />}>
              <TicketList />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
      <RedirectToast />
    </>
  );
};

export default TicketsPage;
