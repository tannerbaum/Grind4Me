import { Prisma, Ticket } from "@/generated/prisma/client";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Type helper I found from Prisma: https://www.prisma.io/docs/orm/prisma-client/type-safety#type-utilities
type TicketCreateBody = Prisma.Args<typeof prisma.ticket, "create">["data"];

const tickets: Array<Omit<TicketCreateBody, "userId">> = [
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
  await prisma.user.deleteMany();
  await prisma.ticket.deleteMany();

  const adminUser = await auth.api.signUpEmail({
    body: {
      name: "Admin User",
      email: "admin@admin.com",
      password: "password1234",
    },
  });

  await auth.api.signUpEmail({
    body: {
      name: "Normal User",
      email: process.env.SEED_EMAIL || "",
      password: "password1234",
    },
  });

  await prisma.ticket.createMany({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: adminUser.user.id,
    })),
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
