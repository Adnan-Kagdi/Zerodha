import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import "./Signup.css"

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://zerodha-byxx.onrender.com/signup", {
                username: username,
                email: email,
                password: password
            },
                { withCredentials: true }
            )

            navigate("/")

        } catch (err) {
            console.error(err);
            alert("Signup Failed")
        }
    }

    return (
        <div className="main-container">
            <div className="signup-container mt-5">
                <div className="signup-box">
                    <form onSubmit={handleSignup} className=" g-3 needs-validation" noValidate>
                        <p className="mb-4 fs-4 text-center">Signup to <a href="" style={{ color: "#387ED1" }}>Zerodha</a></p>
                        <div>
                            <label htmlFor="username" className="form-label mb-2">Username</label>
                            <input
                                placeholder="Enter your username"
                                name="username"
                                value={username}
                                className="form-control  mb-3"
                                id="username"
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                            <div className="invalid-feedback">Enter valid username</div>
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label mb-2">Email</label>
                            <input
                                className="form-control  mb-3"
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                value={email}
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label mb-2">Password</label>
                            <input
                                className="form-control  mb-3"
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                                value={password}
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>  <br />
                        <button className=" btn s-btn" type="submit">Signup</button>

                        <div className="mt-2 text-center text-muted">
                            <p style={{ fontSize: "0.9rem" }}>already signup? <Link to="/login" style={{ color: "#387ED1" }}>login here</Link></p>
                        </div>
                    </form>
                </div>
                <div>
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
                </div>
            </div>
        </div>
    );
}

export default Signup;