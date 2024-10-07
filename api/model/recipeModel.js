import fs from "fs";
// json dosyasının içeriğini okur ve döndürür
export const readRecipes = () => {
  try {
    const text = fs.readFileSync("./data.json", "utf-8");
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// param olarak aldığı veriyi json dosyasına yazar
export const writeRecipes = (data) => {
  try {
    const text = JSON.stringify(recipes);
    fs.writeFileSync("./data.json", text);
  } catch (error) {
    console.log(error);
  }
};
