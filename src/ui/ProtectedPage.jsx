import { useNavigation, Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import useUser from "../features/auth/hooks/useUser";
import LoaderSpinner from "./LoaderSpinner/LoaderSpinner";

export default function ProtectedPage() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const routeLoading = navigation.state === "loading";
  const { isPending, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/");
  }, [isAuthenticated, isPending, navigate]);

  if (isPending)
    return (
      <div className="absolute top-6/12 right-6/12">
        <LoaderSpinner color="primary" size="lg"/>
      </div>
    );

  if (isAuthenticated)
    return (
      <div className="app-container">
        {routeLoading && (
          <div className="absolute top-6/12 right-6/12">
            <LoaderSpinner color="secondary" />
          </div>
        )}

        <div className="navbar">
          <Navbar />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>

        <main className="main mt-20 max-h-250">
          <Outlet />
        </main>
      </div>
    );
}
