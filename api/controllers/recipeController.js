import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();

export const getAllRecipes = (req, res) => {
  //   console.log("Gelen Parametre", req.query);

  //   tarif verisinin bir kopyasını oluştur
  let recipes = [...data];

  //   aratılan kelime
  const search = req.query?.search?.toLowerCase();

  //   eğer search parametresi geldiyse filtreleme
  if (search) {
    recipes = data.filter((recipe) =>
      recipe.recipeName.toLowerCase().includes(search)
    );
  }

  //   eğer order parametresi geldiyse sıralama yap
  if (req.query.order) {
    // artan
    recipes.sort((a, b) =>
      req.query.order === "asc"
        ? a.recipeTime - b.recipeTime
        : b.recipeTime - a.recipeTime
    );
  }
  //  client cevap
  res.status(200).json({
    success: "success",
    results: recipes.length,
    recipes: recipes,
  });
};

export const createRecipe = (req, res) => {};

export const getRecipe = (req, res) => {};

export const deleteRecipe = (req, res) => {};

export const updateRecipe = (req, res) => {};
