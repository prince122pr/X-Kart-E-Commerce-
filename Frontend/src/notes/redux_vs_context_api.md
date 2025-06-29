
# What is Redux?

Redux is a **state management library** for JavaScript applications, commonly used with React. It helps manage **global state** in a predictable way by using a **single source of truth** (a central store).

---

## Why Do We Need Redux?

- React handles **local state** well using `useState` or `useReducer`.
- When many components need **access to the same state**, passing props becomes complex (prop drilling).
- Redux provides a **centralized store** to manage and update state predictably.

---

## Why Not Just Use Context API?

Context API is great for small apps or simple global state needs (like theme, user auth).

But for larger apps:
- You’ll end up creating **multiple contexts** (userContext, productContext, etc.)
- This leads to **deeply nested providers** and harder maintenance.
- Context API triggers **re-renders** for all consumers, even if only part of the state changes.

---

## Redux vs Context API

| Feature                      | Redux                               | Context API                        |
|-----------------------------|--------------------------------------|------------------------------------|
| Purpose                     | State management                     | Prop drilling alternative           |
| Setup Complexity            | Medium to High                       | Low                                 |
| Performance (on large apps) | Efficient                            | Less efficient                      |
| Scalability                 | Highly scalable                      | Less scalable with large state      |
| Code Structure              | Predictable and centralized          | Spread out                          |
| Middleware/Async support    | Built-in (Redux Thunk, Saga)         | Manual implementation needed        |

---

## Summary

- Use **Context API** for **simple and small** apps.
- Use **Redux** when:
  - You have complex state logic
  - Multiple parts of your app rely on the same data
  - You need tools for debugging and time-travel

---

## Redux Flow (Bonus)

```
Component → Dispatch(Action) → Middleware (optional) → Reducer → Store → Component
```

Let me know if you'd like the Redux flow in more detail or with diagrams.
