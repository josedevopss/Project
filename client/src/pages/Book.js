import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";


const Book = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedChef, setSelectedChef] = useState(null);
  const [chefs, setChefs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    date: "",
    email: "",
    number: "",
    address: "",
    specialRequests: ""
  });

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await axios.get(`${API_URL}/chef/chefs`);
        setChefs(response.data);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };

    fetchChefs();
  }, []);

  const handleChefClick = (chef) => {
    setSelectedChef(chef);
    setShowBookingForm(true);
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token");
  
    if (!token) {
      toast.error("Please login to book a chef.");
      return;
    }
  
    let userId;
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.user_id || decodedToken.id || decodedToken.sub; // depending on how your backend encodes it
      console.log("Decoded user ID:", userId);
    } catch (err) {
      console.error("Invalid token:", err);
      toast.error("Invalid token. Please login again.");
      return;
    }
  
    if (!selectedChef || !selectedChef._id) {
      toast.error("No chef selected for booking.");
      return;
    }

    
  
    try {
      const response = await axios.post(
        `${API_URL}/bookings/bookchef`,
        {
          chef: selectedChef._id,
          user: userId, // include the user ID if your API needs it
          ...form,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Booking response:", response.data);
  
      toast.success(`Booking confirmed for Chef ${selectedChef.name}!`);
      setShowBookingForm(false);
      setForm({
        name: "",
        date: "",
        email: "",
        number: "",
        address: "",
        specialRequests: "",
      });
    } catch (err) {
      console.error("Booking failed:", err.message);
      toast.error("Booking failed. Please try again.");
    }
  };
  
  
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Navbar */}
      <nav className="bg-purple-900 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">Chef Booking</h1>
      </nav>

      {/* Scrolling Text */}
      <section className="bg-purple-700 py-4">
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee py-2 text-white">
            <span className="px-8">👨‍🍳We offer the best chefs for your events!</span>
            <span className="px-8">🏠Book a professional chef today!</span>
            <span className="px-8">🍽️Make your occasion memorable with expert chefs!</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      {showBookingForm && selectedChef && (
        <div className="fixed bottom-0 right-0 bg-purple-900 text-white p-4 z-50 rounded-lg shadow-2xl w-96">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-extrabold">Book Chef {selectedChef.name}</h2>
            <button
              onClick={() => setShowBookingForm(false)}
              className="text-white bg-purple-700 hover:bg-purple-600 px-2 py-1 rounded"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleBookingSubmit} className="mt-4">
            {["name", "email", "number", "address", "specialRequests"].map((field) => (
              <div className="mt-4" key={field}>
                <label htmlFor={field} className="block font-bold capitalize">{field}</label>
                {field === "specialRequests" ? (
                  <textarea
                    id={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="p-2 w-full rounded-lg mt-2 text-black"
                    placeholder={`Enter ${field}`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="p-2 w-full rounded-lg mt-2 text-black"
                    placeholder={`Enter ${field}`}
                  />
                )}
              </div>
            ))}
            <div className="mt-4">
              <label htmlFor="date" className="block font-bold">Preferred Date</label>
              <input
                type="date"
                id="date"
                value={form.date}
                onChange={handleChange}
                required
                className="p-2 w-full rounded-lg mt-2 text-black"
              />
            </div>
            <button type="submit" className="bg-purple-700 text-white px-6 py-2 mt-4 font rounded-lg">
              Confirm Booking
            </button>
          </form>
        </div>
      )}

      {/* Chef Cards Section */}
      <section className="py-14 px-4 bg-gray-200">
        <h3 className="text-3xl text-center font-bold text-black">Book Our Expert Chefs</h3>
        <div className="mt-6 flex overflow-x-auto py-4">
          {chefs.map((chef) => (
            <div
              key={chef._id}
              className="inline-block w-64 p-4 bg-white rounded-lg shadow-lg mx-2 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => handleChefClick(chef)}
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-center">{chef.name}</h3>
              <p className="text-center text-gray-600">{chef.role}</p>
              <p className="text-center text-gray-600">{chef.price}</p>
              <p className="text-center text-gray-600">{chef.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Book;
