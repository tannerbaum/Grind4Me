import { useEffect, useRef } from "react";
import { ActionState } from "../utils/action-state";

export const useActionFeedback = (
  actionState: ActionState,
  eventHandlers: {
    onSuccess?: ({ actionState }: { actionState: ActionState }) => void;
    onError?: ({ actionState }: { actionState: ActionState }) => void;
  },
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  const isUpdate = actionState.timestamp !== prevTimestamp.current;

  useEffect(() => {
    if (!isUpdate) return;

    if (actionState.status === "SUCCESS") {
      eventHandlers.onSuccess?.({ actionState });
    } else if (actionState.status === "ERROR") {
      eventHandlers.onError?.({ actionState });
    }
    prevTimestamp.current = actionState.timestamp;
  }, [actionState, eventHandlers, isUpdate]);
};
