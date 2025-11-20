import { useState } from "react";
import { NavLink } from "react-router";
import Button from "../../../ui/Button/Button";
import AuthForm from "./AuthForm";
import useRegister from "../hooks/useRegister";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const { register, isPending } = useRegister();

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
      <div className="flex py-4 text-blue-400">
        <NavLink to="/">Already have an account?</NavLink>
      </div>

      <Button
        label={"Register"}
        variant="primary"
        size="md"
        fullWidth={true}
        isLoading={isPending}
        disabled={isPending}
      ></Button>
    </AuthForm>
  );
}

export default RegisterForm;
