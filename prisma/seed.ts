import { prisma } from "@/lib/prisma";

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the content of ticket 1 from the database",
    status: "CLOSED" as const,
  },
  {
    title: "Ticket 2",
    content: "This is the content of ticket 2 from the database",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "This is the content of ticket 3 from the database",
    status: "IN_PROGRESS" as const,
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
