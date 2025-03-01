// import Logout from "./Signup/Logout";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authCotext";
import axios from "axios";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Navbar.css";

function Navbar() {
  const { setCurrUser, setDashUsername } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // localStorage.removeItem("userId");
      await axios.post('https://zerodha-byxx.onrender.com/logout', {}, { withCredentials: true });
      setCurrUser(null);
      setDashUsername(null);

      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  };

  const userId = getCookie("userId");

  return (
    <nav className="navbar navbar-expand-lg bg-body navContainer">
      <div className="container-fluid">
        <img src="media/images/logo.svg" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li style={userId ? { display: "none" } : {}} className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="support">Support</Link>
            </li>
            {/* <li style={!userId ? { display: "none" } : {}} className="nav-item">
              <Link onClick={handleLogout} className="nav-link" to="support">Logout</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link nav-dashboard" to="https://dashboard-pka9.onrender.com">
                Dashboard
                <ArrowForwardIcon className="mb-1 ms-1"
                  style={{ fontSize: "1.2rem" }}
                />
              </Link>
            </li>
            {/* <li className="nav-item" style={{ fontSize: "1.2rem", marginTop: "6px" }} >
              <i className="fa-solid fa-bars"></i>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;