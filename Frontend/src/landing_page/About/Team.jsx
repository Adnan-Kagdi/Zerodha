import "./Team.css"

function Team() {
    return (
        <div className="teamContainer">
            <h3 className="text-center" style={{ color: "#424242" }}>People</h3>
            <div className="container1">
                <div className="text-center teamImg1">
                    <img src="media/images/nithinKamath.jpg" />
                    <h5 style={{ color: "#424242", marginTop: "1rem" }}>Nithin Kamath</h5>
                    <p style={{ color: "#666666", marginTop: "1rem" }}>Founder, CEO</p>
                </div>
                <div className="teamInfo1">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
                </div>
            </div>

            <div className="container2 row">

            </div>
        </div>
    );
}

export default Team;