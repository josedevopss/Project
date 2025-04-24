import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginIt = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth/login", formData, { withCredentials: true });
      setMessage(response.data.message);
      
      localStorage.setItem("token", response.data.token);

      if (response.data.success) {
        navigate("/");
      }
      // You might want to redirect the user or store the user/token in your state/context here
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <a href="/" className="absolute top-4 left-4 bg-gray-800 opacity-20 text-white px-3 py-1 rounded-lg text-sm">
        Back to website →
      </a>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1343554309/photo/chef-tasting-food-and-showing-ok-sign.jpg?s=2048x2048&w=is&k=20&c=XU1zC0JhwBznpE2HD9YN3Z5zMuUD7Xmkm70p2o6tElc=')",
          opacity: 0.5,
        }}
      ></div>
      <div className="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 mt-3 bg-gray-700 rounded text-white"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 mt-3 bg-gray-700 rounded text-white"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="w-full bg-blue-500 p-3 mt-5 rounded">
            Login
          </button>
          {message && <p className="text-center text-sm mt-2">{message}</p>}
        </form>
        <p className="text-blue-300 text-sm mt-3 cursor-pointer text-center">
          Forgot your password?
        </p>
      </div>
    </div>
  );
};

export default LoginIt;
