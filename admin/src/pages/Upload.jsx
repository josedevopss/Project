import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadRecipe = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert ingredients and instructions to arrays, filtering out empty lines
    const ingredientsArray = formData.ingredients
      .split('\n')
      .filter((line) => line.trim() !== '');
    const instructionsArray = formData.instructions
      .split('\n')
      .filter((line) => line.trim() !== '');

    const data = {
      name: formData.name,
      image: formData.image,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
    };

    console.log('Submitting data:', data);

    try {
      const response = await axios.post('http://localhost:8000/api/recipes', data);
      console.log('Response:', response);
      toast.success('Recipe uploaded successfully!');
      // Reset the form after successful upload
      setFormData({
        name: '',
        image: '',
        ingredients: '',
        instructions: '',
      });
    } catch (error) {
      console.error('Error uploading recipe:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        toast.error(`Error: ${error.response.data.error || JSON.stringify(error.response.data)}`);
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upload a Recipe</h2>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Recipe Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Image URL</label>
          <input 
            type="text" 
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Ingredients (enter each ingredient on a new line)
          </label>
          <textarea 
            name="ingredients" 
            value={formData.ingredients} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            rows="4" 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Instructions (enter each step on a new line)
          </label>
          <textarea 
            name="instructions" 
            value={formData.instructions} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            rows="4" 
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload Recipe
        </button>
      </form>
    </div>
  );
};

export default UploadRecipe;
