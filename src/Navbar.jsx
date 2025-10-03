import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ background: "#2c3e50", padding: "10px" }}>
            {/* <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>
                Home
            </Link> */}
            <Link to="/users" style={{ color: "#fff" }}>
                Users
            </Link>
            <Link to="/add-user" style={{ color: "white", textDecoration: "none" }}>
                Add User
            </Link>

        </nav>
    );
}

export default Navbar;
