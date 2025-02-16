import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showalert("Account loggen in successfully", "success");
      } else {
        props.showalert(
          `Signup failed: ${
            json.errors?.map((err) => err.msg).join(", ") || json.message
          }`,
          "danger"
        );
      }
    } catch (error) {
      props.showalert(`Error signing up: ${error}`, "danger");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "350px", borderRadius: "10px" }}
      >
        <h3 className="text-center text-primary mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <p className="text-center mt-3">
            <a href="#" className="text-decoration-none">
              Forgot password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
