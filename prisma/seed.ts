import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
  adapter,
});

const tickets = [
  {
    id: "1",
    title: "Ticket 1",
    content: "This is the content of ticket 1 from the database",
    status: "CLOSED" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "This is the content of ticket 2 from the database",
    status: "OPEN" as const,
  },
  {
    id: "3",
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
