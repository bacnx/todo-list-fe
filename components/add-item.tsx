export const AddItem = () => {
  return (
    <div className="flex gap-4">
      <input
        className="bg-cyan-200 p-2 rounded-md focus:outline-1 focus:outline-cyan-600"
        type="text"
        placeholder="Add more item..."
        name="add"
      />
      <button className="border-2 border-cyan-600 text-cyan-600 font-semibold px-3 rounded-md hover:bg-cyan-600 hover:text-white">
        Add
      </button>
    </div>
  );
};
