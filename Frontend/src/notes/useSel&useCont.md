# 🔄 `useSelector` vs `useContext` – Simple Explanation

| Feature              | `useSelector` (Redux)                                 | `useContext` (React)                             |
|----------------------|-------------------------------------------------------|--------------------------------------------------|
| 📦 Source            | Redux store                                           | React Context                                    |
| 📚 Purpose           | Read data from Redux state                            | Share data globally in the app                   |
| 🧑‍🏫 Read/Write       | **Read-only** – used to read state                    | **Read & Write** – can read and update           |
| ⚙️ Update Mechanism | Use `useDispatch()` to update via actions              | Pass update functions through context            |
| 🔁 Re-renders        | Re-renders on selected state change                   | Re-renders on context value change               |
| 🛠️ Setup Complexity  | Requires Redux setup (store, reducer, etc.)           | Simple setup using React's Context API           |

---

## ✅ In Short:
- 🔸 `useSelector` is for **reading** data from a Redux store.
- 🔸 To **update**, you need `useDispatch()` with actions.
- 🔸 `useContext` allows both **reading and writing** if the update logic is shared via context.

---

## 🧠 Examples

### Using `useSelector`:
```js
// Read state
const cartItems = useSelector((state) => state.cart.items);

// Update state
const dispatch = useDispatch();
dispatch({ type: 'ADD_TO_CART', payload: product });
