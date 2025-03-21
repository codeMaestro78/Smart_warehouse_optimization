# 📦 Smart Warehouse Optimization 🚀

## 💡 Project Overview

Smart Warehouse Optimization is a React-based web application that helps warehouse managers **optimize storage** by selecting the best combination of items to store using the **0/1 Knapsack Algorithm**. The system maximizes the total value of stored items without exceeding the warehouse capacity.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ItemForm.jsx           // Form to add new items (name, weight, value)
│   ├── ItemList.jsx           // Displays the list of added items
│   └── OptimizationResult.jsx // Displays optimized selection and total value
│
├── utils/
│   └── knapsackSolver.js      // Contains the 0/1 Knapsack Algorithm logic
│
└── App.jsx                    // Main component managing states and rendering
```

---

## ⚙️ Features

✅ Add items with name, weight, and value  
✅ View all added items dynamically  
✅ Run optimization to select the best combination of items  
✅ Display optimized result with selected items and total value  
✅ Simple and clean UI for easy interaction

---

## 🧠 Tech Stack

- **React.js** (Frontend Framework)
- **JavaScript (ES6+)**
- **0/1 Knapsack Algorithm (Dynamic Programming)**
- **CSS / Tailwind CSS (optional for styling)**

---

## 📈 How It Works

The 0/1 Knapsack Algorithm takes:

- `items[]` (each with weight and value)
- `capacity` of the warehouse

It returns:

- Optimal list of items to store
- Maximum achievable total value within the capacity


---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm installed

### 🔧 Installation

```bash
git clone https://github.com/codeMaestro78/Smart_warehouse_optimization.git
cd smart-warehouse-optimization
npm install
npm run dev
```


