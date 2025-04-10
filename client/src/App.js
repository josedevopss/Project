import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CookAndChefApp from './img/CookAndChefApp';
import Login from './pages/Login';
import ApplyForm from './pages/ApplyForm';
import LoginIt from './pages/LoginIt';
import ChefAcademy from './pages/ChefAcademy';
import Main from './pages/Experts';
import Recipe from './pages/Recipe';
import LearnMore from './pages/LearnMore';
import Recipes from './pages/Recipes';
import BookChef from './pages/Book';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import img1 from "./img/logo_bg_remove.png";
import UploadRecipe from './pages/Upload';



function App() {
  const location = useLocation();

  const adminRoute =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/"
      : "https://admin-dashboard-ashen-iota-56.vercel.app/";

  // Hide Navbar and Footer on these routes
  const hideNavFooter = ["/login", "/register", '/LoginIt'].includes(location.pathname);

  return (
    <div>
      <div>
      {/* Header only on home page */}
      {location.pathname === "/" && (
        <div className="bg-[#cc3bcc] text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
          <div className="flex items-center mt-0">
            <img src={img1} alt="Progress Chef Manage logo" className="h-12 w-12" />
            <span
              className="ml-2 text-lg font-bold mt-6"
              style={{ fontFamily: "Gim NightShade" }}
            >
              Progress Chef Manage
            </span>
          </div>
          <p className="ml-20 mt-2 md:mt-0 md:ml-5 text-center md:text-left">
            Create unforgettable dining experiences.
          </p>
          <div className="md:mt-2 flex space-x-4">
            <Link
              to="/apply"
              className="bg-white text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Apply
            </Link>
            <a
              href={adminRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Admin
            </a>
          </div>
        </div>
        
      )}
  {/* Show Navbar only when not in login/register */}
  {!hideNavFooter && <Navbar />}
      {location.pathname === "/" && (
        <div>
          <section className="relative bg-white text-black text-center py-20">

            <div className="relative z-10 mh-0">
              <h2 className="text-7xl font-extrabold animate-pulse font-gim-nightshade">
                Find a cook online
              </h2>
              <br />
              <p className="md-0 text-2xl font-gim-nightshade">
                From a vast pool of over 50,000 culinary experts, specializing in a diverse array of cuisines.
                <br />
                The art of cooking is constantly evolving, blending tradition with innovation,
                <br />
                as chefs worldwide embrace new techniques, bold flavors, and modern culinary trends.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <Link
                  to="/Book"
                  className="bg-pink-500 hover:bg-white text-black px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 font-bold"
                >
                  BookChef
                </Link>
                <Link
                  to="/Home"
                  className="bg-pink-500 hover:bg-white text-black px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 font-bold"
                >
                  HomeFood
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}

      <Routes>
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/chefacademy" element={<ChefAcademy />} />
        <Route path="/experts" element={<Main />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipe/:id/:chefId" element={<Recipe />} />
       <Route path="/CookAndChefApp" element={<CookAndChefApp />} />



        <Route path="/" element={<CookAndChefApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LoginIt" element={<LoginIt />} />
        <Route path="/book" element={<BookChef />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<UploadRecipe />} />
      </Routes>
        </div>
      {/* Show Footer only when not in login/register */}
      {!hideNavFooter && <Footer />}
      
    </div>
  );
}

export default App;
