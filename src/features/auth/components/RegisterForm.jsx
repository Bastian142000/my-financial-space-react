import { useState } from "react";
import { NavLink } from "react-router";
import Button from "../../../ui/Button";
import AuthForm from "./AuthForm";
import useRegister from "../hooks/useRegister";
import SpinnerMini from "../../../ui/SpinnerMini";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const { register, isPending, error } = useRegister();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    register({ email, password });
  }

  return (
    <AuthForm
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    >
      {error && <span className="text-red-500">{error.message}</span>}

      <div className="flex py-4 text-blue-400">
        <NavLink to="/">Already have an account?</NavLink>
      </div>

      <Button
        type={"submit"}
        width={"w-45"}
        borderColor={"border-blue-300"}
        textColor={"text-blue-600"}
        hoverBgColor={"hover:bg-blue-300"}
        hoverTextColor={"hover:text-white"}
        disabled={isPending}
      >
        {isPending ? <SpinnerMini /> : "Register"}
      </Button>
    </AuthForm>
  );
}
