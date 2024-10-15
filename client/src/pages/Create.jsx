import React, { useState } from "react";
import Select from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import api from "./../api/index";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  // api isteği
  const { isLoading, mutate } = useMutation({
    mutationFn: (newRecipe) => api.post("/api/v1/recipes", newRecipe),

    onSuccess: () => {
      navigate("/");
      toast.success("Yeni Tarif Oluşturuldu.");
    },
    onError: (error) => {
      toast.error("Bir Sorun Oluştu" + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // bütün inputlardaki verilere obje formatında eriş
    const formData = new FormData(e.target);
    let newRecipe = Object.fromEntries(formData.entries());

    // adımları "," ile diziye çevireceğiz.
    newRecipe.instructions = newRecipe.instructions.split(",");

    // malzemeleri nesneye ekle
    newRecipe.ingredients = ingredients;

    // api'aya istek at
    mutate(newRecipe);
  };
  return (
    <div>
      <h1 className="text-red-400 text-3xl font-bold max-w-2xl mx-auto">
        Yeni Tarif Oluştur
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-2xl mx-auto "
      >
        <Field label="Başlık">
          <input name="recipeName" className="inp" required />
        </Field>

        <Field label="Kategori">
          <input name="category" className="inp" required />
        </Field>

        <Field label="Süre">
          <input type="number" name="recipeTime" className="inp" required />
        </Field>

        <Field label="Malzemeler">
          <Select
            isMulti
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
          ></textarea>
        </Field>

        <Field label="Sunum Önerisi">
          <textarea
            name="servingSuggestion"
            className="inp min-h-[80px] max-h-[200px]"
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
            Oluştur
          </button>
        </div>
      </form>
    </div>
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
export default Create;
