import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLogo } from "../assets";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Navbar: React.FC = () => {
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    if (scrollDirection === "down") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollDirection]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Register", path: "/register" },
    { label: "Gallery", path: "/gallery" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <div
      className={`fixed z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        top: "18px",
        left: "55px",
        right: "55px",
      }}
    >
      <nav className="w-full bg-white flex items-center justify-between px-8 py-4 rounded-bl-[30px] rounded-br-[30px] shadow-md">
        {/* Logo */}
        <div>
          <img src={navLogo} alt="We Belong" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-12 text-lg font-medium text-black">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-black transition-all duration-200 pb-1 ${
                    isActive
                      ? "font-semibold border-t-2 border-b-2 border-black"
                      : "hover:opacity-70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact Button */}
        <div>
          <Link
            to="/contact"
            className="bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
