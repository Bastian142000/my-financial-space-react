import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";
import ClassIcon from "@mui/icons-material/Class";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "w-60" : "w-15"
      } relative max-h-lvh border-r-1 border-gray-200 shadow-sm transition-all duration-300 ease-in-out`}
    >
      {/* Sidebar button */}
      <div className="absolute top-5 right-5">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon className="cursor-pointer text-gray-500 transition duration-300 ease-in-out hover:text-purple-400" />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-20 pt-30 pl-4 text-sm">
        <div className="text-gray-800 transition ease-in-out hover:text-purple-400">
          <NavLink
            to={"/app/dashboard"}
            className={({ isActive }) =>
              `flex items-center ${isActive ? "rounded-l-2xl bg-gradient-to-r from-purple-100 to-purple-400 py-2" : ""}`
            }
          >
            <HomeIcon className="mr-4" />
            <span
              className={`inline-block origin-left transform transition-all duration-500 ease-in-out ${
                isOpen
                  ? "ml-0 scale-x-100 opacity-100"
                  : "ml-[-8px] scale-x-0 opacity-0"
              }`}
            >
              Home
            </span>
          </NavLink>
        </div>

        <div className="text-gray-800 transition ease-in-out hover:text-purple-400">
          <NavLink
            to={"/app/transactions"}
            className={({ isActive }) =>
              `flex items-center ${isActive ? "rounded-l-2xl bg-gradient-to-r from-purple-100 to-purple-400 py-2" : ""}`
            }
          >
            <ArchiveIcon className="mr-4" />
            <span
              className={`inline-block origin-left transform transition-all duration-500 ease-in-out ${
                isOpen
                  ? "ml-0 scale-x-100 opacity-100"
                  : "ml-[-8px] scale-x-0 opacity-0"
              }`}
            >
              Add new transactions
            </span>
          </NavLink>
        </div>

        <div className="text-gray-800 transition ease-in-out hover:text-purple-400">
          <NavLink
            to={"/app/categories"}
            className={({ isActive }) =>
              `flex items-center ${isActive ? "rounded-l-2xl bg-gradient-to-r from-purple-100 to-purple-400 py-2" : ""}`
            }
          >
            <ClassIcon className="mr-4" />
            <span
              className={`inline-block origin-left transform transition-all duration-500 ease-in-out ${
                isOpen
                  ? "ml-0 scale-x-100 opacity-100"
                  : "ml-[-8px] scale-x-0 opacity-0"
              }`}
            >
              Categories
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
