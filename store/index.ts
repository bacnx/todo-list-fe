import { ItemType } from "@/type";
import { create } from "zustand";

interface StoreState {
  email: string;
  setEmail: (email: string) => void;
  items: ItemType[];
  addItem: (item: ItemType) => void;
  deleteItem: (id: number) => void;
  replaceList: (items: ItemType[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  email: "",
  setEmail: (email) => set(() => ({ email })),

  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id != id),
    })),
  replaceList: (items) =>
    set(() => ({
      items,
    })),
}));
