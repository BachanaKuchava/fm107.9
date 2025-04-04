import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const MenuLinks = [
  { name: "Radio LIVE", link: "/radio" },
  { name: "Episodes", link: "/episodes" },
  { name: "Studio", link: "/studio" },
  { name: "News/Events", link: "/news-events" },
];

const Navbar = () => {
  // Single ref for search input since the layout is unified
  const searchRef = useRef(null);

  return (
    <nav>
      <div data-aos="fade-down" className="container py-4 px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <GiAtomicSlashes className="text-6xl text-primary" />
            <div className="flex flex-col text-2xl font-bold text-gray-600 leading-5">
              <span>საქართველოს ხმა</span>
            </div>
          </Link>
          {/* Navigation Links */}
          <ul className="flex items-center gap-6">
            {MenuLinks.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.link}
                  className="text-xl font-semibold text-gray-500 px-6 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Search & Language */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search"
                className="py-2 px-4 rounded-full bg-slate-200"
              />
              <FaSearch
                onClick={() =>
                  searchRef.current && searchRef.current.focus()
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-primary cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2 border border-gray-300 py-3 px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary">
              <span>Eng</span>
              <MdArrowDropDown className="text-xl text-primary" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
