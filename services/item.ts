import { baseAxios } from "./axios";

export const listItem = async () => {
  const res = await baseAxios.get("/items");
  return res;
};

export const addItem = async (content: string) => {
  const res = await baseAxios.post("/items", { content });
  return res;
};
