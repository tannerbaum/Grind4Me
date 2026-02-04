import { Prisma, Ticket } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

// Type helper I found from Prisma: https://www.prisma.io/docs/orm/prisma-client/type-safety#type-utilities
type TicketCreateBody = Prisma.Args<typeof prisma.ticket, "create">["data"];

const tickets: Array<TicketCreateBody> = [
  {
    title: "Ticket 1",
    content: "This is the content of ticket 1 from the database",
    status: "CLOSED" as const,
    deadline: new Date().toISOString().split("T")[0],
    reward: 499,
  },
  {
    title: "Ticket 2",
    content: "This is the content of ticket 2 from the database",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0],
    reward: 499,
  },
  {
    title: "Ticket 3",
    content: "This is the content of ticket 3 from the database",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0],
    reward: 499,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
