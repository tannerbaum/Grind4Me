import { MessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type Props = {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactElement<{ className?: string }>;
};

export const Placeholder = ({
  label,
  icon = <MessageSquareWarning />,
  button = <div className="h-10" />,
}: Props) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-2">
      {cloneElement(icon, {
        className: "size-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};
