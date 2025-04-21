import React from "react";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar cố định */}
      <div className="fixed top-0 left-0 w-64 h-full z-40">
        <Sidebar />
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 ml-64">
        {/* Navbar cố định */}
        <div className="fixed top-0 left-64 right-0 h-16 bg-white z-30 shadow-md px-6 flex items-center">
          <Navbar />
        </div>

        {/* Nội dung dưới navbar */}
        <div className="pt-20 px-6 pb-6 bg-white bg-opacity-90 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
