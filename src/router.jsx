import ProtectedPage from "./ui/ProtectedPage";
import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const Login = lazy(() => import("./pages/LoginPage"));
const Register = lazy(() => import("./pages/RegisterPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Categories = lazy(() => import("./pages/Categories"));
const Transactions = lazy(() => import("./pages/Transactions"));

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
