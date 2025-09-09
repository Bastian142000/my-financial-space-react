import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function ProtectedPage() {
  return (
    <div>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
