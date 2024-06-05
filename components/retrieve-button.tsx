"use client";
import { retrieveList } from "@/services";
import { useStore } from "@/store";

export const RetrieveButton = () => {
  const replaceList = useStore((state) => state.replaceList);

  const onRetrieve = async () => {
    const res = await retrieveList();
    replaceList(res.data.items);
  };

  return (
    <button
      className="mt-4 text-cyan-600 text-xl border-2 border-cyan-600 rounded-md p-1"
      onClick={onRetrieve}
    >
      Retrieve All
    </button>
  );
};
