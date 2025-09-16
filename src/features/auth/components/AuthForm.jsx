export default function AuthForm({
  mode,
  email,
  username,
  password,
  onEmailChange,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  children,
}) {
  return (
    <form onSubmit={onSubmit} className="pt-12">
      <div className="flex flex-col items-center gap-5">
        <input
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-blue-100"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        ></input>

        {mode === "register" && (
          <input
            className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-blue-100"
            type="text"
            placeholder="Username"
            value={username}
            onChange={onUsernameChange}
          ></input>
        )}

        <input
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-blue-100"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        ></input>
      </div>
      {children}
    </form>
  );
}
