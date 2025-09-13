import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { CircularProgress } from "@mui/material";
import { useNavigation, Outlet } from "react-router";

export default function ProtectedPage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <div className="relative flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1">
          {isLoading && (
            <div className="absolute top-6/12 right-6/12">
              <CircularProgress color="secondary" />
            </div>
          )}
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
