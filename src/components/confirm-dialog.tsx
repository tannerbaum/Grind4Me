import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { useActionState, useState } from "react";
import { SubmitButton } from "./form/submit-button";
import { Form } from "./form/form";
import { ActionState, EMPTY_ACTION_STATE } from "./form/utils/action-state";

type Props = {
  action: () => Promise<ActionState>;
  title?: string;
  description?: string;
};

export const useConfirmDialog = ({ action, title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);

  const dialog = (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {title ?? "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {description ??
              "This action cannot be undone. This will permanently delete your account from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              action={formAction}
              actionState={actionState}
              onSuccess={() => setIsOpen(false)}
            >
              <SubmitButton label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return {
    dialog,
    triggerProps: {
      onClick: () => setIsOpen((state) => !state),
    },
  };
};
