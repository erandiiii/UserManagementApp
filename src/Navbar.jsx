import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

function Navbar() {
    return (
        <nav className="n-container">
            <Link to="/" className="logo">
                <h1>UserManagement</h1>
            </Link>
            <div className="nav-links">
                <Link to="/users">
                    Users
                </Link>
                <Link to="/add-user">
                    Add User
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;
