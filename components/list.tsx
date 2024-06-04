import { Item } from "./item";

export const List = () => {
  return (
    <div className="flex flex-col gap-2 w-96 mt-8">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};
