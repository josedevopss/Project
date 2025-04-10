import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="bg-white text-gray-900 p-8 mb-8 shadow-lg rounded-lg">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-64 h-64 object-cover mb-4 mx-auto rounded-lg"
        />
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  // Function to fetch recipes from the backend
  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      toast.error('Error fetching recipes.');
      console.log(error.message)
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100 p-8">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Recipe key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">
            No recipes found. Please try again later.
          </p>
        )}
      </div>
    </>
  );
};

export default Recipes;
