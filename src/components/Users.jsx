import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users({ users = [] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(""); // default: no sorting

  console.log("Users received:", users);

  // Filter users by name or email
  let filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Apply sorting only if selected
  if (sort !== "") {
    filteredUsers.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "email") return a.email.localeCompare(b.email);
      if (sort === "company")
        return (a.company?.name || "").localeCompare(b.company?.name || "");
      return 0;
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {/* Sort dropdown */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="">-- No Sorting --</option>
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
        <option value="company">Sort by Company</option>
      </select>

      {/* Show users */}
      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            state={user}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Company: {user.company?.name}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Users;
