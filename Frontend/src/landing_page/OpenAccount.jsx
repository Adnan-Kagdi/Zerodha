import { Link } from "react-router-dom";
import "./OpenAccount.css"

function OpenAccount() {
    return (
        <div>
            <div className="openAccount" >
                <h2>Open a Zerodha account</h2>
                <p className="mt-4 mb-4" >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
                    <button className=" signupBtn mt-3">
                        Sign up for free
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default OpenAccount;