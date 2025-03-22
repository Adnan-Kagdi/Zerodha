// import Logout from "./Signup/Logout";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const userId = localStorage.getItem("userId");

  return (
    <nav className="navbar navbar-expand-lg bg-body navContainer">
      <div className="container-fluid">
        <img src="media/images/logo.svg" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {userId ? (
              <li className="nav-item">
                <Link onClick={handleLogout} className="nav-link" to="/login">
                  <LogoutIcon style={{ fontSize: "1.2rem", marginBottom: "0.1rem", marginRight: "0.22rem" }} />
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">

              {userId ? (
                <Link className="nav-dashboard nav-link" to="https://dashboard-pka9.onrender.com">
                  Dashboard
                  <ArrowForwardIcon className="mb-1 ms-1"
                    style={{ fontSize: "1.2rem" }}
                  />
                </Link>
              ) : (
                <Link className="nav-dashboard nav-link" to="/login">
                  Dashboard
                  <ArrowForwardIcon className="mb-1 ms-1"
                    style={{ fontSize: "1.2rem" }}
                  />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;