export function solveKnapsack(items, capacity) {
  const n = items.length;

  // 2D aray for dp
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  // Fill the dp table
  for (let i = 1; i <= n; i++) {
    const item = items[i - 1];
    for (let w = 0; w <= capacity; w++) {
      if (item.weight <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - Math.floor(item.weight)] + item.value
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Backtrack to find which items are selected
  const selectedItems = Array(n).fill(0);
  let remainingCapacity = capacity;

  for (let i = n; i > 0; i--) {
    if (dp[i][remainingCapacity] !== dp[i - 1][remainingCapacity]) {
      selectedItems[i - 1] = 1;
      remainingCapacity -= Math.floor(items[i - 1].weight);
    }
  }

  return {
    maxValue: dp[n][capacity],
    selectedItems,
    capacity,
  };
}

export function calculateEfficiency(items) {
  return items.map((item) => ({
    ...item,
    efficiency: item.value / item.weight,
  }));
}
