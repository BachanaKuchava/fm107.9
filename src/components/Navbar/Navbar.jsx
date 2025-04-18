// Navbar.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Fm from "../../assets/fm107.png";

const MenuLinks = [
  { name: "Radio LIVE", link: "/RadioLive" },
  { name: "Shows", link: "/shows" },
  { name: "Studio", link: "/studio" },
  { name: "News/Events", link: "/news" },
];

const LanguageToggle = () => {
  const [currentLang, setCurrentLang] = useState("Eng");

  const toggleLang = () => {
    setCurrentLang((prevLang) => (prevLang === "Eng" ? "Geo" : "Eng"));
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 border border-gray-300 py-3 px-6 rounded-full focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary"
    >
      <span>{currentLang}</span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Create refs for desktop and mobile search inputs
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div data-aos="fade-down" className="container py-4">
        {/* Desktop Layout (for screens >= 1280px) */}
        <div className="hidden xl:flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src={Fm} className="w-[120px] h-[80px]" />
          </Link>
          {/* Center: Navigation Links */}
          <ul className="flex items-center gap-6">
            {MenuLinks.map((data, index) => (
              <li key={index}>
                <Link
                  className="navlink transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary"
                  to={data.link}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Right: Search and Language */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                ref={desktopSearchRef}
                type="text"
                placeholder="Search"
                className="py-2 px-4 rounded-full bg-slate-200"
              />
              <FaSearch
                onClick={() =>
                  desktopSearchRef.current && desktopSearchRef.current.focus()
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-primary cursor-pointer"
              />
            </div>
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile Layout (for screens < 1280px) */}
        <div className="flex xl:hidden items-center justify-between">
          {/* Left: Logo using Fm */}
          <Link to="/" className="flex items-center gap-4">
            <img src={Fm} className="w-[120px] h-[80px]" />
          </Link>
          {/* Right: Burger Menu Icon */}
          <div
            onClick={toggleMenu}
            className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          >
            <FaBars className="text-2xl text-primary" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="container pt-8">
          {/* Header with Logo on the Left and X Button on the Right */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4"
            >
              <img src={Fm} className="w-[120px] h-[80px]" />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-3 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <FaTimes className="text-2xl text-primary" />
            </button>
          </div>
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-6 mt-8">
            {MenuLinks.map((data, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <Link
                  className="text-2xl font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary"
                  to={data.link}
                >
                  {data.name}
                </Link>
              </li>
            ))}
            {/* Extra "About Us" link, only in mobile overlay */}
            <li onClick={() => setIsOpen(false)}>
              <Link
                className="text-2xl font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary"
                to="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
          {/* Mobile Search and Language Section */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="relative w-full max-w-xs">
              <input
                ref={mobileSearchRef}
                type="text"
                placeholder="Search"
                className="w-full py-2 px-4 rounded-full bg-slate-200"
              />
              <FaSearch
                onClick={() =>
                  mobileSearchRef.current && mobileSearchRef.current.focus()
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-primary cursor-pointer"
              />
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
