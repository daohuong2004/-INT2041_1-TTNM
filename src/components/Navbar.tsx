import React from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react"; // Icon from lucide-react

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-700 px-4 py-3 shadow-lg fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side: Logo or navigation (optional) */}
        <div className="flex items-center">
          {/* You can add logo or brand here */}
        </div>

        {/* Right Side - Search Box and Profile Icon */}
        <div className="flex items-center gap-6 ml-auto">
          <span className="px-4 py-1 text-sm font-semibold bg-yellow-400 text-white mr-2 ml-0 rounded-2xl">
            For Disablities
          </span>

          {/* Search Box */}
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md max-w-xs">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent outline-none text-gray-700"
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
