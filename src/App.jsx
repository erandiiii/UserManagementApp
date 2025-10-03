import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AddUser from './components/AddUser';
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";


function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Fetch response:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched users:", data);
        setUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);
  const handleAddUser = (newUser) => {
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
