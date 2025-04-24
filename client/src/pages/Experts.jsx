import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [chefs, setChefs] = useState([]);

  const mockChefs = [
    {
      name: "Chef Arjun Nair",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      bio: "Master of South Indian cuisine with over 18 years of experience in 5-star hotels and culinary schools.",
      experience: "18 years",
      specialties: "Dosa artistry, Kerala Sadya, Udupi cuisine",
      awards: "Best Regional Chef – India 2020",
      location: "Chennai, Tamil Nadu"
    },
    {
      name: "Chef Maya Sharma",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Award-winning pastry chef trained at Le Cordon Bleu, Paris. Known for fusion desserts.",
      experience: "12 years",
      specialties: "French-Indian fusion, designer cakes, vegan sweets",
      awards: "Dessert Innovator Award 2021",
      location: "Mumbai, Maharashtra"
    },
    {
      name: "Chef Ravi Iyer",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      bio: "Traditional North Indian food expert bringing royal Mughlai flavors to modern homes.",
      experience: "20 years",
      specialties: "Mughlai cuisine, tandoori grills, Punjabi dhaba-style dishes",
      awards: "Golden Ladle - North India, 2019",
      location: "Amritsar, Punjab"
    },
    {
      name: "Chef Anjali Menon",
      image: "https://randomuser.me/api/portraits/women/57.jpg",
      bio: "From home cook to celebrity chef, Anjali is known for soulful vegetarian recipes.",
      experience: "10 years",
      specialties: "Gujarati thalis, Ayurvedic meals, gluten-free dishes",
      awards: "Home Chef of the Year – 2022",
      location: "Ahmedabad, Gujarat"
    },
    {
      name: "Chef Suresh Mehta",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      bio: "Grill master and BBQ expert trained in Texas. Brings a smoky twist to Indian meats.",
      experience: "15 years",
      specialties: "Barbecue, smoked meats, kebabs, American-Indian fusion",
      awards: "Barbecue World Cup Finalist, 2021",
      location: "Bangalore, Karnataka"
    },
    {
      name: "Chef Pooja Reddy",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Nutrition-focused chef passionate about healthy, flavorful vegetarian dishes.",
      experience: "8 years",
      specialties: "Millet-based meals, superfoods, diabetic-friendly cooking",
      awards: "Best Wellness Chef – 2023",
      location: "Hyderabad, Telangana"
    },
    {
      name: "Chef Imran Khan",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Middle Eastern cuisine expert with deep knowledge of spices and flavor balance.",
      experience: "14 years",
      specialties: "Shawarma, hummus, kebabs, Indo-Arabic fusion",
      awards: "Spice Maestro Award – Dubai 2020",
      location: "Kozhikode, Kerala"
    },
    {
      name: "Chef Nisha Patel",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
      bio: "Michelin-trained chef dedicated to plating perfection and new-age food styling.",
      experience: "11 years",
      specialties: "Molecular gastronomy, sushi artistry, fine dining",
      awards: "India’s Rising Star Chef – 2022",
      location: "New Delhi, Delhi"
    }
  ];
  

  useEffect(() => {
    setChefs(mockChefs);
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
          className="flex flex-col md:flex-row items-center mb-6 bg-white bg-opacity-70 p-4 rounded shadow-lg"
          key={index}
        >
          <img
            src={chef.image}
            alt={`Chef ${chef.name}`}
            className="h-32 w-32 rounded-full object-cover border-2 border-gray-500"
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl font-bold">{chef.name}</h3>
            <p className="text-lg text-gray-800 italic">{chef.bio}</p>
            <p><strong>Experience:</strong> {chef.experience}</p>
            <p><strong>Specialties:</strong> {chef.specialties}</p>
            <p><strong>Awards:</strong> {chef.awards}</p>
            <p><strong>Location:</strong> {chef.location}</p>
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
