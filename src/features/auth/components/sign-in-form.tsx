"use client";

import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/action-state";
import { useActionState } from "react";
import { Form } from "@/components/form/form";
import { FieldError } from "@/components/form/field-error";
import { signIn } from "../actions/sign-in";

export const SignInForm = () => {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);

  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="username"
        placeholder="Username"
        defaultValue={actionState.payload?.get("email") as string}
      />
      <FieldError actionState={actionState} name="username" />

      <Input
        name="password"
        placeholder="Password"
        type="password"
        defaultValue={actionState.payload?.get("password") as string}
      />
      <FieldError actionState={actionState} name="password" />

      <SubmitButton label="Sign In" />
    </Form>
  );
};
