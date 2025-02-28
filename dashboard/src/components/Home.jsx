import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import AutoLogout from "./AutoLogout";

const Home = () => {
  const navigate = useNavigate();
  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) return value;
    }
    return null;
  };

  const token = getCookie("token");
  return (
    <>
      {
        token ? (
          <div>
            <AutoLogout />
            <TopBar />
            <Dashboard />
          </div>
        ) : (
          window.location.href = "http://localhost:5173/login"
        )
      }

    </>
  );
};

export default Home;
