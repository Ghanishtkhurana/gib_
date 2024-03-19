import api from "@/pages/api/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useLogin = () => {
  const router = useRouter();
  const login = useMutation({
    mutationFn: async ({ formdata }) => {
      const res = await api.post("", formdata);
      return res?.data;
    },
    onSuccess: (data) => {
      toast.success("Login success");
      router.push("/");
      // localStorage.setItem("authorization",data?.token)
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return login;
};

export default useLogin;
