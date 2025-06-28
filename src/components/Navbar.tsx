import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLogo } from "../assets";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

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
        <nav
          className="mx-6 sm:mx-12 mt-4 flex items-center justify-between px-6 sm:px-8 py-4 shadow-md rounded-[15px] bg-white"
       
        >
         <div>
  <Link to="/">
    <img src={navLogo} alt="We Belong" className="h-10 cursor-pointer" />
  </Link>
</div>

          <ul className="hidden lg:flex gap-20 text-lg">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative"
                >
                  <Link
                    to={item.path}
                    className="relative inline-block text-[#0e1a4b] font-medium"
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 h-[2px] bg-[#0e1a4b] bottom-0 rounded-full"
                        transition={{ duration: 0.4 }}
                      />
                    )}
                    <span className="absolute left-0 bottom-0 h-[2px] bg-[#0e1a4b] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </Link>
                </motion.div>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="border-[#0B1147] border-[1px] text-[#0B1147] px-5 py-2 rounded-[8px] font-semibold transition duration-300 ease-in-out hover:bg-[#0B1147] hover:text-white"
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

          <ul className="flex flex-col gap-4 text-lg font-medium text-black mt-6 text-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.path}
                    onClick={closeDrawer}
                    className={`block ${
                      isActive
                        ? "font-semibold border-b-2 border-[#0e1a4b] pb-1 text-[#0e1a4b]"
                        : "hover:opacity-80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </ul>

          <div className="mt-auto">
            <Link
              to="/contact"
              onClick={closeDrawer}
              className="block w-full !bg-[#0B1147] text-white text-center py-3 rounded-[10px] font-semibold transition duration-300 ease-in-out hover:!bg-white hover:!text-[#0B1147] hover:shadow-xl hover:border-2 hover:border-[#0B1147]"
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