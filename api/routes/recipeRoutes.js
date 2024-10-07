import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";
import idControl from "../middleware/IdControl.js";

const router = express.Router();
//
router
  .route("/api/v1/recipes") //
  .get(getAllRecipes)
  .post(createRecipe);

//
router
  .route("/api/v1/recipes/:id")
  .get(idControl, getRecipe)
  .delete(idControl, deleteRecipe)
  .patch(idControl, updateRecipe);

export default router;
