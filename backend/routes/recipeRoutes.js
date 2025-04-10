import express from "express";
import {
  getRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controller/recipeController.js";

const router = express.Router();

// GET all recipes
router.get("/", getRecipes);

// POST a new recipe
router.post("/", createRecipe);

// GET a single recipe by ID
router.get("/:id", getRecipeById);

// PUT update a recipe by ID
router.put("/:id", updateRecipe);

// DELETE a recipe by ID
router.delete("/:id", deleteRecipe);

export default router;
