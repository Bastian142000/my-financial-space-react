import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { CircularProgress } from "@mui/material";
import { useNavigation, Outlet } from "react-router";

export default function ProtectedPage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="app-container">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
