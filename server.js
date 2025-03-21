const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/knapsack", (req, res) => {
  const { items, capacity } = req.body;

  // Basic knapsack solution logic
  const knapsack = (items, capacity) => {
    const n = items.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      const { weight, value } = items[i - 1];
      for (let w = 0; w <= capacity; w++) {
        if (weight <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    let w = capacity;
    const selectedItems = [];
    for (let i = n; i > 0; i--) {
      if (dp[i][w] !== dp[i - 1][w]) {
        selectedItems.push(items[i - 1]);
        w -= items[i - 1].weight;
      }
    }

    return {
      totalValue: dp[n][capacity],
      remainingCapacity: w,
      selectedItems,
    };
  };

  const result = knapsack(items, parseInt(capacity));
  res.json(result);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
