"use client";
import { useEffect, useState } from "react";
import type { ItemType } from "@/type";
import { Item } from "./item";
import { listItem } from "@/services";

export const List = () => {
  const [list, setList] = useState<ItemType[]>([]);

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
