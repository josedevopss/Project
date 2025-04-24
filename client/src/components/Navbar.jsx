import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Check for token in localStorage
  const token = localStorage.getItem("token");

  // Logout function: remove token and refresh the page
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header>
      {/* Top Header */}


      {/* Main Navigation */}
      <div className="font-roboto">
        <header className="border-b ">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="text-red-600  text-3xl font-bold">Global Bites</div>
            <div className="flex space-x-4">
              <Link
                to="/recipe"
                className="bg-white text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out font-bold transform hover:scale-105"
              >
                Good Recipe
              </Link>
              {/* Conditionally render Sign In or Logout button */}
              {token ? (
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="bg-white text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out transform hover:scale-105 font-bold"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-white text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out transform hover:scale-105 font-bold"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
          <nav className="border-t">
            <div className="container mx-auto flex justify-between items-center py-2">
              <div className="flex space-x-4">
                <div className="relative group">
                  <Link to="/" className="text-gray-700 underline font-bold">
                    Home
                  </Link>
                </div>
                <div className="relative group">
                  <Link
                    to="/Recipes"
                    className="text-gray-700 underline font-bold"
                  >
                    Recipes
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Link
                    to="/chefacademy"
                    className="text-gray-700 underline font-bold"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Link
                    to="/experts"
                    className="text-gray-700 underline font-bold"
                  >
                    Cook Experts
                  </Link>
                </div>
              </div>
              <div className="relative">
                <input
                  className="border rounded-full px-4 py-1"
                  type="text"
                  placeholder='Search for "Chef"'
                />
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowLogoutModal(false)}
          ></div>
          {/* Modal */}
          <div className="bg-white p-6 rounded shadow-lg z-10">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
