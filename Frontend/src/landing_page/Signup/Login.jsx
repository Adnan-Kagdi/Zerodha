import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Alert } from "@mui/material";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import "./Login.css"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false);
    const [loading, setLoading] = useState(false);

    const [progress, setProgress] = useState(0);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return setValidate(true);
        } else {
            setValidate(false);
        }

        setLoading(true);

        try {
            const res = await axios.post("https://zerodha-byxx.onrender.com/login", {
                email: email,
                password: password
            }
            )

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userId);

            setLoading(false);

            window.location.href = "https://dashboard-pka9.onrender.com"

        } catch (err) {
            console.error(err);
            alert("Login Failed!", err);
            setLoading(false);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleClosingAlert = () => {
        setValidate(false);
    }

    return (
        <div className="main-container">
            {
                loading ? (
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                ) : ""
            }

            <div className={!validate ? "d-none" : "mb-3 login-alert"}>
                <Alert severity="error" onClose={handleClosingAlert}
                    style={{ borderRadius: "30px" }}>
                    Please fill out the required fields below.
                </Alert>
            </div>
            <div className="login-container mt-5">
                <div className="login-box">
                    <form onSubmit={handleLogin} noValidate className=" g-3 needs-validation">
                        <p className="fs-4 mb-2 text-center">
                            Login to <a className="fs-4" href="" style={{ color: "#387ED1" }}>Zerodha</a>
                        </p>

                        <div>
                            <label htmlFor="email" className="form-label mt-3 mb-2">Email</label>
                            <input
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                className="form-control  mb-3"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <div className="invalid-feedback">Enter valid email address</div>
                        </div>
                        <label htmlFor="password" className="form-label mb-2">Password</label>
                        <div>
                            <input
                                className="form-control  mb-3"
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                                value={password}
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required /> <br />
                        </div>


                        <button className="btn l-btn" style={loading ? { opacity: "0.7" } : { opacity: "1" }}>Login</button>
                        {/* <button className="btn l-btn" type="submit" disabled={loading}>Login</button> */}

                        <div className="mt-2 text-center text-muted">
                            <p style={{ fontSize: "0.9rem" }}>not have any Account? <Link to="/signup" style={{ color: "#387ED1" }}>signup here</Link></p>
                        </div>
                    </form>
                </div >
                <div className="logo1 text-center mt-5" style={{ color: "grey" }}>
                    <FaGooglePlay style={{ marginTop: "0.1rem" }} />
                    <FaApple className="ms-4" /> <br />
                    <Link to="/"><img src="media/images/logo.svg" className="mt-4" style={{ width: "25%", color: "red", opacity: "0.6" }} /></Link>
                    <div className="mt-4 text-muted" style={{ fontSize: "0.8rem", opacity: "0.6" }}>
                        Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no.
                        INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha
                        Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart
                        Online Dispute Resolution | SEBI SCORES
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Login;