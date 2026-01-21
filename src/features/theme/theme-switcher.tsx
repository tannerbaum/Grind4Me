"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-300" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100 duration-300" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
