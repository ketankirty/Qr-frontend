// Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoo from "./logoo.png";
import { QrCode } from "lucide-react";
import QrCodeComponent from "../qrcode/QrCode"; // Import your Qrcode component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQr, setShowQr] = useState(false); // new state for QR popup

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50 px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoo} alt="Logo" className="w-[30vh]" />
        </div>

        {/* Hamburger (mobile only) */}
        <div
          className="relative w-8 h-6 flex flex-col justify-between cursor-pointer opacity-80 mr-2 lg:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`h-[3px] w-full bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-full bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-full bg-gray-800 dark:bg-white rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </div>

        {/* Menu */}
        <ul
          className={`font-medium z-40 transition-all duration-500 ease-in-out
          lg:flex lg:flex-row lg:gap-2 lg:static lg:w-auto lg:max-h-none lg:opacity-100 lg:pointer-events-auto lg:p-0 lg:bg-transparent lg:shadow-none
          ${
            isOpen
              ? "flex flex-col p-2 absolute top-full left-0 w-full max-h-[500px] opacity-100 pointer-events-auto bg-white/10 dark:bg-gray-900/70 backdrop-blur-md shadow-md"
              : "hidden"
          }`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/menu", label: "Menu" },
            { to: "/aboutshop", label: "About" },
            { to: "/contact", label: "Contact & Feedback" },
          ].map(({ to, label }) => (
            <li key={label} className="bg-white/20 dark:bg-gray-800/40">
              <NavLink
                to={to}
                onClick={() => setIsOpen(false)}
                style={{ textDecoration: "none" }}
                className="block px-4 py-2 text-2xl text-black dark:text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:text-red-500"
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* QR Code Button */}
          <li>
            <button
              onClick={() => setShowQr(true)} style={{borderRadius:"5px"}}
              className="px-4 py-2 text-2xl bg-orange-500  text-white  flex items-center gap-2 hover:bg-orange-400 transition duration-300"
            >
              <QrCode /> QR Code
            </button>
          </li>
        </ul>
      </nav>

      {/* QR Code Popup */}
      {showQr && (
        <div className="fixed inset-0 bg-black/ backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-4 relative">
            <QrCodeComponent onClose={() => setShowQr(false)} /> 
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
