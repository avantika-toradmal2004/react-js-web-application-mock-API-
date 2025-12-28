import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    if (formData.username === "admin" && formData.password === "1234") {
      setSuccess("Login successful!");
      setError("");
    } else {
      setError("Invalid username or password");
      setSuccess("");
    }
  };

  
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    width: "320px",
    textAlign: "center",
  };

  const inputGroupStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "8px",
  };

  const inputStyle = {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "8px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Login</h2>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        {success && <p style={{ color: "green", fontSize: "14px" }}>{success}</p>}

        <div style={inputGroupStyle}>
          <FaUser style={{ marginRight: "8px", color: "#555" }} />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter username"
          />
        </div>

        <div style={inputGroupStyle}>
          <FaLock style={{ marginRight: "8px", color: "#555" }} />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter password"
          />
        </div>
        
        <span> dont have account Register here</span><button onClick={()=>navigate("/")}>Register</button>


        <button type="submit" style={buttonStyle} onClick={()=>navigate("/Dashboard")}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
