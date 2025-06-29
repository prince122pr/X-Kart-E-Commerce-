# 📘 Redux Toolkit Terminologies

## 🧠 1. Redux

Redux is a **state management tool** used to manage data (state) in large React applications.

---

## 🧠 2. Redux Toolkit (RTK)

Redux Toolkit is the **official, recommended way to write Redux logic**. It simplifies Redux setup and code.

---

## 🧩 3. Slice

A **Slice** is a collection of:

* Initial state
* Reducers
* Action creators

It is created using `createSlice()`.

**You can think of a slice as one feature's logic** bundled together.

```js
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  }
});
```

---

## 🔧 4. Reducer

A **Reducer** is a function that **updates the state** based on an action.

Each slice creates its own reducer function.

```js
export default counterSlice.reducer;
```

---

## 🎯 5. Action / Action Creator

An **action** is an object that tells Redux *what to do*. RTK auto-generates action creators inside slices.

```js
export const { increment, decrement } = counterSlice.actions;
```

---

## 🧰 6. Store

A **Store** is a place where all the application's state lives.

With RTK, you create it using `configureStore()`.

```js
const store = configureStore({
  reducer: { counter: counterReducer }
});
```

---

## 🔗 7. Provider

The `<Provider>` is a React component that **connects the Redux store to your React app**.

Wrap it around your `<App />` component.

```jsx
<Provider store={store}>
  <App />
</Provider>
```

---

## 🧲 8. useSelector Hook

`useSelector` is a hook that **reads data** from the Redux store.

```js
const count = useSelector((state) => state.counter.count);
```

✅ *Read-only access to state.*

---

## ✍️ 9. useDispatch Hook

`useDispatch` is a hook that **sends actions** to the Redux store.

```js
const dispatch = useDispatch();
dispatch(increment());
```

✅ *Used to update the state.*

---

Let me know if you want this with code examples or diagrams!
