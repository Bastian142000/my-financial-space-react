import LoginForm from "../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col lg:h-150 lg:w-200 lg:flex-row lg:rounded-4xl lg:border lg:border-gray-200 lg:shadow-xl">
        <div className="mx-auto flex flex-6/12 items-center md:w-40 lg:justify-center">
          <img
            src="/logo.png"
            alt="Business logo"
            className="h-40 w-40 lg:h-100 lg:w-100"
          />
        </div>
        <div className="flex flex-6/12 flex-col items-center justify-center text-center lg:border-l lg:border-l-gray-100">
          <h1 className="text-2xl">Log in</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
