import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle, FaBell } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-red-500 transition-colors duration-200 focus:outline-none md:hidden"
          >
            <FiMenu size={24} />
          </button>
          <h1 className="text-gray-800 text-2xl font-bold tracking-wide">
            Food Admin
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute right-3 top-2 text-gray-400">🔍</span>
          </div>
          <FaBell
            className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            size={24}
          />
          <FaUserCircle
            className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            size={28}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
