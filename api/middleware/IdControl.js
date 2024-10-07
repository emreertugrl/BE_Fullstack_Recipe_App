import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();

const idControl = (req, res, next) => {
  const found = data.find((i) => i.id === req.params.id);

  // eleman yoksa
  if (!found) {
    return res.status(404).json({
      message: "Aradığınız id'li eleman bulunamadı.",
    });
  }
  // req nesnesi içerisine bulunan elemanı ekle
  req.foundRecipe = found;

  // sorun yoksa sonraki adıma devam et
  next();
};

export default idControl;
