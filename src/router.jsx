import ProtectedPage from "./ui/ProtectedPage";
import { createBrowserRouter } from "react-router";
import { Login, Register } from "./features/auth";
import { Dashboard } from "./features/dashboard";
import { Categories } from "./features/categories";
import { Transactions } from "./features/transactions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <ProtectedPage />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "transactions",
        element: <Transactions />,
      },
      { path: "categories", element: <Categories /> },
    ],
  },
]);
