import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('resume', formData.resume);

    console.log(data)

    try {
      const response = await axios.post('http://localhost:8000/api/chef/apply', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Application submitted successfully!');
      // navigate.apply('/')
      // Optionally reset the form here
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      toast.error(
        error.response?.data?.error || 'You are already applyed..!',{position: 'top-center'}
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto mt-10 p-6 max-w-lg shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-bold mb-4">Apply as a Chef</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block font-medium">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              className="w-full p-2 border rounded" 
              onChange={handleChange} 
              value={formData.firstName}
              required 
            />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              className="w-full p-2 border rounded" 
              onChange={handleChange} 
              value={formData.lastName}
              required 
            />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Email ID</label>
            <input 
              type="email" 
              name="email" 
              className="w-full p-2 border rounded" 
              onChange={handleChange} 
              value={formData.email}
              required 
            />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              className="w-full p-2 border rounded" 
              onChange={handleChange} 
              value={formData.phone}
              required 
            />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Upload Resume</label>
            <input 
              type="file" 
              name="resume" 
              className="w-full p-2 border rounded" 
              accept=".pdf,.doc,.docx" 
              onChange={handleChange} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <br />
    </>
  );
};

export default ApplyForm;
