import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark"
      aria-label="Second navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          iNotebook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                } `}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                } `}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
