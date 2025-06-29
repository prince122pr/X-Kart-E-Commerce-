# Understanding Axios and Axios Instance in React

## 📌 What is Axios?

Axios is a JavaScript library used to make HTTP requests from the browser (frontend) to a server (backend).

## 🔁 What is an Axios Instance?

An Axios instance is a custom version of Axios with a pre-configured setup (like base URL or headers).

### Example Code:

```js
import axios from 'axios';

let instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

export default instance;
```

This means now you can use:

```js
instance.get('/users'); // instead of axios.get('http://localhost:3000/users')
```

## 🧠 Why Use an Instance?

* Avoid repeating base URL in every request
* Easy to set common headers like authentication tokens
* Better organized code in large applications

---

## 🤔 Is It Backend?

**No!** Axios is not part of the backend. It's used on the **frontend** to **connect to** the backend.

| Part     | Role                                    |
| -------- | --------------------------------------- |
| Backend  | Stores & serves data (e.g. Express API) |
| Frontend | UI code (React app)                     |
| Axios    | Connects frontend to backend            |

---

## ✅ Use Cases for Axios:

* Fetching data from APIs (GET)
* Sending new data to the server (POST)
* Updating data (PUT/PATCH)
* Deleting data (DELETE)

Let me know if you want to learn how to use Axios with hooks like `useEffect()`!
