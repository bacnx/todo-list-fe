import { baseAxios } from "./axios";

export const listItem = async () => {
  const res = await baseAxios.get("/items");
  return res;
};

export const addItem = async (content: string) => {
  const res = await baseAxios.post("/items", { content });
  return res;
};

export const deleteItem = async (id: number) => {
  const res = await baseAxios.delete(`/items/${id}`);
  return res;
};

export const retrieveList = async () => {
  const res = await baseAxios.post("/retrieve");
  return res;
};
