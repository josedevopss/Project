import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    details: '',
    steps: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert the steps text area into an array of steps, filtering out empty lines
    const stepsArray = formData.steps
      .split('\n')
      .map(step => step.trim())
      .filter(step => step !== '');

    const payload = {
      name: formData.name,
      image: formData.image,
      description: formData.description,
      details: formData.details,
      steps: stepsArray,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/recipesData', payload);
      toast.success('Recipe created successfully!');
      // Reset the form after successful submission
      setFormData({
        name: '',
        image: '',
        description: '',
        details: '',
        steps: '',
      });
    } catch (error) {
      console.error('Error creating recipe:', error);
      toast.error(
        error.response?.data?.error || 'Error creating recipe.'
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow">
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
          <label className="block mb-2 font-medium">Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            rows="3" 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Details</label>
          <textarea 
            name="details" 
            value={formData.details} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            rows="4" 
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Steps (one per line)</label>
          <textarea 
            name="steps" 
            value={formData.steps} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            rows="6" 
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
