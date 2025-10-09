import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/auth";
import { useNavigate } from "react-router";

export default function useLogin() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/app/dashboard");
    },
    onError: (e) => {
      console.error(e);
      toast.error(e.message);
    },
  });

  return { login, isPending, error };
}
