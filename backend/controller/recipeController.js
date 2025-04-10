import Recipe from "../models/Recipe.js";

// Get all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    res.status(500).json({ error: "Error fetching recipes." });
    // console.log(error.message)
  }
};

// Create a new recipe
export const createRecipe = async (req, res) => {
  // console.log(req.body)
  try {
    const { name, image, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({
      name,
      image,
      ingredients,
      instructions,
    });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Error creating recipe." });
  }
};

// Get a single recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: "Recipe not found." });
    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).json({ error: "Error fetching recipe." });
  }
};

// Update a recipe by ID
export const updateRecipe = async (req, res) => {
  try {
    const { name, image, ingredients, instructions } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { name, image, ingredients, instructions },
      { new: true, runValidators: true }
    );
    if (!updatedRecipe)
      return res.status(404).json({ error: "Recipe not found." });
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ error: "Error updating recipe." });
  }
};

// Delete a recipe by ID
export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe)
      return res.status(404).json({ error: "Recipe not found." });
    res.status(200).json({ message: "Recipe deleted successfully." });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ error: "Error deleting recipe." });
  }
};
