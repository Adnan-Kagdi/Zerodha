import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutClear = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        // Redirect to login after a short delay
        setTimeout(() => {
            navigate("/login"); // Redirect to login page
        }, 500); // Delay ensures storage is cleared before redirect
    }, []);

    return <h2>Logging out...</h2>; // Show message while redirecting
};

export default LogoutClear;
