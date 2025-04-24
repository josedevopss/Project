import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/api";

function Main() {
  const [chefs, setChefs] = useState([]);

  // Fetch chefs from backend
  const fetchChefs = async () => {
    try { 
      // Note: endpoint matches router's GET route: /api/chef
      const response = await axios.get(`${API_URL}/chef/chefs`);
      setChefs(response.data);
    } catch (error) {
      console.error("Error fetching chefs:", error);
    }
  };

  useEffect(() => {
    fetchChefs();
  }, []);

  return (
    <main
      className="container mx-auto mt-6 px-6"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/04/89/04/65/360_F_489046512_D3W2qTasAWwtMycRQOVuQnjPFItDYxh8.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <a
        href="/"
        className="absolute top-4 left-4 bg-gray-800 opacity-40 text-white px-3 py-1 rounded-lg text-sm"
      >
        Back to website →
      </a>
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Meet Our Renowned Chefs
      </h2>
      {chefs.map((chef, index) => (
        <div
          className="flex items-center mb-6 bg-white bg-opacity-70 p-4 rounded"
          key={index}
        >
          <img
            src={chef.image}
            alt={`Chef ${chef.name}`}
            className="h-32 w-32 rounded-full object-cover border-2 border-gray-500"
          />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{chef.name}</h3>
            <p className="text-lg">{chef.bio}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-center mb-6">
        <Link to="/learnmore">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Main;
