import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../../services/auth";
import { useNavigate } from "react-router";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/");
      queryClient.removeQueries();
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  return { logout, isPending };
}
