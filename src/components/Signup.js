import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credential.password !== credential.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/createuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credential.name,
            email: credential.email,
            password: credential.password,
          }),
        }
      );

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem("token", json.authToken);
        console.log(localStorage.getItem("token"));
        navigate("/");
        props.showalert("Account created successfully", "success");
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

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "350px", borderRadius: "10px" }}
      >
        <h3 className="text-center text-primary mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={onChange}
              placeholder="Enter your full name"
              value={credential.name}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={onChange}
              value={credential.email}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={onChange}
              placeholder="Create a password"
              value={credential.password}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              onChange={onChange}
              placeholder="Confirm your password"
              value={credential.confirmPassword}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
          <p className="text-center mt-3">
            <a href="/" className="text-decoration-none">
              Already have an account? Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
