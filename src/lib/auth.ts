import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { nextCookies } from "better-auth/next-js";

// Better Auth has specific places it wants this file to live. The rest of auth code will be in the features/auth directory.
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  // "will automatically set cookies for you whenever a Set-Cookie header is present in the response."
  plugins: [nextCookies()],
});
