import React from "react";
import { Link } from "react-router-dom";
import { navLogo } from "../assets";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Navbar: React.FC = () => {
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (scrollDirection === 'down') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollDirection]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="w-full max-w-7xl mx-auto bg-white flex items-center justify-between px-8 py-4 rounded-bl-[30px] rounded-br-[30px] shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src={navLogo}
            alt="We Belong"
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg font-medium text-black">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
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
