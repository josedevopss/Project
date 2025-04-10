import express from "express";
import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controller/recipesDataController.js";

const router = express.Router();

// GET all recipes
router.get("/", getRecipes);

// GET a single recipe by ID
router.get("/:id", getRecipeById);

// POST a new recipe
router.post("/", createRecipe);

// PUT update a recipe by ID
router.put("/:id", updateRecipe);

// DELETE a recipe by ID
router.delete("/:id", deleteRecipe);

export default router;
