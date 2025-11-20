import { useState } from "react";
import { NavLink } from "react-router";
import Button from "../../../ui/Button/Button";
import AuthForm from "./AuthForm";
import useLogin from "../hooks/useLogin";
import toast from "react-hot-toast";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const { login, isPending } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return toast.error("Credentials needed!");

    login({ email, password });
  }

  return (
    <AuthForm
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    >
      <div className="flex py-4 text-blue-400">
        <NavLink to="/register">Haven't registered yet?</NavLink>
      </div>

      <Button
        label={"Login"}
        variant="primary"
        size="md"
        fullWidth={true}
        isLoading={isPending}
        disabled={isPending}
      ></Button>
    </AuthForm>
  );
}

export default LoginForm;
