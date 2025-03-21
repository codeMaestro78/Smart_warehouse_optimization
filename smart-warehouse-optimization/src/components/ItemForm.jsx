import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [itemValue, setItemValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !itemWeight || !itemValue) {
      alert("Please fill in all fields");
      return;
    }

    const newItem = {
      name: itemName,
      weight: parseFloat(itemWeight),
      value: parseFloat(itemValue),
    };

    onAddItem(newItem);
    setItemName("");
    setItemWeight("");
    setItemValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="text-lg font-medium mb-2 text-gray-700">Add New Item</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-gray-700 mb-1">Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Weight (kg):</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={itemWeight}
            onChange={(e) => setItemWeight(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter weight"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Value ($):</label>
          <input
            type="number"
            min="1"
            step="1"
            value={itemValue}
            onChange={(e) => setItemValue(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter value"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}

export default ItemForm;
