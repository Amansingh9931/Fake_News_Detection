import React, { useState } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#0f1f3a] via-[#223a7a] to-[#3a4bb0] shadow-md fixed top-0 z-30">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <div className="bg-[#1f3c88] p-1.5 rounded-md">
            <ShieldCheck className="text-orange-400" size={22} />
          </div>
          <span>Fake News Detection</span>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-6 md:gap-10 text-white text-base font-medium absolute md:static top-full left-0 w-full md:w-auto bg-[#0f1f3a]/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 md:py-0`}
            onClick={() => setMenuOpen(false)}>

          <li className="relative group">
            <a href="#home" className="block px-6 md:px-0 py-2">Home</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#about" className="block px-6 md:px-0 py-2">About</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#features" className="block px-6 md:px-0 py-2">Features</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#contact" className="block px-6 md:px-0 py-2">Contact</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

        </ul>

        {/* Button */}
        <button className="hidden md:inline-block bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-2 rounded-lg text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
          Get Started
        </button>

      </div>

    </nav>
  );
};

export default Navbar;