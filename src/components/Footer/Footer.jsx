import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiAtomicSlashes } from "react-icons/gi";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 mt-32 md:mt-64">
      <div className="container mx-auto px-4">
        {/* Three column grid for Logo, Navigation, and Social Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Logo & Tagline */}
          <div className="flex justify-center md:justify-start items-center gap-4 mb-6 md:mb-0">
            <GiAtomicSlashes className="text-4xl text-primary" />
            <div>
              <h2 className="text-2xl font-bold">VOG</h2>
              <p className="text-gray-400">Bringing joy and innovation</p>
            </div>
          </div>
          {/* Navigation Links (Centered) */}
          <div className="hidden md:flex justify-center mb-6 md:mb-0">
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/RadioLive" className="hover:text-primary transition-colors">
                Radio Live
              </Link>
              <Link to="/news" className="hover:text-primary transition-colors">
                News/Events
              </Link>
              <Link to="/studio" className="hover:text-primary transition-colors">
                Studio
              </Link>
              <Link to="/episodes" className="hover:text-primary transition-colors">
                Episodes
              </Link>
              {/* About Us Link */}
              <Link to="/AboutUs" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} VOG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
