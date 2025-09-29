import { getCurrentUser } from "../../../services/auth";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isPending, user, isAuthenticated: user?.role === "authenticated" };
}
