import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import useUser from "../features/auth/hooks/useUser";
import useLogout from "../features/auth/hooks/useLogout";
import LoaderSpinner from "./LoaderSpinner/LoaderSpinner";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const { user } = useUser();

  const { isPending, logout } = useLogout();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-20 w-full items-center justify-end border-none px-6">
      <div className="relative" ref={dropdownRef}>
        {/* Logo button */}
        <button
          className="bg-opacity-90 hover:bg-opacity-100 flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow transition duration-300 ease-in-out hover:text-blue-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="User menu"
        >
          {user.email}
          <AccountCircleIcon fontSize="large" className="" />
          <span className="font-medium"></span>
          <KeyboardArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute right-0 z-50 mt-3 w-40 rounded-lg border border-gray-300 bg-white shadow-lg">
            <ul className="flex flex-col">
              <li>
                <button
                  className="w-full cursor-pointer rounded-lg px-4 py-3 text-center font-semibold uppercase transition hover:bg-blue-100"
                  onClick={logout}
                  disabled={isPending}
                >
                  {isPending ? <LoaderSpinner size="sm" /> : "Logout"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
