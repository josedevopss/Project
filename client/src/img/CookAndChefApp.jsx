import React from "react";
import { Link } from "react-router-dom";

// Array containing team member data
const teamMembers = [
  {
    name: "John Doe",
    role: "Head Chef",
    image:
      "https://storage.googleapis.com/a1aa/image/Yo1mBIcOKfA1MSHOC_bjs_umaiQ8iDpGdYdPHIZ5RTA.jpg",
    description:
      "John is a seasoned chef with over 20 years of experience in the culinary industry. He specializes in Italian and French cuisine."
  },
  {
    name: "Jane Smith",
    role: "Pastry Chef",
    image:
      "https://storage.googleapis.com/a1aa/image/iQNHeGqqMXznc3ZpqEgm-Y4a2sCp7Z0uf1-Jo0-cb_s.jpg",
    description:
      "Jane is a talented pastry chef known for her exquisite desserts and pastries. She has won several awards for her innovative creations."
  },
  {
    name: "Mike Johnson",
    role: "Sous Chef",
    image:
      "https://storage.googleapis.com/a1aa/image/s78bDzx0dajJkUzKiXouFfP9FHb6dTGN2L2unZFTRtA.jpg",
    description:
      "Mike is a skilled sous chef who assists in the preparation and presentation of dishes. He is passionate about creating delicious and visually appealing meals."
  },
  {
    name: "Chef Akash",
    role: "Master Chef",
    image:
      "https://images.prestigeonline.com/wp-content/uploads/sites/4/2021/01/07141341/gordon-ramsay-masterclass-ft-blog0918-1200x900.jpg",
    description:
      "A professional cook who leads a kitchen team, overseeing all aspects of food preparation, and ensuring the quality of every dish served."
  }
];

const TeamMember = ({ member }) => {
  return (
    <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
      <div className="p-4 text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 object-cover mb-4 mx-auto rounded-full"
        />
        <h2 className="text-2xl font-medium">{member.name}</h2>
        <p className="text-gray-600">{member.role}</p>
        <p className="text-gray-700 mt-2">{member.description}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      {/* Intro Section */}
      <main className="container mx-auto py-8">
        <div className="text-center">
          <div className="text-red-600 font-bold">Global Bites</div>
          <h1 className="text-4xl font-bold mt-2">About Global Bites</h1>
          <div className="my-4">
            <img
              className="mx-auto"
              src="https://media.istockphoto.com/id/1053423374/photo/coconut-chicken-in-a-spicy-cream-sauce-close-up-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=ROQpgzQqLsMnX4IGkrsrKJCOfz7-0P41K3nKKzgN_Pg="
              alt="Epicurious logo"
              width="500"
              height="500"
            />
          </div>
          <div className="text-gray-700 font-bold">
            BY THE EDITORS OF GLOBAL BITES
          </div>
          <div className="text-gray-500">
            The art and science of preparing food for consumption by applying heat, which involves combining ingredients, using various techniques like boiling, baking, grilling, or roasting, to make food more palatable, digestible, and nutritious, often reflecting local cultures and traditions in its methods and ingredients. Cooking is an aspect of all human societies and a cultural universal.
          </div>
        </div>
      </main>

      {/* Notification Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex items-center space-x-4">
          <div className="bg-red-600 text-white p-2 rounded">
            <i className="fas fa-e"></i>
          </div>
          <div className="text-gray-700">
            Unlock access to over 50,000+ expertly tested recipes.{" "}
            <Link to="/chefacademy" className="text-red-600 underline">
              Explore what's new ›
            </Link>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <section className="py-14 px-4 bg-white">
        <h3 className="text-3xl font-semibold text-center text-black">
          Meet Our Team
        </h3>
        <div className="mt-6 grid md:grid-cols-4 gap-4 max-h-3xl max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Cook Types Section */}
      <section className="py-14 px-4 bg-gray-200">
        <h3 className="text-3xl font-semibold text-center text-black">
          Cook Types
        </h3>
        <div className="mt-6 grid md:grid-cols-3 gap-9 max-h-8xl max-w-4xl mx-auto">
          <div className="border shadow-lg rounded-lg p-4 bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4">
              <p className="text-2xl font-medium text-center">👨‍🍳Chef</p>
              <p className="text-center">
                A chef is a professional cook responsible for preparing meals. Chefs work in various settings, such as restaurants, hotels, and cruise ships.
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium">🍽️Quality Cooking</p>
              <p className="text-center">
                They ensure that food is cooked in large quantities while maintaining quality.
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium">🏠Home Catering</p>
              <p className="text-center">
                They cater to dietary preferences and household needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 px-4 bg-[#904390]">
        <h3 className="text-3xl font-semibold text-center text-white">
          What Our Customers Say
        </h3>
        <div className="mt-6 grid md:grid-cols-3 gap-9 max-h-8xl max-w-4xl mx-auto">
          <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4">
              <p className="text-2xl font-medium text-center">👍Excellent Service</p>
              <p className="text-center">
                I was blown away by the quality of the cooks and the service they provided. Highly recommend!
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium text-center">👌Delicious Food</p>
              <p className="text-center">
                The food was amazing and the presentation was top-notch. I will definitely be using this service again.
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium text-center">👍Friendly Staff</p>
              <p className="text-center">
                The staff were friendly and accommodating. They made sure that all my needs were met.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CookAndChefApp = () => {

  return (
    <div className="bg-white min-h-screen text-black">
      <Body />
    </div>
  );
};

export default CookAndChefApp;
