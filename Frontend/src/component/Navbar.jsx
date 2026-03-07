import React from "react";
import { ShieldCheck } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#0f1f3a] via-[#223a7a] to-[#3a4bb0] shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <div className="bg-[#1f3c88] p-1.5 rounded-md">
            <ShieldCheck className="text-orange-400" size={22} />
          </div>
          <span>Fake News Detection</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 text-white text-base font-medium">

          <li className="relative group">
            <a href="#home">Home</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#about">About</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#features">Features</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="#contact">Contact</a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </li>

        </ul>

        {/* Button */}
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-2 rounded-lg text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
          Get Started
        </button>

      </div>

    </nav>
  );
};

export default Navbar;