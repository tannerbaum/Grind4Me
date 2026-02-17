"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export const signOut = async () => {
  // ? Do I need to wrap this in a try catch?
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/sign-in");
};
