import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevent page refresh

    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }

    const newUser = {
      id: Date.now(), // unique local id
      name,
      email,
      company: { name: company || "N/A" },
    };

    console.log("New user created:", newUser); // ✅ debug log
    onAdd(newUser); // ✅ update App state
    navigate("/users"); // ✅ go back to list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button type="submit" style={{ marginTop: "10px" }}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
