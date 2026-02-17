"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import {
  ActionState,
  fromErrorToActionState,
} from "@/components/form/utils/action-state";
import { auth } from "@/lib/auth";

const signInSchema = z.object({
  email: z.string().min(1, { message: "Is required" }).max(191).email(),
  password: z.string().min(6).max(191),
});

export const signIn = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { email, password } = signInSchema.parse(
      Object.fromEntries(formData),
    );

    // ? Not sure if there is any value of this anymore, perhaps for logging
    // const user = await prisma.user.findUnique({
    //   where: { email },
    // });

    // if (!user) {
    //   return toActionState("ERROR", "Incorrect email or password", formData);
    // }

    // cookies will be set automatically thanks to better auth next plugin
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  redirect("/tickets");
};
