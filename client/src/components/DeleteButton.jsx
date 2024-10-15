import { useMutation } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import api from "../api";
import { LoaderSm } from "./Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteButton = ({ productId }) => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation({
    mutationFn: () => {
      api.delete(`/api/v1/recipes/${productId}`);
    },
    onSuccess: () => {
      navigate("/");
      toast.success("Tarif Kaldırıldı.");
    },
    onError: () => {
      toast.error("İşlem Başarısız.");
    },
  });

  return (
    <button
      disabled={isLoading}
      onClick={mutate}
      className="btn bg-red-500 hover:bg-red-600 flex items-center justify-center px-2 py-1 gap-2 min-w-[90px]"
    >
      {isLoading ? (
        <LoaderSm />
      ) : (
        <>
          <FaTrashAlt />
          Sil
        </>
      )}
    </button>
  );
};

export default DeleteButton;
