import Image from "next/image";

export const Item = () => {
  return (
    <div className="border border-gray-200 p-4 rounded-md flex justify-between items-center">
      <p className="w-4/5 whitespace-nowrap overflow-hidden text-ellipsis">
        Lorem ipsum dolor sit amet.
      </p>
      <button className="w-8 h-8 flex justify-center items-center rounded hover:bg-red-600 hover:bg-opacity-15">
        <Image src="/delete.svg" alt="delete-button" width={24} height={24} />
      </button>
    </div>
  );
};
