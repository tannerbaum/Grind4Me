import { twMerge } from "tailwind-merge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  title: string;
  description: string;
  className?: string;
  footer?: React.ReactNode;
  content?: React.ReactNode;
};

export const StandardCard = ({
  title,
  description,
  className,
  footer,
  content,
}: Props) => {
  return (
    <Card className={twMerge("w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {content && <CardContent>{content}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
