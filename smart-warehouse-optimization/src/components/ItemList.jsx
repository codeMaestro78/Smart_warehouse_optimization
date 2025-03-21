import React from "react";

function ItemList({ items, onDeleteItem }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No items have been added yet. Please add items to optimize warehouse
        storage.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Weight (kg)</th>
            <th className="px-4 py-2 text-left">Value ($)</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.weight}</td>
              <td className="px-4 py-2">{item.value}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
