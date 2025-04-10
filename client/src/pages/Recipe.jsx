import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [openRecipeId, setOpenRecipeId] = useState(null);

  // Fetch recipes from the backend
  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/recipesData');
      setRecipes(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching recipes:', error);
      console.log(error.message)
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const toggleRecipeDetails = (id) => {
    setOpenRecipeId(openRecipeId === id ? null : id);
  };

  return (
    <main className="container mx-auto mt-6 px-6">
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">
          Recipes You Needed Most!
        </h2>
        <div className="bg-white p-6 rounded shadow">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                className="border rounded-lg p-4 mb-6 shadow"
                key={recipe._id}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleRecipeDetails(recipe._id)}
                >
                  <div className="flex items-center">
                    <img
                      src={recipe.image}
                      alt={`Recipe ${recipe.name}`}
                      className="h-32 w-32 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{recipe.name}</h3>
                      <p>{recipe.description}</p>
                    </div>
                  </div>
                  <button className="text-blue-500 underline">
                    {openRecipeId === recipe._id ? "Hide Details" : "View Details"}
                  </button>
                </div>
                {openRecipeId === recipe._id && (
                  <div className="mt-4 border-t pt-4">
                    <h4 className="text-lg font-bold mb-2">Details</h4>
                    <p className="mb-4">{recipe.details}</p>
                    <h4 className="text-lg font-bold mb-2">Steps</h4>
                    <ol>
                      {recipe.steps.map((step, index) => (
                        <li key={index} className="mb-2">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No recipes found.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Recipe;
