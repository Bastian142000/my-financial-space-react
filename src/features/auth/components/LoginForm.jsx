import Button from "../../../ui/Button";
import AuthForm from "./AuthForm";
import SpinnerMini from "../../../ui/SpinnerMini";
import { useState } from "react";
import { NavLink } from "react-router";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("test@example.cl");
  const [password, setPassword] = useState("test123");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const { login, isLoading } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

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
        width={"w-45"}
        borderColor={"border-blue-300"}
        textColor={"text-blue-600"}
        hoverBgColor={"hover:bg-blue-300"}
        hoverTextColor={"hover:text-white"}
        disabled={isLoading}
      >
        {isLoading ? <SpinnerMini /> : "Login"}
      </Button>
    </AuthForm>
  );
}
