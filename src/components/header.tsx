"use client";

import { Kanban, LucideLogOut } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "@/features/theme/theme-switcher";
import { Button, buttonVariants } from "./ui/button";
import { signOut } from "@/features/auth/actions/sign-out";
import { SubmitButton } from "./form/submit-button";
import { getAuth } from "@/features/auth/get-auth";
import { useEffect, useState } from "react";
import { useAuth } from "@/features/auth/hooks/use-auth";

const Header = () => {
  const { user, isFetched } = useAuth();

  const navItems = user ? (
    <>
      {/* Interesting convienence provided by ShadCN to using asChild above */}
      <Link href="/tickets" className={buttonVariants({ variant: "default" })}>
        Tickets
      </Link>
      <form action={signOut}>
        <SubmitButton label="Sign Out" icon={<LucideLogOut />} />
      </form>
    </>
  ) : (
    <>
      <Link href="/sign-up" className={buttonVariants({ variant: "outline" })}>
        Sign up
      </Link>
      <Link href="/sign-in" className={buttonVariants({ variant: "outline" })}>
        Sign in
      </Link>
    </>
  );

  if (!isFetched) {
    return null;
  }

  return (
    <nav className="animate-header-from-top supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur  fixed left-0 right-0 top-0 z-20 flex justify-between py-2.5 px-5 border-b">
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
        {navItems}
      </div>
    </nav>
  );
};

export default Header;
