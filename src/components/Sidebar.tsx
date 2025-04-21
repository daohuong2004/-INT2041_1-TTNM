import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart2,
  Clipboard,
  Eye,
  Award,
  Users,
  Settings,
  UserCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users as UsersIcon,
} from "lucide-react";
<img src="/assets/logo.png" alt="logo" />


const Sidebar: React.FC = () => {
  const [isGamificationOpen, setIsGamificationOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleGamificationDropdown = () => {
    setIsGamificationOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`bg-indigo-700 h-full fixed top-0 left-0 z-50 transition-all ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
      <div className="p-6 flex justify-between">
        <img src="/assets/logo.png" alt="ShikshaSoladu Logo" className="h-8 w-8" />
        <Link to="/" className={`text-white text-2xl font-bold flex items-center gap-2 ${isSidebarOpen ? '' : 'justify-center'}`}>
          <span className="text-yellow-300">SIGNPAL</span>
        </Link>
        <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? (
            <ChevronLeft size={24} />
          ) : (
            <ChevronRight size={24} />
          )}
        </button>
      </div>

      <ul className="mt-0 space-y-4">
        <li>
          <Link
            to="/dashboard"
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
          >
            <Home size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Home</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/how-to-use"
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
          >
            <UsersIcon size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">How To Use</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/videolearning"
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
          >
            <UsersIcon size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Video Learning</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/dictionary"
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
          >
            <UsersIcon size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Dictionary</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/translate"
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
          >
            <Clipboard size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Sign Language</span>}
          </Link>
        </li>
        

        <li>
          <button
            onClick={toggleGamificationDropdown}
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300 w-full text-left"
          >
            <Award size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Game</span>}
            {isGamificationOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {isGamificationOpen && (
            <ul className="ml-6 mt-2 space-y-2">
              <li>
                <Link
                  to="/Signgame"
                  className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
                >
                  {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Sign Game</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/Videogame"
                  className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
                >
                  {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Video Game</span>}
                </Link>
              </li>
              
             
            </ul>
          )}
        </li>

        

        
        <li>
          <Link
            to="/planyourday"
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
          >
            <Calendar size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">Plan Your Day</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="group text-white flex items-center gap-2 transition duration-300 px-6 py-2 hover:text-yellow-300"
          >
            <Eye size={18} />
            {isSidebarOpen && <span className="group-hover:text-yellow-300 transition">About Us</span>}
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
