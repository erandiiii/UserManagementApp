import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddUser.scss';

function AddUser({ onAdd }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");   
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            setMessage("⚠️ Name and Email are required!");
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            company: { name: company || "N/A" },
        };

        onAdd(newUser);
        setMessage(`✅ New user created: ${newUser.name} (${newUser.email})`);

        setName("");
        setEmail("");
        setCompany("");

        
        setTimeout(() => {
            navigate("/users");
        }, 2500);
    };

    return (
        <div className="form-container">
            <h2>Add User</h2>

            {message && <div className="custom-alert">{message}</div>}

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
                <button type="submit">
                    Add User
                </button>
            </form>
        </div>
    );
}

export default AddUser;
