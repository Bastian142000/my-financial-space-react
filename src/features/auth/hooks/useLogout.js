import toast from "react-hot-toast";
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
    onError: (e) => {
      console.error(e.message);
      toast.error(e.message);
    },
  });

  return { logout, isPending };
}
