import mongoose from "mongoose";

const RecipesSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
      details: { type: String, required: true },
      steps: { type: [String] },
    },
    { timestamps: true }
  );
  
export default mongoose.model("RecipeData", RecipesSchema);