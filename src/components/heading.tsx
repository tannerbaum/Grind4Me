import { Separator } from "./ui/separator";

const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foregound">{description}</p>
      </div>
      <Separator />
    </>
  );
};

export default Heading;
