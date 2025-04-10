import mongoose from "mongoose";

const ApplySchema = new mongoose.Schema(
  {
    firstName: { 
      type: String, 
      required: true 
    },
    lastName: { 
      type: String, 
      required: true 
    },
    bio: {
      type: String,
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    phone: { 
      type: String, 
      required: true, 
      unique: true 
    },
    // Store the path or URL of the uploaded resume
    resume: { 
      type: String, 
      required: true 
    },
    // Role field for chef applications, defaulting to "chef"
    role: {
      type: String,
      default: "chef",
    },
    access: {
      type: String,
      default: "approved",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Chef", ApplySchema);
