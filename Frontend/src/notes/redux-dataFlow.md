# 🧠 Understanding Redux Data Flow in React

Let's break down how data is handled in a Redux store and how it's used in React components.

---

## 🏬 1. Store
The **Redux store** contains all the global state/data.

---

## 📖 2. useSelector (Read-only)
We use the `useSelector` hook in React components to **read data** from the store.

🔹 This data is **read-only**  
🔹 If you need to **modify** the data (like Create, Update, Delete), you have to **dispatch actions**

---

## 🚚 3. Passing Data to Another Component
If you pass this data to another component for operations (Create, Delete, Update):

- That component will **dispatch an action**
- The action will determine if the operation is **sync** or **async**

---

## ⏱ 4. Sync vs Async Actions

### ✅ Sync Action:
- Directly dispatches to the **reducer** (or **slice** in Redux Toolkit)
- The reducer updates the state in the store

### 🌐 Async Action:
- Makes an **API request** to the backend/database
- Waits for the **response**
- Then dispatches to the **reducer** with the data from backend
- The reducer updates the global store with the new data

---

## 🔄 5. Global Store Update
Once the reducer processes the action (sync or async), the **store gets updated globally**, and any component using `useSelector` will re-render with the updated data.

---

## 📌 Summary

| Step | Description |
|------|-------------|
| 1 | Data lives in the Redux store |
| 2 | `useSelector` is used to read the data |
| 3 | Operations are performed via `dispatch` |
| 4 | Action checks if the operation is sync or async |
| 5 | Reducer updates the store after handling the action |
