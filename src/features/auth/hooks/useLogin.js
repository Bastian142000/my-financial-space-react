import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/auth";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/app/dashboard");
    },
    onError: (e) => {
      console.error(e);
    },
  });

  return { login, isLoading };
}
