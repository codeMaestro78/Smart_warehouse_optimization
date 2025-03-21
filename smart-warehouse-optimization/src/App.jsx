import React, { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import OptimizationResult from "./components/OptimizationResult";
import { solveKnapsack } from "./utils/knapsackSolver";

function App() {
  const [items, setItems] = useState([]);
  const [capacity, setCapacity] = useState(100);
  const [optimizedSelection, setOptimizedSelection] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateCapacity = (newCapacity) => {
    setCapacity(parseInt(newCapacity, 10));
  };

  const handleOptimize = () => {
    const result = solveKnapsack(items, capacity);
    setOptimizedSelection(result);
  };

  const handleReset = () => {
    setItems([]);
    setOptimizedSelection(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Smart Warehouse Optimization
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Warehouse Configuration
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Warehouse Capacity (kg):
              </label>
              <input
                type="number"
                min="1"
                value={capacity}
                onChange={(e) => handleUpdateCapacity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <ItemForm onAddItem={handleAddItem} />
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleOptimize}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={items.length === 0}
              >
                Optimize Storage
              </button>
              <button
                onClick={handleReset}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Warehouse Items
            </h2>
            <ItemList items={items} onDeleteItem={handleDeleteItem} />
          </div>
        </div>
        {optimizedSelection && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <OptimizationResult result={optimizedSelection} items={items} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
