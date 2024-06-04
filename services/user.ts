import { baseAxios } from "./axios";

export const login = async (email: string) => {
  const res = await baseAxios.post("/login", { email });
  return res;
};
