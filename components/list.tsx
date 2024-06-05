"use client";
import { useEffect } from "react";
import { Item } from "./item";
import { listItem } from "@/services";
import { useStore } from "@/store";

export const List = () => {
  const list = useStore((state) => state.items);
  const setList = useStore((state) => state.replaceList);

  useEffect(() => {
    (async () => {
      const res = await listItem();
      setList(res.data.items);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-2 w-96 mt-8">
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
