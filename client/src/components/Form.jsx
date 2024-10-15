import Select from "react-select/creatable";
import { Link } from "react-router-dom";
import { useState } from "react";

const Form = ({ isLoading, mutate, recipeData }) => {
  const [ingredients, setIngredients] = useState(recipeData?.ingredients || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // bütün inputlardaki verilere obje formatında eriş
    const formData = new FormData(e.target);
    let newRecipe = Object.fromEntries(formData.entries());

    // adımları "," ile diziye çevireceğiz.
    newRecipe.instructions = newRecipe.instructions.split(",");

    // malzemeleri nesneye ekle
    newRecipe.ingredients = ingredients;

    // eğerki düzenleme modundaysak newRecipe içerisine id değerini de ekle
    if (recipeData) {
      newRecipe.id = recipeData.id;
    }

    // api isteği at
    mutate(newRecipe);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-2xl mx-auto "
    >
      <Field label="Başlık">
        <input
          name="recipeName"
          className="inp"
          required
          defaultValue={recipeData?.recipeName}
        />
      </Field>

      <Field label="Kategori">
        <input
          name="category"
          className="inp"
          required
          defaultValue={recipeData?.category}
        />
      </Field>

      <Field label="Süre">
        <input
          type="number"
          name="recipeTime"
          className="inp"
          required
          defaultValue={recipeData?.recipeTime}
        />
      </Field>

      <Field label="Malzemeler">
        <Select
          isMulti
          value={ingredients.map((i) => ({
            label: i,
            value: i,
          }))}
          onChange={(options) =>
            setIngredients(options.map((opt) => opt.value))
          }
          required
        />
      </Field>

      <Field label="Tarif Adımları (, ile ayırınız.)">
        <textarea
          name="instructions"
          className="inp min-h-[80px] max-h-[200px]"
          required
          defaultValue={recipeData?.instructions}
        ></textarea>
      </Field>

      <Field label="Sunum Önerisi">
        <textarea
          name="servingSuggestion"
          className="inp min-h-[80px] max-h-[200px]"
          defaultValue={recipeData?.servingSuggestion}
        ></textarea>
      </Field>
      <div className="flex justify-end gap-6">
        <Link to="/" className="btn">
          Geri
        </Link>

        <button
          disabled={isLoading}
          type="submit"
          className="btn bg-red-400 hover:bg-red-500"
        >
          {recipeData ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

// HOC - Higher Order Components
const Field = ({ children, label }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>
      {children}
    </div>
  );
};

export default Form;
