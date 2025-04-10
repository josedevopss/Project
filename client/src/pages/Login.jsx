import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye } from "lucide-react";
import img5 from '../img/chef_img.jpg';

function Register() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure your backend URL is correct
      const response = await axios.post("http://localhost:8000/api/v1/auth/register", formData);
      setMessage(response.data.message);
      // If registration is successful, navigate to the Login page
      if (response.data.success) {
        navigate("/LoginIt");
      }
    } catch (error) {
      console.log(error.message, 'error in register');
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1d0f1] p-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src={img5} alt="logo"
            className="w-full h-full object-cover"
          />
          <a href="/" className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
            Back to website →
          </a>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center">Create an account</h2>
          <p className="text-center text-sm mt-2">
            Already have an account? <a href="/LoginIt" className="text-red-500 cursor-pointer">Login</a>
          </p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid gap-4">
              <input 
                name="username"
                className="border p-2 rounded w-full" 
                placeholder="First name" 
                value={formData.username} 
                onChange={handleChange}
              />
            </div>
            <input 
              name="email"
              className="border p-2 rounded w-full" 
              placeholder="Email address" 
              type="email" 
              value={formData.email} 
              onChange={handleChange}
            />
            <div className="relative">
              <input
                name="password"
                className="border p-2 rounded w-full"
                placeholder="Enter your password"
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <Eye className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" required />
              <p className="text-sm">
                I agree to the <span className="text-red-500">terms and conditions</span>
              </p>
            </div>
            <button type="submit" className="w-full bg-black text-white p-2 rounded">
              Create account
            </button>
            {message && <p className="text-center text-sm mt-2">{message}</p>}
            <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
              <span className="mx-2">or register with</span>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <button className="flex items-center gap-2 px-4 bg-gray-200 text-black p-2 rounded">
                <img src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj" alt="Google" className="w-5 h-5" /> Google
              </button>
              <button className="flex items-center gap-2 px-4 bg-gray-200 text-black p-2 rounded">
                <img src="https://cdn3d.iconscout.com/3d/free/preview/free-instagram-3d-logo-download-in-png-blend-fbx-gltf-file-formats--social-media-pack-logos-2447888.png?f=webp&h=700" alt="Instagram" className="w-5 h-5" /> Instagram
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
