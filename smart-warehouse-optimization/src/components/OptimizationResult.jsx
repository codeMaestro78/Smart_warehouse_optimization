import React from "react";

function OptimizationResult({ result, items }) {
  const selectedItems = items.filter(
    (item, index) => result.selectedItems[index] === 1
  );
  const totalWeight = selectedItems.reduce((acc, item) => acc + item.weight, 0);

  // Calculate percentage used for each item
  const itemPercentages = selectedItems.map(
    (item) => (item.weight / result.capacity) * 100
  );

  // Generate colors for the stacks
  const getStackColor = (index) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-indigo-500",
      "bg-pink-500",
      "bg-cyan-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Optimization Results</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-lg font-semibold">
            Total Value: ${result.maxValue}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-lg font-semibold">
            Total Weight: {totalWeight.toFixed(2)} kg
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-lg font-semibold">
            Space Utilized: {((totalWeight / result.capacity) * 100).toFixed(2)}
            %
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">Selected Items</h3>
      {selectedItems.length > 0 ? (
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Weight (kg)</th>
                <th className="px-4 py-2 text-left">Value ($)</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.weight}</td>
                  <td className="px-4 py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mb-6 text-gray-600">
          No items selected in the optimization.
        </p>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Optimization Visualization</h3>

        {/* Stacked Bar Chart */}
        <div className="relative h-16 bg-gray-200 rounded-md mb-2 overflow-hidden">
          {selectedItems.length > 0 ? (
            <>
              {/* Create the stacks for each item */}
              {selectedItems.map((item, index) => {
                // Calculate the left position based on previous items
                const leftPosition = itemPercentages
                  .slice(0, index)
                  .reduce((total, percentage) => total + percentage, 0);

                return (
                  <div
                    key={index}
                    className={`absolute h-full ${getStackColor(index)}`}
                    style={{
                      left: `${leftPosition}%`,
                      width: `${itemPercentages[index]}%`,
                    }}
                    title={`${item.name}: ${itemPercentages[index].toFixed(
                      2
                    )}%`}
                  ></div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4">
          {selectedItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-4 h-4 ${getStackColor(index)} mr-2`}></div>
              <span>
                {item.name}: {itemPercentages[index].toFixed(2)}%
              </span>
            </div>
          ))}
          {selectedItems.length > 0 && (
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 mr-2"></div>
              <span>
                Unused:{" "}
                {(100 - (totalWeight / result.capacity) * 100).toFixed(2)}%
              </span>
            </div>
          )}
        </div>

        <div className="text-center mt-2 text-lg">
          <strong>
            {((totalWeight / result.capacity) * 100).toFixed(2)}% Capacity Used
          </strong>
        </div>
      </div>
    </div>
  );
}

export default OptimizationResult;
