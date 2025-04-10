import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold">Chef's Delight</h2>
          <p className="mt-2 text-gray-400">
            Bringing you the best recipes and culinary experiences.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="chefacademy" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="Recipes" className="hover:text-yellow-400">
                Recipes
              </a>
            </li>
            <li>
              <a href="chefacademy" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: contact@chefdelight.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; 2025 Chef's Delight. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
