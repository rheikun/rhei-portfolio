import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const closeMenuOnOutsideClick = (e) => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-36 py-8 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white font-sans">
          Rheisan Portfolio
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden cursor-pointer text-white text-3xl focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center md:items-start justify-center space-y-4 md:space-y-0 md:space-x-16 text-lg font-semibold transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <li key={item.name} className="relative group text-center md:text-left text-md leading-loose">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block transition duration-300 ${
                  location.pathname === item.path ? "text-yellow-500" : "text-white"
                }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-yellow-500 transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
