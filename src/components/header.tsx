import { Kanban } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "@/features/theme/theme-switcher";
import { Button, buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur  fixed left-0 right-0 top-0 z-20 flex justify-between py-2.5 px-5 border-b">
      <div>
        <Button variant="ghost" className="gap-1" asChild>
          <Link href="/" className="flex-row">
            <Kanban className="self-end" />
            <h1>Grind4Me</h1>
          </Link>
        </Button>
      </div>
      <div className="flex gap-2">
        <ThemeSwitcher />
        {/* Interesting convienence provided by ShadCN to using asChild above */}
        <Link
          href="/tickets"
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export default Header;
