import { readRecipes, writeRecipes } from "../model/recipeModel.js";
import crypto from "crypto";
import isInValid from "../utils/isInValid.js";

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

export const createRecipe = (req, res) => {
  // 1)isteğin body bölümünde gelen veriye eriş
  let newRecipe = req.body;

  // 2) veri bütünlüğünü kontrol et
  if (isInValid(newRecipe)) {
    return res
      .status(404)
      .json({ message: "Lütfen bütün değerleri tanımlayınız" });
  }

  // 3)veriye id ve foto ekle
  newRecipe = {
    ...newRecipe,
    id: crypto.randomUUID(),
    photo: `https://picsum.photos/seed/${crypto.randomUUID()}/500/500`,
  };
  // 4) tarif verisini diziye ekle
  data.push(newRecipe);

  // 5) json dosyasını güncelle
  writeRecipes(data);

  // 6) cevap gönder
  res.status(201).json({
    message: "Yeni tarif oluşturuldu.",
    recipe: newRecipe,
  });
};

export const getRecipe = (req, res) => {};

export const deleteRecipe = (req, res) => {};

export const updateRecipe = (req, res) => {};
