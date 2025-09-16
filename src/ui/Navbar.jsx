import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useState, useRef, useEffect } from "react";
import { logout } from "../services/auth";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const username = useSelector((state) => state.auth.username);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { status, error } = await logout();

      if (error) return;

      if (status === 200) navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

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
    <div className="flex h-20 items-center justify-between px-6 shadow-md">
      {/* Left content */}
      <div className="flex items-center gap-4">
        <img
          className="cursor-pointer rounded-full border-2 border-blue-200 shadow-sm"
          src="/logo.png"
          width={60}
          height={60}
          alt="Business logo"
        />
        <h1 className="hidden text-2xl font-bold uppercase drop-shadow-md sm:block">
          My Financial Space
        </h1>
      </div>

      {/* Right content */}
      <div className="relative" ref={dropdownRef}>
        {/* Logo button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-opacity-90 hover:bg-opacity-100 flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 shadow transition duration-300 ease-in-out hover:text-blue-500"
          aria-label="User menu"
        >
          <AccountCircleIcon fontSize="large" className="" />
          <span className="font-medium">{username}</span>
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
                  onClick={handleLogout}
                  className="w-full cursor-pointer rounded-lg px-4 py-3 text-left font-semibold uppercase transition hover:bg-blue-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
