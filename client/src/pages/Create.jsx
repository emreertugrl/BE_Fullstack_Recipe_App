import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Form from "../components/Form";
import api from "./../api/index";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
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

  return (
    <div>
      <h1 className="text-red-400 text-3xl font-bold max-w-2xl mx-auto">
        Yeni Tarif Oluştur
      </h1>
      <Form mutate={mutate} isLoading={isLoading} />
    </div>
  );
};

export default Create;
