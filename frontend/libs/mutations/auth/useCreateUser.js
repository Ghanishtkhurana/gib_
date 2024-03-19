import api from "@/pages/api/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateUser = () => {
  const createUser = useMutation({
    mutationFn: async (data) => {
      const res = await api.post();
      return res?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return createUser;
};

export default useCreateUser;
