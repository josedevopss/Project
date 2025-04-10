import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ChefApply() {
  const [applications, setApplications] = useState([]);

  // Fetch all chef applications (admin view)
  const fetchApplications = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/chef/all");
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching chef applications:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Generic function to update application status using the new endpoint
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:8000/api/chef/${id}/status`, { access: status });
      setApplications(applications.map(app =>
        app._id === id ? { ...app, access: status } : app
      ));
    } catch (error) {
      console.error("Error updating application status:", error.message);
    }
  };

  return (
    <div className="container mx-auto mt-6 p-6">
      <h2 className="text-2xl font-bold mb-4">Chef Applications</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Resume</th>
            <th className="border px-4 py-2">Access</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr key={app._id} className="bg-white">
                <td className="border px-4 py-2">{app._id}</td>
                <td className="border px-4 py-2">{app.name}</td>
                <td className="border px-4 py-2">{app.email}</td>
                <td className="border px-4 py-2">{app.phone}</td>
                <td className="border px-4 py-2">
                  <a
                    href={`http://localhost:8000/${app.resume}`}
                    
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Resume
                  </a>
                </td>
                <td className="border px-4 py-2">{app.access}</td>
                <td className="border px-4 py-2">
                  <div className="flex space-x-2 justify-center">
                    <button
                      onClick={() => updateStatus(app._id, "approved")}
                      className={`bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors ${
                        app.access === "approved" ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={app.access === "approved"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(app._id, "pending")}
                      className={`bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded transition-colors ${
                        app.access === "pending" ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={app.access === "pending"}
                    >
                      Pending
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4">
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
