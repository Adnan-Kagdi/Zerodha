import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AutoLogout = () => {
    const navigate = useNavigate();

    const getCookie = (name) => {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) return value;
        }
        return null;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const token = getCookie("token");
            if (!token) {
                console.log("Token expired. Logging out...");
                window.location.href = "https://info-18ts.onrender.com/login"
            }
        }, 1000); // Check every second (adjust for efficiency)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [navigate]);

    return;
};

export default AutoLogout;
