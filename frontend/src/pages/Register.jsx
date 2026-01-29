import React, { useState } from "react";
import { api } from "../api/api";
import "../css/register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default role is user
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const res = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "user",
      })
      navigate('/login');
  };

  return (
    <div className="register">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>

          <div className="field">
            <label className="label-text">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label className="label-text">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label className="label-text">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label className="label-text">Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Sign up</button>

          <div className="login-link">
            Already have an account? <a href="#">Log In</a>
          </div>
        </form>
      </div>

      <div className="image-container">
        <img src="https://helloyubo.com/wp-content/uploads/2022/11/eCommerce.png" alt="Shopping" className="promo-image" />
      </div>
    </div>
  );
};

export default Register;