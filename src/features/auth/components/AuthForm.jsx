export default function AuthForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  children,
}) {
  return (
    <form onSubmit={onSubmit} className="pt-12">
      <div className="flex flex-col items-center gap-5">
        <input
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-blue-100"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
          required
        ></input>

        <input
          className="w-70 rounded-2xl border border-gray-200 p-3 outline-none focus:ring-4 focus:ring-blue-100"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          required
        ></input>
      </div>
      {children}
    </form>
  );
}
