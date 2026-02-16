"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuth } from "../get-auth";
// import { lucia } from "@/lib/lucia";

export const signOut = async () => {
  const { session } = await getAuth();

  if (!session) {
    redirect("/sign-in");
  }

  //   await lucia.invalidateSession(session.id);

  //   const sessionCookie = lucia.createBlankSessionCookie();

  //   (await cookies()).set(
  //     sessionCookie.name,
  //     sessionCookie.value,
  //     sessionCookie.attributes
  //   );

  redirect("/sign-in");
};
