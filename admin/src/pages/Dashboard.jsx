import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-lg text-gray-600">
          Welcome to the admin dashboard. Manage credentials, view key metrics, and monitor system activity.
        </p>
      </header>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Recipes</h2>
          <p className="mt-2 text-3xl font-bold text-green-600">567</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Pending Applications</h2>
          <p className="mt-2 text-3xl font-bold text-red-600">12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3">
            <p className="text-gray-700">User John Doe registered</p>
            <p className="text-sm text-gray-400">2 minutes ago</p>
          </li>
          <li className="py-3">
            <p className="text-gray-700">Recipe "Chicken Curry" added</p>
            <p className="text-sm text-gray-400">10 minutes ago</p>
          </li>
          <li className="py-3">
            <p className="text-gray-700">Chef application pending approval</p>
            <p className="text-sm text-gray-400">1 hour ago</p>
          </li>
          <li className="py-3">
            <p className="text-gray-700">User Jane Smith updated profile</p>
            <p className="text-sm text-gray-400">3 hours ago</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
