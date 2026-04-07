import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3001/users";

function App() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    gmail: "",
  });

  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  // 🔹 Fetch Users (READ)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  // 🔹 Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Create or Update User
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // UPDATE
      await axios.put(`${API}/${editId}`, form);
      setEditId(null);
    } else {
      // CREATE
      await axios.post(API, form);
    }

    setForm({ username: "", password: "", gmail: "" });
    fetchUsers();
  };

  // 🔹 Delete User
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchUsers();
  };

  // 🔹 Edit User
  const handleEdit = (user) => {
    setForm(user);
    setEditId(user.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD App</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <input
          type="email"
          name="gmail"
          placeholder="Gmail"
          value={form.gmail}
          onChange={handleChange}
        />

        <button type="submit">{editId ? "Update User" : "Add User"}</button>
      </form>

      <hr />

      <h3>Users List</h3>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.username} | {user.gmail}
          </p>

          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
