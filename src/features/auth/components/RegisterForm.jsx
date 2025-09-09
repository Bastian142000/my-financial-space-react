import Button from "../../../ui/Button";
import AuthForm from "./AuthForm";
import { NavLink } from "react-router";

export default function RegisterForm() {
  const username = "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!/^[a-zA-Z0-9]*$/.test(username)) {
      return;
    }
  }

  return (
    <AuthForm mode={"register"} onSubmit={handleSubmit}>
      <div className="flex py-4 text-purple-400">
        <NavLink to="/">Already have an account?</NavLink>
      </div>
      <Button
        width={"w-45"}
        borderColor={"border-purple-300"}
        textColor={"text-purple-600"}
        hoverBgColor={"hover:bg-purple-300"}
        hoverTextColor={"hover:text-white"}
      >
        Register
      </Button>
    </AuthForm>
  );
}
