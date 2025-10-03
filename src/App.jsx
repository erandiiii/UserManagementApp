import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AddUser from './components/AddUser';
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";


function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from API once when the app loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Fetch response:", res); // ✅ check raw response
        return res.json();
      })
      .then((data) => {
        console.log("Fetched users:", data); // ✅ check data
        setUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);
  // Add new user at the top of the list
  const handleAddUser = (newUser) => {
    console.log("App.jsx received new user:", newUser); // ✅ debug
    setUsers([newUser, ...users]);
  };


  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Users users={users} />} /> 
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/add-user" element={<AddUser onAdd={handleAddUser} />} />


      </Routes>

    </>
  )
}

export default App
