"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { consumeCookie } from "@/actions/cookies";
import { COOKIE_KEYS } from "@/lib/constants";
import { usePathname } from "next/navigation";

const RedirectToast = () => {
  const pathname = usePathname();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await consumeCookie(COOKIE_KEYS.TOAST);

      if (message) {
        toast.success(message);
      }
    };

    showCookieToast();
  }, [pathname]);

  return null;
};

export { RedirectToast };
