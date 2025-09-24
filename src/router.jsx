import ProtectedPage from "./ui/ProtectedPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Transactions from "./pages/Transactions";
import { createBrowserRouter } from "react-router";

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
