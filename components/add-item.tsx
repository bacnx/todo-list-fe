"use client";

import { addItem } from "@/services";
import { useStore } from "@/store";
import { useState } from "react";

export const AddItem = () => {
  const [value, setValue] = useState("");
  const storeAddItem = useStore((state) => state.addItem);

  const onSubmit = async () => {
    if (value === "") return;
    const res = await addItem(value);
    storeAddItem(res.data.item);
    setValue("");
  };

  return (
    <div className="flex gap-4">
      <input
        className="bg-cyan-200 p-2 rounded-md focus:outline-1 focus:outline-cyan-600"
        type="text"
        placeholder="Add more item..."
        name="add"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="border-2 border-cyan-600 text-cyan-600 font-semibold px-3 rounded-md hover:bg-cyan-600 hover:text-white"
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
};
