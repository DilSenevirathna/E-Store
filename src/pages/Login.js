// src/pages/Login.js
// src/pages/Login.js
// src/pages/Login.js
// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", user);
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user data
        navigate("/home"); // Redirect to Home Page
      } else {
        setError(response.data.message); // Show error message
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p className="mt-3">
          Don't have an account? <button className="btn btn-link" onClick={() => navigate("/register")}>Register</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
