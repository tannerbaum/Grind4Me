"use client";

import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cloneElement } from "react";

type Props = {
  label?: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

// useFormStatus needs to be used in a child of a form
export const SubmitButton = ({
  label,
  icon,
  variant = "default",
  size = "default",
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="gap-x-2">
      {pending && <LoaderCircle className="size-4 animate-spin" />}
      {label}
      {!pending && icon ? (
        <span>
          {cloneElement(icon, {
            className: "size-4",
          } as any)}
        </span>
      ) : null}
    </Button>
  );
};
