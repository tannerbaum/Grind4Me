import { LoaderCircle } from "lucide-react";

export const Spinner = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center self-center">
      <LoaderCircle className="size-16 animate-spin " />
    </div>
  );
};
