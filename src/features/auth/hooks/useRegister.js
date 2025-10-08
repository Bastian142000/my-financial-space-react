import { useMutation } from "@tanstack/react-query";
import { register as registerApi } from "../../../services/auth";
import { useNavigate } from "react-router";

export default function useRegister() {
  const navigate = useNavigate();

  const {
    mutate: register,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => registerApi({ email, password }),
    onSuccess: () => {
      navigate("/app/dashboard");
    },
    onError: (e) => {
      console.error(e);
    },
  });

  return { register, isPending, error };
}
