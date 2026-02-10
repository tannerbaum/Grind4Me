import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

// useFormStatus needs to be used in a child of a form
export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending && <LoaderCircle className="size-4 mr-2 animate-spin" />}
      {label}
    </Button>
  );
};
