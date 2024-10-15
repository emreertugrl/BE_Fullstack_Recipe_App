import React from "react";
import Form from "../components/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api";
import { toast } from "react-toastify";

const Update = () => {
  const navigate = useNavigate();
  // url'den düzenlenecek elemanın id'sini al
  const { id } = useParams();

  // apiden düzenlenecek elemanın bilgilerini al
  const { data } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () =>
      api.get(`/api/v1/recipes/${id}`).then((res) => res.data.found),
  });

  // api'ye güncelleme isteği atacak mutasyon hazırla
  const { isLoading, mutate } = useMutation({
    mutationFn: (updatedData) =>
      api.patch(`/api/v1/recipes/${id}`, updatedData),
    // .then((res) => res.data.recipe)
    onSuccess: () => {
      toast.success("Tarif başarıyla güncellendi.");
      navigate(`/`);
    },
    onError: () => {
      toast.error("Tarif güncellenirken bir hata oluştu.");
    },
  });

  return (
    <div>
      <h1 className="text-red-400 text-3xl font-bold max-w-2xl mx-auto">
        Tarifi Düzenle
      </h1>
      <Form mutate={mutate} isLoading={isLoading} recipeData={data} />
    </div>
  );
};

export default Update;
