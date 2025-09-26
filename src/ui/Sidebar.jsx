import { NavLink } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";
import ClassIcon from "@mui/icons-material/Class";

export default function Sidebar() {
  return (
    <div className="h-screen border-r border-gray-200 shadow-md transition-all duration-500 ease-in-out">
      <ul className="flex h-screen flex-col justify-center gap-10">
        {/* Logo + Subtítulo */}
        <li className="mb-6 flex flex-col items-center opacity-0 md:opacity-100">
          <img
            className="h-24 w-24 cursor-pointer rounded-full border border-gray-300 object-cover shadow-md"
            src="../logo.png"
            alt="Logo"
          />
          <span className="mt-3 text-lg font-semibold text-blue-900 italic">
            MY FINANCIAL SPACE
          </span>
        </li>

        {/* Links */}
        <li className="text-gray-800 hover:text-blue-500">
          <NavLink
            to={"/app/dashboard"}
            className={({ isActive }) =>
              `flex items-center transition-colors duration-300 ease-in-out ${isActive ? "rounded-l-2xl bg-gradient-to-r from-blue-200 to-blue-600 py-2" : ""}`
            }
          >
            <HomeIcon fontSize="large" className="mr-4 ml-4" />
            <span className="inline-block origin-left transform text-xl font-semibold uppercase opacity-0 md:opacity-100">
              Home
            </span>
          </NavLink>
        </li>

        <li className="text-gray-800 hover:text-blue-500">
          <NavLink
            to={"/app/transactions"}
            className={({ isActive }) =>
              `flex items-center transition-colors duration-300 ease-in-out ${isActive ? "rounded-l-2xl bg-gradient-to-r from-blue-200 to-blue-600 py-2" : ""}`
            }
          >
            <ArchiveIcon fontSize="large" className="mr-4 ml-4" />
            <span className="inline-block origin-left transform text-xl uppercase opacity-0 md:opacity-100">
              Transactions
            </span>
          </NavLink>
        </li>

        <li className="text-gray-800 hover:text-blue-500">
          <NavLink
            to={"/app/categories"}
            className={({ isActive }) =>
              `flex items-center transition-colors duration-300 ease-in-out ${isActive ? "rounded-l-2xl bg-gradient-to-r from-blue-200 to-blue-600 py-2" : ""}`
            }
          >
            <ClassIcon fontSize="large" className="mr-4 ml-4" />
            <span className="inline-block origin-left transform text-xl uppercase opacity-0 ease-in-out md:opacity-100">
              Categories
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
