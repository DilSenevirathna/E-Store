import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", user);
      alert(response.data.message);
      if (response.data.success) navigate("/login");
    } catch (error) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Name" className="form-control my-2"
          value={user.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="form-control my-2"
          value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control my-2"
          value={user.password} onChange={handleChange} required />
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
