import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3001/users";

function Home() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    gmail: "",
  });

  const [users, setUsers] = useState([]);

  const [editId, setEditId] = useState(null);

  console.log(form);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(API, form);
    console.log(res);
    setUsers(res.data);
    console.log(users);
  };

  const handleChange = (e) => {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //At first there will be no editId because we have no user
    if (editId) {
      await axios.put(`${API}/${editId}`, form);
      setEditId(null);
    } else {
      const res = await axios.post(API, form);
    }
    setForm({
      username: "",
      password: "",
      gmail: "",
    });

    fetchUsers();
  };

  const handleDelete = async (id) => {
    console.log("delete");
    await axios.delete(`${API}/${id}`);
    fetchUsers();
  };

  const handleEdit = async (user, editId) => {
    console.log("edit");
    setForm(user);

    setEditId(user.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          value={form.username}
          onChange={handleChange}
        />
        <h3>Gmail</h3>
        <input
          type="email"
          name="gmail"
          placeholder="Enter Email"
          value={form.gmail}
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>

      <h1>All Users</h1>
      <hr />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>Name : {user.username}</h3>
            <h3>Password: {user.password}</h3>
            <h3>Email: {user.gmail}</h3>
            <button onClick={() => handleEdit(user)}>edit</button>
            <button
              onClick={() => {
                handleDelete(user.id);
              }}
            >
              delete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
