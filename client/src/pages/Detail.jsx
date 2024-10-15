import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();

  // id'si bilinen elemanın verilerini çekme
  const { isLoading, error, data } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () =>
      api
        .get(`/api/v1/recipes/${id}`)
        .then((res) => res.data.found)
        .catch((err) => {}),
  });
  console.log(data);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <Link to={-1} className="btn flex items-center gap-2 py-1 px-2">
          <IoMdArrowRoundBack />
          Geri
        </Link>
        <button className="btn bg-red-500 hover:bg-red-600 flex items-center px-2 py-1 gap-2">
          <FaTrashAlt />
          Sil
        </button>
      </div>

      {isLoading
        ? "Loading"
        : error
        ? "Error"
        : data && (
            <div className="flex flex-col gap-3">
              <h1 className="title text-3xl ">{data.recipeName}</h1>

              <div className="flex gap-4 ">
                <span className="badge">{data.category}</span>
                <span className="badge">{data.recipeTime} dak.</span>
              </div>

              <img
                src={data.image}
                alt={data.recipeName}
                className="rounded-lg max-h-[350px] w-full object-cover"
              />

              <div>
                <h2 className="title">Malzemeler</h2>
                <ul>
                  {data.ingredients.map((i, key) => (
                    <li className="font-semibold text-lg" key={key}>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="title">Tarif</h2>
                <ol className=" list-decimal ps-5">
                  {data.instructions.map((i, key) => (
                    <li className="font-semibold text-lg" key={key}>
                      {i}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="title">Sunum Önerisi</h2>
                <p className="font-semibold text-lg">
                  {data.servingSuggestion}
                </p>
              </div>
            </div>
          )}
    </div>
  );
};

export default Detail;
