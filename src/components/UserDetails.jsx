import React from "react";
import { useLocation } from "react-router-dom";

function UserDetails() {
  const location = useLocation();
  const user = location.state; // user passed from Users.jsx

  if (!user) {
    return <p>No user data found. Go back to the list.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>
      <h3>{user.name}</h3>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Company:</b> {user.company?.name}</p>
      {user.phone && <p><b>Phone:</b> {user.phone}</p>}
      {user.website && <p><b>Website:</b> {user.website}</p>}
      {user.address && (
        <p>
          <b>Address:</b> {user.address.street}, {user.address.city}
        </p>
      )}
    </div>
  );
}

export default UserDetails;
