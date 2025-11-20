import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CategoryIcon from "@mui/icons-material/Category";
import { NavLink } from "react-router";

const navLinks = [
  { to: "/app/dashboard", label: "Home", icon: <HomeIcon /> },
  { to: "/app/transactions", label: "Transactions", icon: <TrendingUpIcon /> },
  { to: "/app/categories", label: "Categories", icon: <CategoryIcon /> },
];

function SidebarNav() {
  return (
    <nav>
      <ul className="flex h-full w-full flex-col justify-center gap-10">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex h-10 w-10 items-center justify-center gap-3 transition-all duration-500 ease-in-out [@media(min-width:1200px)]:h-15 [@media(min-width:1200px)]:w-60 [@media(min-width:1200px)]:justify-start [@media(min-width:1200px)]:pl-3 ${
                  isActive
                    ? "rounded-md bg-blue-500 text-white"
                    : "text-gray-800 hover:text-blue-500"
                }`
              }
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="hidden text-xl font-semibold uppercase [@media(min-width:1200px)]:inline">
                {link.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SidebarNav;
