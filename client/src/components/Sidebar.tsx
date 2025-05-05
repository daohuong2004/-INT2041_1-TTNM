import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Clipboard,
  Video,
  Award,
  ChevronDown,
  ChevronUp,

  Calendar,
  Users as UsersIcon,
  UserCheck2Icon,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const [isGamificationOpen, setIsGamificationOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleGamificationDropdown = () => {
    setIsGamificationOpen((prev) => !prev);
  };

  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prev) => !prev);
  // };

  return (
    <div className={`bg-indigo-700 h-full fixed top-0 left-0 z-50 transition-all ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
      <div className="p-3 flex items-center">
        <img src="/assets/alternate_logo.png" alt="Logo" className="h-8 w-8" />
        {isSidebarOpen && (
          <Link to="/" className="text-yellow-300 text-3xl font-bold flex items-center gap-2 hover:text-yellow-300 transition-colors">
            SignPal
          </Link>
        )}
        {/* <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? (
            <ChevronLeft size={24} />
          ) : (
            <ChevronRight size={24} />
          )}
        </button> */}
      </div>

      <ul className="mt-4 space-y-6">
        {/* Menu items */}
        <li>
          <Link
            to="/dashboard"
            className=" group text-white flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <Home size={20} />
            {isSidebarOpen && <span className="text-lg">Home</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/how-to-use"
            className="group text-white flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <UsersIcon size={20} />
            {isSidebarOpen && <span className="text-lg">How To Use</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/videolearning"
            className="group text-white flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <Video size={20} />
            {isSidebarOpen && <span className="text-lg">Video Learning</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/dictionary"
            className="group text-white flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <Clipboard size={20} />
            {isSidebarOpen && <span className="text-lg">Dictionary</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/translate"
            className="group text-white flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <UserCheck2Icon size={20} />
            {isSidebarOpen && <span className="text-lg">Sign Languages Translator</span>}
          </Link>
        </li>

        {/* Game with dropdown */}
        <li>
          <button
            onClick={toggleGamificationDropdown}
            className="group text-white flex items-center justify-between px-4 py-2 w-full rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out text-left"
          >
            <div className="flex items-center gap-4">
              <Award size={22} />
              {isSidebarOpen && <span className="text-lg">Game</span>}
            </div>
            {isGamificationOpen ? (
              <ChevronUp size={22} />
            ) : (
              <ChevronDown size={22} />
            )}
          </button>


          {isGamificationOpen && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                <Link
                  to="/Signgame"
                  className="group text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
                >
                  {isSidebarOpen && <span className="text-md">Sign Game</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/Videogame"
                  className="group text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
                >
                  {isSidebarOpen && <span className="text-md">Video Game</span>}
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/planyourday"
            className="group text-white flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <Calendar size={20} />
            {isSidebarOpen && <span className="text-lg">Plan Your Day</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/about-us"
            className="group text-white flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            <UsersIcon size={20} />
            {isSidebarOpen && <span className="text-lg">About Us</span>}
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
