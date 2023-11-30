import React, { useState } from "react";
import "./Login.css";
import { logInUserApi } from "../../Api/api";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const statusText = await logInUserApi(formData);
    if (statusText === "OK") {
      navigate("/home");
    }
    setFormData({
      username: "",
      password: "",
    });
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <br />
        <br />
        <span>
          Already Have not Account&nbsp;<Link to="/">Register ?</Link>
        </span>
      </form>
    </div>
  );
}

export default LoginPage;
