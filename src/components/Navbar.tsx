import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLogo } from "../assets";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
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
    { label: "Gallery", path: "/gallery" },
    { label: "About Us", path: "/about" },
  ];

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="mx-6 sm:mx-12 mt-4 bg-white flex items-center justify-between px-6 sm:px-8 py-4 rounded-bl-[30px] rounded-br-[30px] shadow-md">
          <div>
            <img src={navLogo} alt="We Belong" className="h-10" />
          </div>

          <ul className="hidden lg:flex gap-20 text-lg text-black">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`transition-all duration-200 pb-1 pt-1 ${
                      isActive
                        ? "border-t-2 border-b-2 border-black"
                        : "hover:opacity-70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-black text-white px-5 py-2 rounded-bl-[10px] rounded-br-[10px] font-semibold hover:bg-gray-800 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full border border-[#0c125f] bg-white shadow-sm hover:bg-[#f0f2ff] transition"
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
          >
            {isDrawerOpen ? (
              <FiX size={24} className="text-[#0c125f]" />
            ) : (
              <FiMenu size={24} className="text-[#0c125f]" />
            )}
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeDrawer}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 flex flex-col h-full">
          <div className="flex justify-between items-center">
            <img src={navLogo} alt="We Belong" className="h-8" />
            <button
              onClick={closeDrawer}
              className="p-2 rounded-full border border-[#0c125f] bg-white shadow-sm hover:bg-[#f0f2ff] transition"
              aria-label="Close Menu"
            >
              <FiX size={24} className="text-[#0c125f]" />
            </button>
          </div>

          <ul className="flex flex-col gap-4 text-lg font-medium text-black mt-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeDrawer}
                    className={`block ${
                      isActive
                        ? "font-semibold border-b-2 border-black pb-1"
                        : "hover:opacity-70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto">
            <Link
              to="/contact"
              onClick={closeDrawer}
              className="block w-full bg-black text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
