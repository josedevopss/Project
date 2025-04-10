import RecipesData from "../models/RecipeData.js";

// Get all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await RecipesData.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
};

// Get a single recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await RecipesData.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).json({ error: "Failed to fetch recipe." });
  }
};

// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const { name, image, description, details, steps } = req.body;
    const newRecipe = new RecipesData({ name, image, description, details, steps });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Failed to create recipe." });
  }
};

// Update an existing recipe by ID
export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await RecipesData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ error: "Failed to update recipe." });
  }
};

// Delete a recipe by ID
export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await RecipesData.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.status(200).json({ message: "Recipe deleted successfully." });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ error: "Failed to delete recipe." });
  }
};
