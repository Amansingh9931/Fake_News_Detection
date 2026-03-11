import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0f1f3a] via-[#223a7a] to-[#3a4bb0] text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fake News Detection. All rights reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
