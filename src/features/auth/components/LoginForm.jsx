import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { login } from "../../../services/auth";
import { useDispatch } from "react-redux";
import { setLogin } from "./AuthSlice";
import Button from "../../../ui/Button";
import AuthForm from "./AuthForm";

export default function LoginForm() {
  const [email, setEmail] = useState("test@example.cl");
  const [password, setPassword] = useState("test123");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { status, data, error } = await login(email, password);

      if (error) {
        setError(error);
        return;
      }

      if (status === 200) {
        dispatch(setLogin(data.user_id, data.accessToken, data.username));
        navigate("/app/dashboard");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthForm
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    >
      {error && (
        <p className="mt-5 rounded-xl border border-red-500 bg-purple-100 p-2 text-sm text-red-500">
          {error}
        </p>
      )}

      <div className="flex py-4 text-purple-400">
        <NavLink to="/register">Haven't registered yet?</NavLink>
      </div>

      <Button
        width={"w-45"}
        borderColor={"border-purple-300"}
        textColor={"text-purple-600"}
        hoverBgColor={"hover:bg-purple-300"}
        hoverTextColor={"hover:text-white"}
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </AuthForm>
  );
}
