import "./Universe.css"

function Universe() {
    return (
        <div className=" universe container text-center ">
            <h2 className="text-center mb-4" style={{ color: "#424242" }}>The Zerodha Universe</h2>
            <p className="text-center" style={{ color: "#424242" }}>Extend your trading and investment experience even further with our partner platforms</p>

            <div className="row uniRow text-center ">

                <div className="col-3 p-3 " style={{ fontSize: "0.8rem" }}>
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "80%" }} />
                    <p className="text-small text-muted mt-3" >Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-3 p-3 " style={{ fontSize: "0.8rem" }}>
                    <img src="media/images/sensibullLogo.svg" className="mb-3" style={{ width: "90%" }} />
                    <p className="text-small text-muted mt-3">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-3 p-3 " style={{ fontSize: "0.8rem" }}>
                    <img src="media/images/smallcaseLogo.png" style={{ width: "80%" }} />
                    <p className="text-small text-muted mt-3">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>

            </div>

            <div className="row uniRow text-center ">

                <div className="col-3 p-3 " style={{ fontSize: "0.8rem" }}>
                    <img src="media/images/streakLogo.png" style={{ width: "63.8%" }} />
                    <p className="text-small text-muted mt-3">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-3 p-3 " style={{ fontSize: "0.8rem" }}>
                    <img src="media/images/smallcaseLogo.png" style={{ width: "80%" }} />
                    <p className="text-small text-muted mt-3">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-3 p-3 " style={{ fontSize: "0.8rem" }}>
                    <img src="media/images/dittoLogo.png" style={{ width: "54%" }} />
                    <p className="text-small text-muted mt-3">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>

            </div>
            <a href="/signup" style={{ color: "white" }}>
                <button className=" signupBtn signupA">
                    Sign up for free
                </button>
            </a>
        </div>
    )
}

export default Universe;