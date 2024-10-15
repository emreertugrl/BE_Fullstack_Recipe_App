const reqFields = [
  "recipeName",
  "category",
  "recipeTime",
  // "servingSuggestion",
  "ingredients",
  "instructions",
];
// objede bu değer var mı yok mu
const isInValid = (data) => {
  return reqFields.some((field) => !data[field]);
};

export default isInValid;
