import { useEffect } from "react";
import { authClient } from "../auth-client";
import { usePathname } from "next/navigation";

// This abstraction shouldn't be necessary, but for keeping in line with the course code I will leave it.
// I like to think of it like I refactored the function in a larger project and didn't want to break the api.
// There is also a limitation with useSession outlined in the useEffect alone that may make this hook worth keeping though.
const useAuth = () => {
  const pathname = usePathname();
  const { data: session, isPending, refetch } = authClient.useSession();
  const isFetched = !isPending;

  // BA can't signal to the client that the session has been invalidated has been updated on the server
  // https://github.com/better-auth/better-auth/issues/1006#issuecomment-3727928799
  useEffect(() => {
    // Does this cover the signout case?
    if (!session && !isPending) {
      refetch();
    }
  }, [pathname]);

  return { user: session?.user, isFetched };
};

export { useAuth };
