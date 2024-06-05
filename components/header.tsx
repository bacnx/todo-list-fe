"use client";
import { useStore } from "@/store";

export const Header = () => {
  const email = useStore((state) => state.email);
  return (
    <div className="h-24 px-16 flex justify-between items-center border-b">
      <h2 className="text-2xl font-semibold text-cyan-700">Todo List</h2>
      <div className="text-gray-500 font-light">{email}</div>
    </div>
  );
};
