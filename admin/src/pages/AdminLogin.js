import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope, FaUserShield } from "react-icons/fa";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/admin/login",
        { email, password },
        { withCredentials: true } // Ensure cookies are sent/received
      );
      setMessage(res.data.message);
      navigate("/");
    } catch (error) {
      setMessage(
        error.response?.data?.error || "Login failed. Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-green-400 relative overflow-hidden"
    >
      {/* Animated dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 animate-pulse"></div>
      <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <FaUserShield size={48} className="text-blue-600 mb-2" />
          <h2 className="text-4xl font-extrabold text-gray-800">Admin Portal</h2>
          <p className="text-sm text-gray-600 mt-2">
            Secure login for administrators
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-600">
                <FaEnvelope />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@example.com"
                className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-600">
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="********"
                className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition-colors duration-300"
          >
            Login
          </button>
          {message && (
            <p className="mt-4 text-center text-red-600 font-medium">{message}</p>
          )}
        </form>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
