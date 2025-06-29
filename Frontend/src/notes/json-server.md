# When to Use json-server

`json-server` is ideal when you don’t have a backend ready but still need API endpoints to develop, test, or demo your frontend application.

---

## ✅ When to Use

### 1. Frontend Development Without Backend  
If your backend is not ready, you can use `json-server` to simulate RESTful APIs instantly.  
**Example:**  
You’re building a recipe app and need endpoints like:
- `GET /recipes`
- `POST /recipes`
- `DELETE /recipes/:id`

Just define data in a `db.json` file and run `json-server`.

---

### 2. Mocking Data for Testing  
Easily test your frontend UI and logic with sample data.  
**Example:**  
Want to test filters and pagination with 50 fake recipes? Just add them to `db.json`.

---

### 3. Prototypes or Demos  
Need to show a working frontend to clients, teammates, or for a portfolio project?  
`json-server` gives you a backend-like experience in minutes.

---

### 4. Learning API Integration  
If you're learning `fetch`, `Axios`, `async/await`, or React Hooks, `json-server` is perfect for practicing without needing a real server.

---

### 5. Collaboration  
When frontend and backend developers work separately, `json-server` allows frontend work to proceed without waiting for the real API.

---

## 🚫 When Not to Use

- ❌ In production environments  
- ❌ If your app needs authentication or authorization  
- ❌ For complex data relationships  
- ❌ When real-time features are required (e.g., WebSockets)

---